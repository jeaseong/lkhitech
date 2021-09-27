import { React, useState } from "react";
import styled from "styled-components";

import Title from "../Layout/Title";

import img1 from "../../img/img1.jpeg";
import img2 from "../../img/img2.jpeg";
import img3 from "../../img/img3.png";

const CertificationContainer = styled.article`
  width: 100%;
  height: 100vh;
`;

const CertificationRow = styled.div`
  width: 95%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const CertificationDisplay = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
}
`;

const CertificationImg = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  cursor: pointer;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CertificationDescription = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const CertificationDescriptionRow = styled.div`
  width: 80%;
`;

const DescriptionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const DescriptionSubTitle = styled.p`
  margin-top: 3px;
  font-size: 13px;
`;

const DescriptionDetail = styled.p``;

const imgArr = [img1, img2, img3];

export default function Certification() {
  const [isClick, setIsClick] = useState("");
  const [isHover, setHover] = useState(false);
  const handleMouseOver = () => setHover(false);
  const handleMouseOut = () => setHover(true);
  return (
    <CertificationContainer>
      <CertificationRow>
        <Title text="CERTIFICATION" />
        <CertificationDisplay>
          {imgArr.map((img, key) => {
            return (
              <>
                <CertificationImg
                  onMouseOver={() => {
                    handleMouseOver();
                    setIsClick(key);
                  }}
                  onMouseOut={() => {
                    handleMouseOut();
                    setIsClick();
                  }}
                  img={img}
                >
                  <CertificationDescription
                    opacity={isClick === key ? "1" : " 0"}
                  >
                    <CertificationDescriptionRow>
                      <DescriptionTitle>
                        SQ인증서
                        <DescriptionSubTitle>
                          Certification of Supplier Quality
                        </DescriptionSubTitle>
                      </DescriptionTitle>
                      <DescriptionDetail>
                        지속적 춤질확보 및 개선활동에 대한 동기부여를 통한 1차
                        협력사
                      </DescriptionDetail>
                    </CertificationDescriptionRow>
                  </CertificationDescription>
                </CertificationImg>
              </>
            );
          })}
        </CertificationDisplay>
      </CertificationRow>
    </CertificationContainer>
  );
}
