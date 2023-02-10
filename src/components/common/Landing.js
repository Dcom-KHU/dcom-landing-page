import React from "react"
import styled from "@emotion/styled"

const LandingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainTextArea = styled.div`
  font-size: 70px;
  color: white;
  margin-top: 40vh;
  width: 40vw;
  display: inline;
`

const MainText1 = styled.div`
  font-size: 100px;
  padding-left: 10px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`

const MainText2 = styled.div`
  font-size: 70px;
  padding-left: 10px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const Landing = function () {
  const handleScrollDown = function () {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth",
    })
  }
  return (
    <LandingWrapper>
      <MainTextArea>
        <MainText2></MainText2>
        <MainText1>Together.</MainText1>
      </MainTextArea>
    </LandingWrapper>
  )
}

export default Landing
