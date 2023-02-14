import React from "react"
import styled from "@emotion/styled"
import PostItem from "./PostItem"
import GlobalStyle from "../common/GlobalStyle"

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  width: 70vw;
  margin: 10px auto;
  padding: 50px 0;
  background-size: 100vw;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`

const PostList = function ({ nodes }) {
  return (
    <PostListWrapper>
      <GlobalStyle />
      {nodes.map(
        ({
          node: {
            id,
            title,
            date,
            description,
            link,
            author,
            thumbnail: {
              childImageSharp: { fluid },
            },
          },
        }) => (
          <PostItem
            key={id}
            title={title}
            date={date}
            description={description}
            author={author}
            link={link}
            fluid={fluid}
          />
        )
      )}
    </PostListWrapper>
  )
}

export default PostList
