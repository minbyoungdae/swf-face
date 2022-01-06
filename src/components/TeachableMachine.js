import React, { useEffect, useState } from "react";
import * as tmImage from "@teachablemachine/image";
import styled from "styled-components";
import "../index.css";
import ClipLoader from "react-spinners/ClipLoader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  align-items: center;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  justify-content: space-between;
  background-color: #fef5e7;
  border-radius: 10px;
  margin: 0.5rem;
  font-size: 1.5rem;
  font-family: "Nanum Pen Script", cursive;
  &:nth-child(1) {
    background-color: #f8c471;
  }
  * {
    margin: 0 1rem;
  }
`;

const LodingStyle = styled.div``;

const TeachableMachine = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/VPZroW-uF/";
  let model;
  const [result, setResult] = useState([]);

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
  }

  async function predict() {
    const image = document.getElementById("face-image");
    const prediction = await model.predict(image, false);
    prediction.sort(
      (a, b) => parseFloat(b.probability) - parseFloat(a.probability)
    );
    setResult(prediction);
  }

  useEffect(() => {
    init().then(() => {
      predict();
    });
  }, []);

  return (
    <>
      <Wrapper>
        {result.length ? (
          result.map((e, index) => {
            if (index < 3) {
              return (
                <ResultContainer key={index}>
                  <div>{e.className}</div>
                  <div>{(e.probability * 100).toFixed(0) + "%"}</div>
                </ResultContainer>
              );
            }
          })
        ) : (
          <LodingStyle>
            <ClipLoader />
          </LodingStyle>
        )}
      </Wrapper>
    </>
  );
};

export default TeachableMachine;
