import React, { useState } from "react";
import styled from "styled-components";
import TeachableMachine from "./TeachableMachine";

const Wrapper = styled.div`
  width: 12rem;
  height: 12rem;
  position: relative;
  border-radius: 4px;
  border: 1px dashed black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputFile = styled.h3`
  text-align: center;
  line-height: 9rem;
  color: gray;
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
  height: 3rem;
  background-color: #ff5f2e;
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #ff9979;
  }
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
          <TeachableMachine />
          <RemoveImageButton
            onClick={() => {
              setImage("");
            }}
          >
            다른 이미지 고르기
          </RemoveImageButton>
        </>
      ) : (
        <Wrapper>
          <InputStyle
            type="file"
            accept="image/*"
            name="file"
            onChange={ImageChange}
          ></InputStyle>
          <InputFile htmlFor="input-file">사진 업로드</InputFile>
        </Wrapper>
      )}
    </>
  );
};

export default ImageUploader;
