import React from "react"
import styled from "@emotion/styled"
import oc from "open-color"
import { shadow } from "../../lib/styleUtil"
import { Link } from "gatsby"

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  top: 0px;
  width: 100%;
  ${shadow(1)}
`
const HeaderBackground = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  height: auto;
`
const HeaderContents = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
`
const Logo = styled.div`
  font-size: 2rem;
  letter-spacing: 2px;
  color: ${oc.gray[4]};
  font-weight: bold;
  margin-left: 3rem;
  &:hover {
    color: white;
  }
`
const Spacer = styled.div`
  flex-grow: 1;
`
const HeaderItem = styled(Link)`
  color: ${oc.gray[4]};
  font-size: 1rem;
  &:hover {
    color: white;
  }
  margin: 10px;
`

const Header = () => {
  return (
    <Positioner>
      <HeaderBackground>
        <HeaderContents>
          <Link to="/">
            <Logo>D.COM</Logo>
          </Link>
          <Spacer />
          <HeaderItem to="/posts">Posts</HeaderItem>
          <HeaderItem to="/projects">Projects</HeaderItem>
          <HeaderItem to="/members">Members</HeaderItem>
          <HeaderItem to="/contact">Contact</HeaderItem>
        </HeaderContents>
      </HeaderBackground>
    </Positioner>
  )
}

export default Header
