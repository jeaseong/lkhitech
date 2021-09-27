import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LayoutFixedNav = styled.aside`
  width: 100%;
  height: 70px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
  position: relative;
  @media only screen and (min-width: 767px) {
    height: 50px;
  }
`;

const LayoutFixNavRow = styled.ul`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  right: 0;
  @media only screen and (min-width: 767px) {
    width: 65%;
  }
`;

const LayoutFixNavItem = styled.li`
  flex-grow: 3;
  flex: 33.33%;
  font-size: 16px;
  z-index: ${(props) => props.index};
  @media only screen and (min-width: 767px) {
    flex-grow: 1;
    flex: 1;
  }
  @media only screen and (min-width: 1024px) {
    fonr-size: 20px;
  }
`;
const navArr = [
  {
    path: "/introduction",
    title: "회사소개",
    name: "introduction",
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
    name: "production",
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
    name: "solution",
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
    name: "quality",
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
    name: "hr",
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
    name: "promotion",
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
    name: "question",
    subTitle: [
      {
        sub: "문의하기",
        path: "/promotion/ci",
      },
    ],
  },
];

export default function FixNav() {
  const url = document.location.pathname;
  const pathname = url.toString().split("/")[1];
  console.log(pathname);

  return (
    <LayoutFixedNav>
      {navArr.map((item) => {
        return (
          <LayoutFixNavRow>
            {item.subTitle.map((su) => {
              return (
                <LayoutFixNavItem index={pathname === item.name ? "100" : "-1"}>
                  <Link to={su.path}>
                    {pathname === item.name ? su.sub : null}
                  </Link>
                </LayoutFixNavItem>
              );
            })}
          </LayoutFixNavRow>
        );
      })}
    </LayoutFixedNav>
  );
}
