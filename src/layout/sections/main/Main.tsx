import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../assets/images/MeInSquareNew.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container/Container";
import {CircleText} from "./CircleText";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container maxWidth={"1140px"} position={"relative"}>
                <FlexWrapper>
                    <FlexWrapper justify={"flex-start"} direction={"column"}>
                        <HelloStyled>ПРИВЕТ Я АНТОН</HelloStyled>
                        <CircleText/>
                    </FlexWrapper>
                    <PhotoWrapper>
                        <Photo src={mainPhoto}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  
  background-color: #a8eabd;
`

const Photo = styled.img`

  transform: rotate(7.517deg);
  object-fit: cover;
  position: absolute;
  z-index: 1;
  //right: 3%;
  top: 12%
`

const HelloStyled = styled.div`
  font-size: 150px;
  font-style: normal;
  font-weight: 700;
  line-height: 117.5%;
  z-index: 2;
  width: 700px;
  margin: 155px 0 0 0;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  right: 15%;

  &::before {
    background-color: ${theme.colors.underPhotoSquareColor};
    content: "";
    width: 570px;
    height: 570px;
    transform: rotate(-7.517deg);
    position: absolute;
    z-index: 0;
    top: 12%;
  }

`