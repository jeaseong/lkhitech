import React from "react";
import styled from "styled-components";

import Title from "../Layout/Title";

import esg from "../../img/esg.jpg";
import solution from "../../img/solution.png";
import quality from "../../img/quality.png";

const AboutContainer = styled.article`
  height: 100%;
  width: 100%;

  margin-bottom: 100px;
`;

const AboutRow = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1024px) {
    flex-direction: row;

    font-size: 20px;
  }
`;
const AboutItem = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1%;
  margin-bottom: 40px;
  &:last-child {
    margin-right: 0;
  }
`;

const AboutItemTitle = styled.h2`
  color: black;
  margin-bottom: 20px;
`;

const AboutItemImg = styled.img`
  width: 300px;
  height: 150px;
  @media screen and (min-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

const contentItems = [
  {
    img: solution,
    title: "솔루션",
    path: "/solution",
  },
  {
    img: quality,
    title: "품질관리",
    path: "/quality",
  },
  {
    img: esg,
    title: "지속가능경영",
    path: "/esg",
  },
];

export default function About() {
  return (
    <AboutContainer>
      <AboutRow>
        <Title text="LK Hi-Tech"></Title>
        <AboutContent>
          {contentItems.map((obj) => {
            return (
              <AboutItem>
                <AboutItemTitle>{obj.title}</AboutItemTitle>
                <AboutItemImg src={obj.img} alt="사진"></AboutItemImg>
              </AboutItem>
            );
          })}
        </AboutContent>
      </AboutRow>
    </AboutContainer>
  );
}
