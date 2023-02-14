import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  color: white;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
const LinkText = styled(Link)`
  text-decoration: underline;
  display: inline;
  &:hover {
    text-decoration: underline;
  }
`

const Footer = function () {
  return (
    <FooterWrapper>
      <div>
        <br />© 2023 Designed By{" "}
        <LinkText to="https://github.com/FacerAin">Yongwoo Song</LinkText>,
        Powered By Gatsby.
      </div>
    </FooterWrapper>
  )
}

export default Footer
