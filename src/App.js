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
`;

const Title = styled.span`
  color: #212f3c;
  font-size: 4rem;
  font-family: "Black Han Sans", sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <img src={logo}></img>
      <Title>스우파 닮은 꼴 찾기</Title>
      <ImageUploader />
      <ShareKakao />
    </Wrapper>
  );
}

export default App;
