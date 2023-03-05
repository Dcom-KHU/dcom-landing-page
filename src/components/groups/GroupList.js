import React from "react"
import styled from "@emotion/styled"
import GroupItem from "./GroupItem"
import GlobalStyle from "../common/GlobalStyle"

const GroupListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

const GroupList = function ({ nodes }) {
  return (
    <GroupListWrapper>
      <GlobalStyle />
      {nodes.map(
        ({
          node: {
            id,
            title,
            leader,
            description,
            link,
            categories,
            thumbnail: {
              childImageSharp: { fluid },
            },
          },
        }) => (
          <GroupItem
            key={id}
            title={title}
            leader={leader}
            description={description}
            categories={categories}
            link={link}
            fluid={fluid}
          />
        )
      )}
    </GroupListWrapper>
  )
}

export default GroupList
