import React from "react"
import styled from "@emotion/styled"
import { GradientText, MainText } from "./HomeStyle"

const ContactTextArea = styled.div`
  color: white;
  margin: 0 auto;
  margin-top: 20vh;
  width: 50vw;
  display: inline;
`

const Contact = () => {
  return (
    <ContactTextArea>
      <GradientText>CONTACT</GradientText>
      <MainText>TBA 🔥</MainText>
    </ContactTextArea>
  )
}

export default Contact
