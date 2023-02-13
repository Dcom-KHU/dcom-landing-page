import * as React from "react"
import styled from "@emotion/styled"
import Seo from "../components/seo"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import { graphql } from "gatsby"
import PostList from "../components/posts/PostList"
import GlobalStyle from "../components/common/GlobalStyle"
const BackgroundWrapper = styled.div`
  background: url("/background.jpg");
  background-attachment: scroll;
  background-size: 100vw;
  overflow-x: hidden;
`

const ProjectsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 100vw;
`

const HeaderText = styled.div`
  margin-top: 25vh;
  margin-left: 10vw;
  font-size: 50px;
  color: white;
  font-weight: bold;
`

const ProjectsPage = ({ data }) => {
  let nodes = data.allPostsJson.edges
  return (
    <>
      <GlobalStyle />
      <BackgroundWrapper>
        <ProjectsPageWrapper>
          <Header />
          <HeaderText>
            D.COM의 멋진 <br />
            글들을 소개할게요. 🌱
          </HeaderText>
          <PostList nodes={nodes} />
          <Footer />
        </ProjectsPageWrapper>
      </BackgroundWrapper>
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Posts" />

export default ProjectsPage

export const query = graphql`
  query MyQuery {
    allPostsJson {
      edges {
        node {
          id
          title
          date
          description
          link
          author
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
