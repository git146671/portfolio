import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import AlicePicture from "../../../assets/images/Alice.jpg";
import AlexPicture from "../../../assets/images/Alex.jpg";
import AnnaPicture from "../../../assets/images/Anna.jpg";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../styles/Theme";

type ProjectsPropsType = {
    bgi: any;
    headerTopText?: string;
    headerBottomText?: string;
    mainText?: string;
}

export const Projects = () => {
    return (
        <StyledProjects>
            <Container maxWidth={"1040px"} padding={"0"}>
                <FlexWrapper direction={"column"} align={"center"} justify={"space-between"} height={"2070px"}>
                    <StyledMyProjects>Мои проекты</StyledMyProjects>
                    <Project bgi={AlicePicture} headerTopText={"АЛИСА"} headerBottomText={"Преодолевает трудности припеваючи"}
                    mainText={"Проект в работе уже более 16 лет. За это время достигнуты такие результаты как награды в вокальных конкурсах, сдача ОГЭ, приобретены навыки уборки и готовки."}/>
                    <Project bgi={AlexPicture} headerTopText={"САША"} headerBottomText={"С мечтами о спорте"}
                             mainText={"Проект 2012 года, второе название: \"мамин сын\". Продолжает развиваться, в планах золотой мяч, математика и стоматология."}/>
                    <Project bgi={AnnaPicture} headerTopText={"АНЯ"} headerBottomText={"Настоящая принцесса"}
                    mainText={"Последний! проект 2018 года. Несмотря на свежесть проекта, уже показывает высокие результаты и видимые перспективы. Особая фича: умеет вить веревки из отца."}/>
                    <SomeDiv/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  background-color: #f6efd1;

`

export const Project = (props: ProjectsPropsType) => {
    return (
        <StyledProject bgi={props.bgi}>
            <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                <StyledProjectHeader>
                    <StyledH3>
                        {props.headerTopText}
                    </StyledH3>
                    <StyledP>
                        {props.headerBottomText}
                    </StyledP>
                </StyledProjectHeader>
                <StyledProjectText>
                    <StyledMainText>
                        {props.mainText}
                    </StyledMainText>
                    <StyledA href={"#"}>Подробнее {">"}</StyledA>
                </StyledProjectText>
            </FlexWrapper>
        </StyledProject>
    )
}

const StyledProject = styled.div<ProjectsPropsType>`
  width: 1040px;
  height: 447px;
  background-image: url(${props => props.bgi});
  margin: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${"screen and (max-width: 1040px)"} {
    width: auto;
    height: 620px;
  }
`

const StyledProjectHeader = styled.div`
  max-width: 433px;
  color: white;
  font-size: 45px;
  font-style: normal;
  font-weight: 200;
  line-height: 120%;
  text-align: left;
  @media ${"screen and (max-width: 1040px)"} {
    margin-left: 20px;
  }
`

const StyledProjectText = styled.div`
  max-width: 433px;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 50px 0 0 0;
  text-align: left;
  @media ${"screen and (max-width: 1040px)"} {
    margin-right: 30px;
    
  }

  @media ${theme.media.mobile} {
    margin-top: 0;
  }
`

const StyledMyProjects = styled.span`
  font-size: 120px;
  font-style: normal;
  font-weight: 700;
  line-height: 93.5%;
  padding: 170px 0 0 0;
 // width: 100px;
  align-self: flex-start;
  text-align: left;

  @media ${theme.media.mobile} {
    font-size: 65px;
    padding: 170px 0 0 10px;
  }
`

const StyledH3 = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color:white;
  margin: 92px 0 16px 0;
`

const StyledP = styled.p`
  font-size: 45px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
`

const StyledMainText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 50px 0 20px 130px;
  @media ${"screen and (max-width: 1040px)"} {
    margin-left: 20px;
  }
`
const StyledA = styled.a`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: white;
  margin: 0 0 0 130px;
`

const SomeDiv = styled.div`

  margin: 0 0 170px 0;
`