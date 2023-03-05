import * as React from "react"
import styled from "@emotion/styled"
import Seo from "../components/seo"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import { graphql } from "gatsby"
import GroupList from "../components/groups/GroupList"
import GlobalStyle from "../components/common/GlobalStyle"
import background from "../images/background.jpg"

const BackgroundWrapper = styled.div`
  background: url(${background});
  background-attachment: scroll;
  background-size: cover;
  height: 100vh;
  overflow-x: hidden;
`

const GroupsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`

const HeaderText = styled.div`
  margin-top: 25vh;
  margin-left: 10vw;
  font-size: 50px;
  color: white;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const GroupsPage = ({ data }) => {
  let nodes = data.allGroupsJson.edges
  return (
    <>
      <GlobalStyle />
      <BackgroundWrapper>
        <GroupsPageWrapper>
          <Header />
          <HeaderText>
            D.COM 모두가 <br />
            다함께 성장할 수 있도록 🔥
          </HeaderText>
          <GroupList nodes={nodes} />
          <Footer />
        </GroupsPageWrapper>
      </BackgroundWrapper>
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Groups" />

export default GroupsPage

export const query = graphql`
  query MyQuery {
    allGroupsJson {
      edges {
        node {
          id
          title
          leader
          description
          link
          categories
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 768, maxHeight: 200, fit: INSIDE, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
