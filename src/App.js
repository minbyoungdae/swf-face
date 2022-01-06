import React from "react";
import styled from "styled-components";
import logo from "./images/swf_logo.png";
import "./index.css";

import ImageUploader from "./components/ImageUploader";
import ShareKakao from "./components/ShareKakao";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 70%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f6f7fa;
  max-width: 1000px;
  @media (max-width: 768px) {
    width: 100%;
    & > * {
      margin: 1rem 0;
    }
  }
`;

const Title = styled.span`
  color: #212f3c;
  font-size: 4rem;
  font-family: "Black Han Sans", sans-serif;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MainImage = styled.img`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <MainImage alt="스트릿 우먼 파이트" src={logo}></MainImage>
      <Title>스우파 닮은 꼴 찾기</Title>
      <ImageUploader />
      <ShareKakao />
    </Wrapper>
  );
}

export default App;
