import React from "react";
import styled from "styled-components";

import img from "../img/background.jpeg";
import FixNav from "../FixNav/FixNav";

const LayoutContainer = styled.div`
  width: 100%;
  height: 120vh;
`;

const LayoutMain = styled.div`
  width: 100%;
  height: 40%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainRow = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

const MainTitle = styled.h2`
  font-size: 30px;
  color: #ffffff;
  position: relative;
  padding-bottom: 5px;
  &::after {
      content: '';
      display: block;
      width: 30px;
      height: 1px;
      position: absolute;
      left: 50%;
      bottom: 0;
      background: #fff;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      
  }
  }
`;
const MainSubTitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
`;

const MainText = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #ffffff;
  font-size: 18px;
`;

const LayoutContents = styled.article`
  width: 100%;
  height: 100vh;
`;

export default function Layout({ prop, children, title, subTitle, item }) {
  return (
    <LayoutContainer>
      <LayoutMain>
        <MainRow>
          <MainSubTitle>{subTitle}</MainSubTitle>
          <MainTitle>{title}</MainTitle>
          <MainText>
            우리는 모두 모여 춤을 추지. Let's get. I m aionman
          </MainText>
        </MainRow>
      </LayoutMain>
      <FixNav />
      {/*여기는 고정 네비게이션 바*/}
      <LayoutContents>{children}</LayoutContents>
    </LayoutContainer>
  );
}
