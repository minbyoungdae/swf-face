import React from "react";
import { KakaoLinkDefault } from "react-kakao-link";
import styled from "styled-components";
import kakaoLogo from "../images/kakaoLogo.jpeg";

const ShareImage = styled.img`
  width: 3rem;
  border-radius: 50%;
  margin: 2rem 0;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const ShareKakao = () => {
  const template = {
    objectType: "feed",
    content: {
      title: "스우파 닮은 꼴 찾기",
      description: "스트릿 우먼 파이터 닮은 꼴 찾기 테스트",
      imageUrl:
        "https://media.istockphoto.com/vectors/letter-logo-formed-by-two-parallel-lines-with-noise-texture-vector-id1201523312?k=20&m=1201523312&s=612x612&w=0&h=muC5BerISf25lI9aWRDTUpWABqOADIO_OPfEX2ZkMU0=",
      link: {
        mobileWebUrl: "https://swfface.netlify.app/",
        webUrl: "https://swfface.netlify.app/",
      },
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "https://swfface.netlify.app/",
          webUrl: "https://swfface.netlify.app/",
        },
      },
    ],
  };

  return (
    <div>
      <KakaoLinkDefault
        template={template}
        jsKey={"e346b1d37e833952b5657ea89d4760c4"}
      >
        <ShareImage src={kakaoLogo}></ShareImage>
      </KakaoLinkDefault>
    </div>
  );
};

export default ShareKakao;
