import { React, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import CloseIcon from "@material-ui/icons/Close";
import { FaBars } from "react-icons/fa";

import logo from "../../img/logo.png";

const NavContainer = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 767px) {
    padding-top: 5px;
  }
`;

const HeaderLogo = styled.img`
  width: 120px;
`;

const NavRow = styled.ul`
  display: none;
  @media screen and (min-width: 767px) {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const NavLi = styled.li`
  z-index: 2;
  line-height: 60px;
  flex: 1;
  cursor: pointer;
  color: black;
  position: relative;
`;

const DropRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-indes: -10;
  transition: all 0.4s ease-in-out;
`;

const DropList = styled.li`
  width: 100%;
  white-space: nowrap;
  color: black;
  &:hover {
    color: orange;
    transition: 0.3s;
  }
`;

const NavP = styled.p`
  color: black;
  &:hover {
    color: orange;
    transition: 0.3s;
  }
`;

const navArr = [
  {
    path: "/introduction",
    title: "회사소개",
    subTitle: [
      {
        sub: "회사개요",
        path: "/introduction/summary",
      },
      {
        sub: "연혁 수상",
        path: "/introduction/history",
      },
      {
        sub: "비전",
        path: "/introduction/vision",
      },
      {
        sub: "지속가능경영",
        path: "/introduction/esg",
      },
      {
        sub: "조직도",
        path: "/introduction/organization",
      },
      {
        sub: "오시는길",
        path: "/introduction/map",
      },
    ],
  },
  {
    path: "/production",
    title: "제품소개",
    subTitle: [
      {
        sub: "harness",
        path: "/production/harness",
      },
    ],
  },
  {
    path: "/solution",
    title: "솔루션",
    subTitle: [
      {
        sub: "제조공정",
        path: "/solution/process",
      },
      {
        sub: "제조공정 시스템",
        path: "/solution/systems",
      },
      {
        sub: "개발공정",
        path: "/solution/development",
      },
      {
        sub: "주요장비",
        path: "/solution/equipment",
      },
    ],
  },
  {
    path: "/quality",
    title: "품질경영",
    subTitle: [
      {
        sub: "품질방침",
        path: "/quality/policy",
      },
      {
        sub: "인증",
        path: "/quality/certification",
      },
    ],
  },
  {
    path: "/hr",
    title: "인재경영",
    subTitle: [
      {
        sub: "인재상",
        path: "/hr/talent",
      },
      {
        sub: "채용정보",
        path: "/hr/employment",
      },
      {
        sub: "직무",
        path: "/hr/job",
      },
    ],
  },
  {
    path: "/promotion",
    title: "홍보센터",
    subTitle: [
      {
        sub: "LK 소식",
        path: "/promotion/news",
      },
      {
        sub: "CI",
        path: "/promotion/ci",
      },
    ],
  },
  {
    path: "/question",
    title: "문의하기",
    subTitle: [
      {
        sub: "문의하기",
        path: "/promotion/ci",
      },
    ],
  },
];

const useStyls = makeStyles({
  drawer: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px dotted #dee2e6 ",
    cursor: "pointer",
    color: "black",
    padding: 20,
  },
  close: {
    width: 50,
    textAlign: "center",
  },
  closeBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default function Nav() {
  const classes = useStyls();

  const [isToggle, setIsToggle] = useState(false);
  const handleDraweToggle = () => setIsToggle(!isToggle);

  return (
    <NavContainer>
      <Link to="/">
        <HeaderLogo src={logo} />
      </Link>
      <FaBars
        className="header-icon header-icon_bar"
        onClick={handleDraweToggle}
      />

      {/*모바일 화면에서 메뉴바*/}
      <Drawer open={isToggle} onClick={handleDraweToggle}>
        <MenuItem className={classes.closeBtn} onClick={handleDraweToggle}>
          <CloseIcon />
        </MenuItem>
        {navArr.map((obj) => {
          return (
            <Link to={obj.path}>
              <MenuItem className={classes.drawer} onClick={handleDraweToggle}>
                {obj.title}
              </MenuItem>
            </Link>
          );
        })}
      </Drawer>
      {/*데스크탑 화면에서 메뉴바*/}
      <NavRow>
        {navArr.map((obj) => {
          return (
            <NavLi>
              <Link to={obj.path}>
                <NavP>{obj.title}</NavP>
              </Link>
              <DropRow>
                {obj.subTitle.map((su) => {
                  return (
                    <Link to={su.path}>
                      <DropList>{su.sub}</DropList>
                    </Link>
                  );
                })}
              </DropRow>
            </NavLi>
          );
        })}
      </NavRow>
    </NavContainer>
  );
}
