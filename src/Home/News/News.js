import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./News.css";

import Title from "../Layout/Title";

import esg from "../../img/esg.jpg";
import solution from "../../img/solution.png";
import quality from "../../img/quality.png";

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

const NewsContainer = styled.article`
  width: 100%;
  height: 60vh;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: center;
`;

const NewsItem = styled.div`
  width: 300px;
  height: 300px;

  margin: 0 auto;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 767 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function News() {
  return (
    <NewsContainer>
      <TitleRow>
        <Title text="LK Hi-Tech 소식"></Title>
      </TitleRow>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={4000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
        sliderClass=""
        swipeable
      >
        {contentItems.map((obj) => {
          return (
            <NewsItem>
              <Img src={obj.img} alt="이미지"></Img>
            </NewsItem>
          );
        })}
      </Carousel>
    </NewsContainer>
  );
}
