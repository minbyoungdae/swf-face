import styled from "styled-components";
import logo from "./images/swf_logo.png";

import ImageUploader from "./components/ImageUploader";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <img src={logo}></img>
      <h1>닮은 꼴 찾기</h1>
      <ImageUploader />
    </Wrapper>
  );
}

export default App;
