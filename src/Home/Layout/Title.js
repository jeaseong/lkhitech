import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h2`
  text-align: center;
  display: block;
  font-weight: bold;
  font-size: 25px;
  border-bottom: 5px double #212529;
  margin-bottom: 50px;
  @media screen and (min-width: 1024px) {
    font-size: 35px;
    margin-bottom: 100px;
  }
`;

export default function Title({ text }) {
  return <TitleContainer>{text}</TitleContainer>;
}
