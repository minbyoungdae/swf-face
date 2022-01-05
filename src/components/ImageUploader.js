import React, { useState } from "react";
import styled from "styled-components";
import TeachableMachine from "./TeachableMachine";
import Test from "./Test";

const Wrapper = styled.div`
  width: 12rem;
  height: 12rem;
  position: relative;
  border-radius: 4px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputFile = styled.h3`
  text-align: center;
  line-height: 9rem;
`;

const InputStyle = styled.input`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
`;

const PreviewImg = styled.img`
  width: 12rem;
  height: auto;
`;

const RemoveImageButton = styled.button`
  width: 12rem;
  height: 2rem;
  background-color: darkgray;
  border: 1px solid gray;
  color: white;
  border-radius: 5px;
`;

const ImageUploader = () => {
  const [image, setImage] = useState();

  const ImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files;
    setImage(URL.createObjectURL(file[0]));
  };

  return (
    <>
      {image ? (
        <>
          <PreviewImg id="face-image" src={image}></PreviewImg>
          <RemoveImageButton
            onClick={() => {
              setImage("");
            }}
          >
            다른 이미지 고르기
          </RemoveImageButton>
          <Test image={image} />
        </>
      ) : (
        <Wrapper>
          <InputStyle
            type="file"
            accept="image/*"
            name="file"
            onChange={ImageChange}
          ></InputStyle>
          <InputFile htmlFor="input-file">파일 선택하기</InputFile>
        </Wrapper>
      )}
    </>
  );
};

export default ImageUploader;
