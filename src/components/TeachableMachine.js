import React, { useEffect, useState } from "react";
import * as tmImage from "@teachablemachine/image";
import styled from "styled-components";
import "../index.css";

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

const LodingStyle = styled.div`
  #floatingBarsG {
    position: relative;
    width: 60px;
    height: 75px;
    margin: auto;
  }

  .blockG {
    position: absolute;
    background-color: rgb(255, 255, 255);
    width: 10px;
    height: 23px;
    border-radius: 8px 8px 0 0;
    -o-border-radius: 8px 8px 0 0;
    -ms-border-radius: 8px 8px 0 0;
    -webkit-border-radius: 8px 8px 0 0;
    -moz-border-radius: 8px 8px 0 0;
    transform: scale(0.4);
    -o-transform: scale(0.4);
    -ms-transform: scale(0.4);
    -webkit-transform: scale(0.4);
    -moz-transform: scale(0.4);
    animation-name: fadeG;
    -o-animation-name: fadeG;
    -ms-animation-name: fadeG;
    -webkit-animation-name: fadeG;
    -moz-animation-name: fadeG;
    animation-duration: 0.622s;
    -o-animation-duration: 0.622s;
    -ms-animation-duration: 0.622s;
    -webkit-animation-duration: 0.622s;
    -moz-animation-duration: 0.622s;
    animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-direction: normal;
    -o-animation-direction: normal;
    -ms-animation-direction: normal;
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
  }

  #rotateG_01 {
    left: 0;
    top: 27px;
    animation-delay: 0.2295s;
    -o-animation-delay: 0.2295s;
    -ms-animation-delay: 0.2295s;
    -webkit-animation-delay: 0.2295s;
    -moz-animation-delay: 0.2295s;
    transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
  }

  #rotateG_02 {
    left: 8px;
    top: 10px;
    animation-delay: 0.316s;
    -o-animation-delay: 0.316s;
    -ms-animation-delay: 0.316s;
    -webkit-animation-delay: 0.316s;
    -moz-animation-delay: 0.316s;
    transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
  }

  #rotateG_03 {
    left: 25px;
    top: 3px;
    animation-delay: 0.3925s;
    -o-animation-delay: 0.3925s;
    -ms-animation-delay: 0.3925s;
    -webkit-animation-delay: 0.3925s;
    -moz-animation-delay: 0.3925s;
    transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
  }

  #rotateG_04 {
    right: 8px;
    top: 10px;
    animation-delay: 0.469s;
    -o-animation-delay: 0.469s;
    -ms-animation-delay: 0.469s;
    -webkit-animation-delay: 0.469s;
    -moz-animation-delay: 0.469s;
    transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
  }

  #rotateG_05 {
    right: 0;
    top: 27px;
    animation-delay: 0.5455s;
    -o-animation-delay: 0.5455s;
    -ms-animation-delay: 0.5455s;
    -webkit-animation-delay: 0.5455s;
    -moz-animation-delay: 0.5455s;
    transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
  }

  #rotateG_06 {
    right: 8px;
    bottom: 7px;
    animation-delay: 0.622s;
    -o-animation-delay: 0.622s;
    -ms-animation-delay: 0.622s;
    -webkit-animation-delay: 0.622s;
    -moz-animation-delay: 0.622s;
    transform: rotate(135deg);
    -o-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
  }

  #rotateG_07 {
    bottom: 0;
    left: 25px;
    animation-delay: 0.6985s;
    -o-animation-delay: 0.6985s;
    -ms-animation-delay: 0.6985s;
    -webkit-animation-delay: 0.6985s;
    -moz-animation-delay: 0.6985s;
    transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
  }

  #rotateG_08 {
    left: 8px;
    bottom: 7px;
    animation-delay: 0.775s;
    -o-animation-delay: 0.775s;
    -ms-animation-delay: 0.775s;
    -webkit-animation-delay: 0.775s;
    -moz-animation-delay: 0.775s;
    transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
  }

  @keyframes fadeG {
    0% {
      background-color: rgb(0, 0, 0);
    }

    100% {
      background-color: rgb(255, 255, 255);
    }
  }

  @-o-keyframes fadeG {
    0% {
      background-color: rgb(0, 0, 0);
    }

    100% {
      background-color: rgb(255, 255, 255);
    }
  }

  @-ms-keyframes fadeG {
    0% {
      background-color: rgb(0, 0, 0);
    }

    100% {
      background-color: rgb(255, 255, 255);
    }
  }

  @-webkit-keyframes fadeG {
    0% {
      background-color: rgb(0, 0, 0);
    }

    100% {
      background-color: rgb(255, 255, 255);
    }
  }

  @-moz-keyframes fadeG {
    0% {
      background-color: rgb(0, 0, 0);
    }

    100% {
      background-color: rgb(255, 255, 255);
    }
  }
`;

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
            <div id="floatingBarsG">
              <div class="blockG" id="rotateG_01"></div>
              <div class="blockG" id="rotateG_02"></div>
              <div class="blockG" id="rotateG_03"></div>
              <div class="blockG" id="rotateG_04"></div>
              <div class="blockG" id="rotateG_05"></div>
              <div class="blockG" id="rotateG_06"></div>
              <div class="blockG" id="rotateG_07"></div>
              <div class="blockG" id="rotateG_08"></div>
            </div>
          </LodingStyle>
        )}
      </Wrapper>
    </>
  );
};

export default TeachableMachine;
