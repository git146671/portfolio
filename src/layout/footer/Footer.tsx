import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/container/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container maxWidth={"1050px"}>
                <FlexWrapper justify={"space-around"}>
                    <div>
                        <Icon iconId={"ap"} svgSize={"40px"} svgViewBox={"0 0 48 48"}/>
                        <StyledMenu>
                            <ul>
                                <li><a href="">Мои навыки</a></li>
                                <li><a href="">Мои проекты</a></li>
                                <li><a href="">Обо мне</a></li>
                            </ul>
                        </StyledMenu>
                    </div>
                    <div>
                        <StyledH3>Подписаться на мою рассылку</StyledH3>
                        <FlexWrapper>
                            <StyledInput type={"email"} placeholder={"Введите свой email"}/>
                            <StyledInputBtn type={"submit"} value={"Подписаться"}/>
                        </FlexWrapper>
                    </div>
                </FlexWrapper>
                <StyledHr/>
                <FlexWrapper justify={"space-between"}>
                    <StyledP>Не знаю зачем но все права защищены</StyledP>
                    <IconsDiv>
                        <FlexWrapper>
                            <a href="">
                                <Icon iconId={"telegram"} svgSize={"40px"} svgViewBox={"0 0 40 40"}/>
                            </a>
                            <a href="">
                                <Icon iconId={"vk"} svgSize={"37px"} svgViewBox={"0 0 27 27"}/>
                            </a>
                        </FlexWrapper>
                    </IconsDiv>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  margin: 80px 0;
`


const StyledMenu = styled.nav`
  margin: 20px 0 0 0;
  color: black;

  ul {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    gap: 30px;
    list-style: none;
  }
`

const StyledHr = styled.hr`
  height: 1px;
  align-self: stretch;
  margin: 50px 0 50px 0;
`

const StyledH3 = styled.h3`
  color: var(--Black, #000);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0 0 16px 0;
`
const StyledInput = styled.input`
  height: 48px;
  width: 257px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 0 0 0 5px;
`

const StyledInputBtn = styled.input`
  height: 48px;
  width: 127px;
  color: var(--Black, #000);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0 16px;
`

const StyledP = styled.p`
  font-size: 14px;
  margin: 0 0 0 70px;
`

const IconsDiv = styled.div`
  margin: 0 70px 0 0;
`