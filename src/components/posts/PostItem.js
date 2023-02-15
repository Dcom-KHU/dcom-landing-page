import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import oc from "open-color"

const PostItemWrapper = styled(Link)`
  text-decoration: none;
  color: #ced4da;
  display: flex;
  flex-direction: row;
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
`

const ThumbnailImageContainer = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100%;
  overflow: hidden;
`
const ThumbnailImage = styled(Img)`
  width: 100%;
  max-width: 200px;
  height: 20vh;
  transition: 0.4s linear;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
  }
`

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  width: 40vw;
  height: 20vh;
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

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Author = styled.div`
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
  margin: 0px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: ${oc.gray[4]};
`

const Description = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 13px;
  opacity: 0.8;
`

const PostItem = function ({
  title,
  date,
  description,
  link,
  fluid,
  author,
  categories,
}) {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImageContainer>
        <ThumbnailImage fluid={fluid} alt="Post Item Image" />
      </ThumbnailImageContainer>

      <PostItemContent>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Date>{date}</Date>
        <Category>
          {categories.map(item => (
            <CategoryItem key={item}>{item}</CategoryItem>
          ))}
        </Category>
        <Description>{description}</Description>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem
