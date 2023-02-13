import * as React from "react"
import styled from "@emotion/styled"
import Seo from "../components/seo"
import Landing from "../components/common/Landing"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import GlobalStyle from "../components/common/GlobalStyle"

const BackgroundWrapper = styled.div`
  background: url("/background.jpg");
  background-attachment: scroll;
  background-size: 100vw;
  overflow-x: hidden;
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <BackgroundWrapper>
      <Header />
      <Landing />
      <Footer />
    </BackgroundWrapper>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
