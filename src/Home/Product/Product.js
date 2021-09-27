import { React, useState } from "react";
import styled from "styled-components";

import Title from "../Layout/Title";

import img from "../../img/esg.jpg";
import logo from "../../img/logo.png";

const ProductContainer = styled.article`
  width: 100%;
  height: 100vh;
  margin-bottom: 100px;
`;

const ProductRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 95%;
  height: 100%;
`;

const ProductDisplay = styled.section`
  width: 95%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProductList = styled.ul`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  z-index: 100;
  background-color: #ffffff;
`;

const ProductItemLink = styled.li`
  width: 33.33%;
  flex-grow: 3;
  text-align: center;
  padding: 10px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  color: black;
  background-color: ${(props) => props.background};
  cursor: pointer;
  &:nth-child(3n) {
    border-right: none;
  }
  &:last-child {
    border-right: none;
  }

  transition: all 0.2s;

  @media screen and (min-width: 1024px) {
    font-weight: bold;
    font-size: 20px;
    padding: 15px;
  }
`;

const productLink = [
  {
    key: "1",
    title: "제품1",
    text: "이건 제품 1",
    img: img,
  },
  {
    key: "2",
    title: "제품2",
    text: "이건 제품 2",
    img: logo,
  },
  { key: "3", title: "제품3", text: "이건 제품 3", img: img },
  { key: "4", title: "제품4", text: "이건 제품 4", img: logo },
  { key: "5", title: "제품5", text: "이건 제품 5", img: img },
  { key: "6", title: "제품6", text: "이건 제품 6", img: logo },
  { key: "7", title: "제품7", text: "이건 제품 7", img: img },
  { key: "8", title: "제품8", text: "이건 제품 8", img: logo },
];

const ProductBoard = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  color: black;
  position: relative;
  overflow: hidden;
`;

const ProductImg = styled.img`
  width: 100%;

  position: absolute;
  opacity: 0;
  opacity: ${(props) => props.opacity};
  transition: all 0.3s;
`;

export default function Product() {
  const [isClick, setIsClick] = useState("");

  return (
    <ProductContainer>
      <ProductRow>
        <Title text="제품" />
        <ProductDisplay>
          <ProductList>
            {productLink.map((obj, key) => {
              return (
                <ProductItemLink
                  onClick={() => {
                    setIsClick(key);
                  }}
                  background={isClick === key ? "#adb5bd" : ""}
                >
                  {obj.title}
                </ProductItemLink>
              );
            })}
          </ProductList>

          <ProductBoard>
            {productLink.map((obj, key) => {
              return (
                <ProductImg
                  opacity={isClick === key ? "1" : "0"}
                  src={obj.img}
                  alt="이미지"
                ></ProductImg>
              );
            })}
          </ProductBoard>
        </ProductDisplay>
      </ProductRow>
    </ProductContainer>
  );
}
