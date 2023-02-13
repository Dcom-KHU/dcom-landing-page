import React from "react"
import styled from "@emotion/styled"
import GlobalStyle from "./GlobalStyle"
import Slider from "react-slick"
import oc from "open-color"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const LandingWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: url("/background.jpg");
  background-attachment: scroll;
  background-size: 100vw;
`
const GradientText = styled.div`
  font-size: 60px;
  background: rgb(41, 128, 185);
  background: linear-gradient(
    90deg,
    rgba(41, 128, 185, 1) 0%,
    rgba(109, 213, 250, 1) 18%,
    rgba(255, 255, 255, 1) 100%
  );
  color: transparent;
  background-clip: text;
  font-size: 1.3rem;
  letter-spacing: 0.3rem;
  font-weight: bold;
`
const MainTextArea = styled.div`
  color: white;
  margin: 0 auto;
  margin-top: 20vh;
  width: 50vw;
  display: inline;
`

const TitleTextArea = styled.div`
  color: white;
  margin-top: 20vh;
  margin-left: 50vw;
  width: 50vw;
  display: inline;
`

const MainText = styled.div`
  font-size: 4vw;
  padding-left: 5px;
  margin-bottom: 30px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`

const SubText = styled.div`
  color: ${oc.gray[4]};
  font-size: 2vw;
  padding-left: 5px;
  margin-bottom: 30px;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
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
    font-size: 50px;
  }
`

const SlideImage = styled.img`
  height: 300px;
  width: 500px;
`
const SliderWrapper = styled.div`
  display: inline;
  margin: 30px auto;
  height: 500px;
  width: 500px;
`

const GradientTopMainText = styled.div`
  display: inline-block;
  font-size: 4vw;
  padding-left: 5px;
  margin-bottom: 30px;
  font-weight: bold;
  background-image: linear-gradient(
    90deg,
    #12c2e9 0%,
    #c471ed 50%,
    #f64f59 100%
  );
  background-position: 5px 10px;
  background-size: 20% 20%;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`

const Landing = () => {
  const images = ["/ex1.jpg", "/ex2.jpeg", "/ex3.jpg"]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <LandingWrapper>
      <TitleTextArea>
        <GradientText>ABOUT US</GradientText>
        <MainText>함께 배우고</MainText>
        <MainText>성장하고</MainText>
        <MainText>도전하며</MainText>
        <GradientBottomMainText>미래를 만들어갑니다.</GradientBottomMainText>
        <SubText>경희대학교 대표 IT 동아리 D.COM을 소개합니다.</SubText>
      </TitleTextArea>
      <MainTextArea>
        <GradientText>OUR STORY</GradientText>
        <SubText>암튼 그럴싸한 멋진 말이랑 사진 넣기. 😎</SubText>
      </MainTextArea>
      <SliderWrapper>
        <Slider {...settings}>
          <div>
            <SlideImage src={images[0]}></SlideImage>
          </div>
          <div>
            <SlideImage src={images[1]}></SlideImage>
          </div>
          <div>
            <SlideImage src={images[2]}></SlideImage>
          </div>
          <div>
            <SlideImage src={images[0]}></SlideImage>
          </div>
          <div>
            <SlideImage src={images[1]}></SlideImage>
          </div>
          <div>
            <SlideImage src={images[2]}></SlideImage>
          </div>
        </Slider>
      </SliderWrapper>
      <MainTextArea>
        <GradientText>CONTACT</GradientText>
        <MainText>TBA 🔥</MainText>
      </MainTextArea>
      <GlobalStyle />
    </LandingWrapper>
  )
}

export default Landing
