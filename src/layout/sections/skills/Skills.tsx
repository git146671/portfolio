import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/container/Container";

type SkillPropsType = {
    iconObject: any;
    skillHeader: string;
    skillText: string;
}

export const Skills = () => {
    return (
        <StyledSkills>
            <Container maxWidth={"1340px"}>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconObject={<Icon iconId={"accident"} svgSize={"160px"} svgViewBox={"0 0 500 500"}/>}
                           skillHeader={"Реакция и ловкость"}
                           skillText={"Обладаю умением быстро сориентироваться в нестандартной ситуации, при этом не теряя концентрации и не подвергая опасности окружающих."}/>
                    <Skill iconObject={<Icon iconId={"bottle"} svgSize={"160px"} svgViewBox={"0 0 500 500"}/>}
                           skillHeader={"Точность пропорций"}
                           skillText={"Имею опыт изготовления продукта, точно соответствующего высоким заявленным стандартам. Соблюдаю пропорции и необходимую температуру."}/>
                    <Skill iconObject={<Icon iconId={"stroller"} svgSize={"160px"} svgViewBox={"0 0 24 24"}/>}
                           skillHeader={"Большой стаж вождения"}
                           skillText={"Стаж вождения более 16 лет. Могу гарантировать плавность хода, максимальную безопасность и эффект укачивания при необходимости."}/>
                    <Skill iconObject={<Icon iconId={"doctor"} svgSize={"160px"} svgViewBox={"0 0 24 24"}/>}
                           skillHeader={"Первая помощь"}
                           skillText={"С легкостью окажу первую помощь при ушибах, ссадинах, занозах, больных животиках. Имею навык точной диагностики. Также оказываю психологическую помощь."}/>
                    <Skill iconObject={<Icon iconId={"football"} svgSize={"160px"} svgViewBox={"0 0 35 35"}/>}
                           skillHeader={"Знаю почти все игры"}
                           skillText={"Умею играть в любые игры, начиная с камень-ножницы-бумага и заканчивая сложными ролевыми постановками. Также есть навыки в любых спортивных играх."}/>
                    <Skill iconObject={<Icon iconId={"book"} svgSize={"160"} svgViewBox={"0 0 25 25"}/>}
                           skillHeader={"Навыки наставника"}
                           skillText={"Умею и не люблю учить. Знаком с книгами колобок, курочка-ряба, алгебра за 9 класс, биология за 5 класс и прочей литературой."}/>
                </FlexWrapper>
            </Container>
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
                    <StyledSkillDescriptionHeader>{props.skillHeader}</StyledSkillDescriptionHeader>
                    <StyledSkillDescriptionText>{props.skillText}</StyledSkillDescriptionText>
                </StyledSkillDescription>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  margin: 15px;
  width: 31%;
`

const StyledSkillDescription = styled.div`
  margin: 15px;

`
const StyledSkillDescriptionHeader = styled.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

`

const StyledSkillDescriptionText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: 123%;
  opacity: 70%;
`