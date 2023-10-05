import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const CircleText = () => {
    return (
        <StyledCircleContainer>
            <StyledP1>П</StyledP1>
            <StyledA1>А</StyledA1>
            <StyledP2>П</StyledP2>
            <StyledA2>А</StyledA2>
            <StyledSpace1> </StyledSpace1>
            <StyledT1>т</StyledT1>
            <StyledR>р</StyledR>
            <StyledO>о</StyledO>
            <StyledI>и</StyledI>
            <StyledH>х</StyledH>
            <StyledSpace2> </StyledSpace2>
            <StyledD>д</StyledD>
            <StyledE1>е</StyledE1>
            <StyledT2>т</StyledT2>
            <StyledE2>е</StyledE2>
            <StyledY>й</StyledY>
        </StyledCircleContainer>

    );
}

const StyledCircleContainer = styled.div`
  font-size: 52px;
  font-weight: 300;
  display: block;
  position: relative;
  width: 650px;
  height: 160px;
  z-index: 2;
  margin: 0 0 230px 0;

  @media ${"screen and (max-width: 1320px)"} {
    margin: 0 0 30px 0;
    width: 350px;
  }

  @media ${theme.media.tablet} {
    font-size: 28px;
    margin: 0;
  }
`

const StyledP1 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(6.5123999999999995px, 9.309700000000007px) rotate(0.271148rad);
  position: absolute;
  color: white;
  -webkit-text-stroke: .02em black;
  font-weight: 700;
  @media ${theme.media.tablet} {
    transform: translate(6.5123999999999995px, 9.309700000000007px) rotate(0.271148rad);
  }
`

const StyledA1 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(53.9914px, 21.671300000000002px) rotate(0.239104rad);
  position: absolute;
  color: white;
  -webkit-text-stroke: .02em black;
  font-weight: 700;
  @media ${theme.media.tablet} {
    transform: translate(30.9914px, 15.671300000000002px) rotate(0.239104rad);
  }
`
const StyledP2 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(102.9203px, 32.8357px) rotate(0.209909rad);
  position: absolute;
  color: white;
  -webkit-text-stroke: .02em black;
  font-weight: 700;
  @media ${theme.media.tablet} {
    transform: translate(53.9203px, 21.8357px) rotate(0.209909rad);
  }
`
const StyledA2 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(151.7921px, 42.5269px) rotate(0.181417rad);
  position: absolute;
  color: white;
  -webkit-text-stroke: .02em black;
  font-weight: 700;
  @media ${theme.media.tablet} {
    transform: translate(78.7921px, 27.5269px) rotate(0.181417rad);
  }
`

const StyledSpace1 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(200.341px, 50.4409px) rotate(0.150924rad);
  position: absolute;
`
const StyledT1 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(246.84660000000002px, 55.8755px) rotate(0.117119rad);
  position: absolute;
  font-weight: 800;
  @media ${theme.media.tablet} {
    transform: translate(116px, 34px) rotate(0.117119rad);
  }
`
const StyledR = styled.span`
  transform-origin: 50% 57px;
  transform: translate(279.8761px, 59.2401px) rotate(0.069554rad);
  position: absolute;
  font-weight: 800;
  @media ${theme.media.tablet} {
    transform: translate(133px, 36px) rotate(0.069554rad);
  }
`
const StyledO = styled.span`
  transform-origin: 50% 57px;
  transform: translate(317.8265px, 59.913399999999996px) rotate(-0.041121rad);
  position: absolute;
  @media ${theme.media.tablet} {
    transform: translate(156px, 38px) rotate(-0.041121rad);
  }
`
const StyledI = styled.span`
  transform-origin: 50% 57px;
  transform: translate(354.8538px, 57.0086px) rotate(-0.104138rad);
  position: absolute;
  @media ${theme.media.tablet} {
    transform: translate(174px, 37px) rotate(-0.104138rad);
  }
`
const StyledH = styled.span`
  transform-origin: 50% 57px;
  transform: translate(393.6736px, 52.2984px) rotate(-0.141335rad);
  position: absolute;
  font-weight: 800;
  @media ${theme.media.tablet} {
    transform: translate(191px, 35px) rotate(-0.141335rad);
  }
`
const StyledSpace2 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(430.8003px, 45.7041px) rotate(-0.171717rad);
  position: absolute;
`
const StyledD = styled.span`
  transform-origin: 50% 57px;
  transform: translate(476.9039px, 37.9247px) rotate(-0.197534rad);
  position: absolute;
  @media ${theme.media.tablet} {
    transform: translate(220px, 31px) rotate(-0.197534rad);
  }
`
const StyledE1 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(513.7475px, 30.578100000000006px) rotate(-0.218008rad);
  position: absolute;
  @media ${theme.media.tablet} {
    transform: translate(237px, 28px) rotate(-0.218008rad);
  }
`
const StyledT2 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(546.2487px, 23.049400000000006px) rotate(-0.237358rad);
  position: absolute;
  @media ${theme.media.tablet} {
    transform: translate(253px, 25px) rotate(-0.237358rad);
  }
`
const StyledE2 = styled.span`
  transform-origin: 50% 57px;
  transform: translate(578.6496px, 14.863200000000006px) rotate(-0.257861rad);
  position: absolute;
  @media ${theme.media.tablet} {
    transform: translate(265px, 21px) rotate(-0.257861rad);
  }
`
const StyledY = styled.span`
  transform-origin: 50% 57px;
  transform: translate(611.4662px, 4.940199999999997px) rotate(-0.283275rad);
  position: absolute;
  @media ${theme.media.tablet} {
    transform: translate(280px, 17px) rotate(-0.283275rad);
  }
`