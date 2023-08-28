import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-around"}>
                <StyledFooterMenuAndIcon>
                    <Icon iconId={"man"} svgSize={"30px"} svgViewBox={"0 0 64 64"}/>
                    <StyledMenu>
                        <ul>
                            <li><a href="">Мои навыки</a></li>
                            <li><a href="">Мои проекты</a></li>
                            <li><a href="">Обо мне</a></li>
                        </ul>
                    </StyledMenu>
                </StyledFooterMenuAndIcon>
                <StyledFooterForm>
                    <h3>Подписаться на мою рассылку</h3>
                    <FlexWrapper>
                        <input type={"email"} placeholder={"Введите свой email"}/>
                        <input type={"submit"} value={"Подписаться"}/>
                    </FlexWrapper>
                </StyledFooterForm>
            </FlexWrapper>
            <StyledHr/>
            <FlexWrapper justify={"space-between"}>
                <p>Не знаю зачем но все права защищены</p>
                <FlexWrapper>
                    <StyledMenu>
                        <ul>
                            <li>
                                <a href="">
                                    <Icon iconId={"telegram"} svgSize={"30px"} svgViewBox={"0 0 20 20"}/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Icon iconId={"telegram"} svgSize={"30px"} svgViewBox={"0 0 20 20"}/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Icon iconId={"telegram"} svgSize={"30px"} svgViewBox={"0 0 20 20"}/>
                                </a>
                            </li>
                        </ul>
                    </StyledMenu>

                </FlexWrapper>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #b1eac8;

`

const StyledFooterMenuAndIcon = styled.div`
  background-color: #dad3d3;
`

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
`

const StyledFooterForm = styled.form`
  background-color: #dad3d3;

`

const StyledHr = styled.hr`
  height: 1px;
  align-self: stretch;
  margin: 50px 0 50px 0;
`

const StyledUnderlineBlock = styled