import React from "react";
import styled from "styled-components";

import bgimgs from "../../img/main_sm.jpg";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${bgimgs});
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainDark = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 767px) {
    width: 95%;
    height: 95%;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const MainTitle = styled.h2`
  color: #ffffff;
  font-weight: bold;
  text-align: right;
  font-size: 20px;
  white-space: pre-wrap;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  @media screen and (min-width: 767px) {
    font-size: 30px;
    padding: 30px;
    line-height: 1.5;
  }
`;

const mainTitle =
  "Wiring Harness\nFor Aitomobile Lamp\n자동차의 미래와 함께 합니다.";

export default function Main() {
  return (
    <MainContainer>
      <MainDark>
        <MainTitle>
          {mainTitle.split("\n").map((line) => {
            return <p>{line}</p>;
          })}
        </MainTitle>
      </MainDark>
    </MainContainer>
  );
}
