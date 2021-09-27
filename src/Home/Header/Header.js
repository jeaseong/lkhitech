import { React, useState } from "react";
import styled from "styled-components";

import Nav from "./Nav";
import "./Header.css";

const HeaderLayout = styled.header`
  overflow: hidden;
  width: 100%;
  height: 70px;
  background: linear-gradient(
    #ffffff 70px,
    rgba(255, 255, 255, 0.8) 70px,
    rgba(255, 255, 255, 0.8)
  );
  transition: all 0.4s ease-in-out;
  position: fixed;
  top: 0;
  z-index: 1002;
  @media screen and (min-width: 767px) {
    height: ${(props) => props.height}px;
  }
`;

const HeaderRow = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  const [isHover, setIsHover] = useState(true);
  const handleMouseOver = () => setIsHover(false);
  const handleMouseOut = () => setIsHover(true);
  return (
    <HeaderLayout
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleMouseOut}
      height={isHover ? "" : "440"}
    >
      <HeaderRow>
        <Nav />
      </HeaderRow>
    </HeaderLayout>
  );
}
