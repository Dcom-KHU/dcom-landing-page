import styled from "@emotion/styled"
import oc from "open-color"

export const GradientText = styled.div`
  font-size: 60px;
  background: rgb(41, 128, 185);
  background: linear-gradient(
    90deg,
    rgba(41, 128, 185, 1) 0%,
    rgba(109, 213, 250, 1) 18%,
    rgba(255, 255, 255, 1) 100%
  );
  color: transparent;
  background-clip: text;
  font-size: 1.3rem;
  letter-spacing: 0.3rem;
  font-weight: bold;
`

export const MainText = styled.div`
  font-size: 4vw;
  padding-left: 5px;
  margin-bottom: 30px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const SubText = styled.div`
  color: ${oc.gray[4]};
  font-size: 2vw;
  padding-left: 5px;
  margin-bottom: 30px;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
