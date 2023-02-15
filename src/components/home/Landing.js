import React from "react"
import styled from "@emotion/styled"
import GlobalStyle from "../common/GlobalStyle"
import Title from "./Title"
import Story from "./Story"
import Contact from "./Contact"

const LandingWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-attachment: scroll;
  background-size: 100vw;
`

const Landing = () => {
  return (
    <LandingWrapper>
      <Title />
      <Story />
      <Contact />
      <GlobalStyle />
    </LandingWrapper>
  )
}

export default Landing
