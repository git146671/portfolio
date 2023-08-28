import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Proj1Picture from "../../../assets/images/some_background.png";

export const Projects = () => {
    return (
        <StyledProjects>
            <FlexWrapper direction={"column"} align={"center"}>
                <h2>Мои проекты</h2>
                <Project/>
                <Project/>
                <Project/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  background-color: #f6efd1;

`

export const Project = () => {
    return (
        <StyledProject>
            <FlexWrapper justify={"space-around"}>
                <StyledProjectHeader>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h3>
                </StyledProjectHeader>
                <StyledProjectText>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eligendi eos quaerat quo
                        reprehenderit. Consectetur, facere, fugiat. Assumenda blanditiis, commodi dolor enim eveniet
                        ipsa labore maiores maxime nobis, odit officia praesentium quam reprehenderit, rerum tempora
                        temporibus voluptatibus? Dignissimos, molestiae sit?
                    </p>
                    <p>
                        <a href={"#"}>Подробнее `{'>'}`</a>
                    </p>
                </StyledProjectText>
            </FlexWrapper>
        </StyledProject>
    )
}

const StyledProject = styled.div`
  width: 1040px;
  height: 447px;
  background-image: url(${Proj1Picture});
  margin: 5px;
`

const StyledProjectHeader = styled.div`
  width: 433px;
  color: white;
  font-family: Epilogue;
  font-size: 45px;
  font-style: normal;
  font-weight: 200;
  line-height: 120%;
`

const StyledProjectText = styled.div`
  width: 433px;
  color: white;
  font-family: Epilogue;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 50px 0 0 0;
`