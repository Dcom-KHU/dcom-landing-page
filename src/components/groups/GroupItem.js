import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import oc from "open-color"

const GroupItemWrapper = styled(Link)`
  max-width: 20vw;
  text-decoration: none;
  color: #ced4da;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.2s box-shadow;
  background-color: #212529;
  border-radius: 10px;
  overflow-x: visible;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: #343a40;
    color: #ced4da;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100vw;
  }
`

const ThumbnailImageContainer = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  max-width: 20vw;
  height: 70%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100vw;
  }
`

const ThumbnailImage = styled(Img)`
  height: 100%;
  border-radius: 10px 10px 0 0;
  transition: 0.4s linear;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
  }
`

const GroupItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`

const Description = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 13px;
  opacity: 0.8;
`

const Leader = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const CategoryItem = styled.div`
  margin: 3px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: ${oc.gray[4]};
`

const GroupItem = function ({
  title,
  leader,
  description,
  categories,
  link,
  fluid,
}) {
  return (
    <GroupItemWrapper to={link}>
      <ThumbnailImageContainer>
        <ThumbnailImage fluid={fluid} alt="Group Item Image" />
      </ThumbnailImageContainer>

      <GroupItemContent>
        <Title>{title}</Title>
        <Category>
          {categories.map(item => (
            <CategoryItem key={item}>{item}</CategoryItem>
          ))}
        </Category>
        <Description>{description}</Description>
      </GroupItemContent>
    </GroupItemWrapper>
  )
}

export default GroupItem
