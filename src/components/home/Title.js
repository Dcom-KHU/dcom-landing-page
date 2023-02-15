import React from "react"
import styled from "@emotion/styled"
import { GradientText, MainText, SubText } from "./HomeStyle"

const TitleTextArea = styled.div`
  color: white;
  margin-top: 20vh;
  margin-left: 50vw;
  width: 50vw;
  display: inline;
`

const GradientBottomMainText = styled.div`
  font-size: 4vw;
  padding-left: 5px;
  margin-bottom: 30px;
  font-weight: bold;
  background-image: linear-gradient(90deg, #e67399, #f2a640);
  background-position: bottom;
  background-size: 30% 30%;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
const Title = () => {
  return (
    <TitleTextArea>
      <GradientText>ABOUT US</GradientText>
      <MainText>함께 배우고</MainText>
      <MainText>성장하고</MainText>
      <MainText>도전하며</MainText>
      <GradientBottomMainText>미래를 만들어갑니다.</GradientBottomMainText>
      <SubText>경희대학교 대표 IT 동아리 D.COM을 소개합니다.</SubText>
    </TitleTextArea>
  )
}

export default Title
