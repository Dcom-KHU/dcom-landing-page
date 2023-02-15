import React from "react"
import styled from "@emotion/styled"
import { GradientText, SubText } from "./HomeStyle"
import ImageSlider from "./ImageSlider"

const StoryTextArea = styled.div`
  color: white;
  margin: 0 auto;
  margin-top: 20vh;
  width: 50vw;
  display: inline;
`

const Story = () => {
  return (
    <>
      <StoryTextArea>
        <GradientText>OUR STORY</GradientText>
        <SubText>암튼 그럴싸한 멋진 말이랑 사진 넣기. 😎</SubText>
      </StoryTextArea>
      <ImageSlider />
    </>
  )
}

export default Story
