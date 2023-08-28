import React from 'react';
import styled from "styled-components";
import mainPhoto from "../../../assets/images/MeSquare.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <SpanStyled>ПРИВЕТ Я АНТОН</SpanStyled>
                    <MainTitle>основной заголовок (будет полукругом)</MainTitle>
                </div>

                <Photo src={mainPhoto}/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 60vh;
  background-color: #a8eabd;
`

const Photo = styled.img`
  width: 570px;
  height: 570px;
  transform: rotate(7.517deg);
  object-fit: cover;
`

const MainTitle = styled.h1`
  font-family: Epilogue;
  font-size: 51.778px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const SpanStyled = styled.span`
  color: #2D2C2C;
  font-family: Epilogue;
  font-size: 150px;
  font-style: normal;
  font-weight: 800;
  line-height: 117.5%;
`