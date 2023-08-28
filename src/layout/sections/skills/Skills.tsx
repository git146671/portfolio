import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

type SkillPropsType = {
    iconObject: any;
    skillHeader: string;
    skillText: string;
}

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                <Skill iconObject={<Icon iconId={"man"} svgSize={"150px"} svgViewBox={"0 0 64 64"}/>}
                       skillHeader={"Заголовок скилла"}
                       skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus nesciunt porro qui ratione ullam."}/>
                <Skill iconObject={<Icon iconId={"man"} svgSize={"150px"} svgViewBox={"0 0 64 64"}/>}
                       skillHeader={"Заголовок скилла"}
                       skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus nesciunt porro qui ratione ullam."}/>
                <Skill iconObject={<Icon iconId={"man"} svgSize={"150px"} svgViewBox={"0 0 64 64"}/>}
                       skillHeader={"Заголовок скилла"}
                       skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus nesciunt porro qui ratione ullam."}/>
                <Skill iconObject={<Icon iconId={"man"} svgSize={"150px"} svgViewBox={"0 0 64 64"}/>}
                       skillHeader={"Заголовок скилла"}
                       skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus nesciunt porro qui ratione ullam."}/>
                <Skill iconObject={<Icon iconId={"man"} svgSize={"150px"} svgViewBox={"0 0 64 64"}/>}
                       skillHeader={"Заголовок скилла"}
                       skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus nesciunt porro qui ratione ullam."}/>
                <Skill iconObject={<Icon iconId={"man"} svgSize={"150px"} svgViewBox={"0 0 64 64"}/>}
                       skillHeader={"Заголовок скилла"}
                       skillText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus nesciunt porro qui ratione ullam."}/>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #9afc8b;
`

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper justify={"center"} align={"center"}>
                {props.iconObject}
                <StyledSkillDescription>
                    <h2>{props.skillHeader}</h2>
                    <p>{props.skillText}</p>
                </StyledSkillDescription>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  margin: 15px;
  width: 31%;
  background-color: #d3efea;
`

const StyledSkillDescription = styled.div`
  margin: 15px;

`
