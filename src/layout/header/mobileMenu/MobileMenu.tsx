import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import React from "react";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerBtn isOpen={true}>
                <span></span>
            </BurgerBtn>
            <a href="">
                <StyledLetsTalkBtn isOpen={true}>Поболтаем?</StyledLetsTalkBtn>
            </a>
            <BurgerBtn isOpen={true}>
                <span></span>
            </BurgerBtn>
            <MobileMenuWrapper isOpen={true}>
                <ul>
                    <li><a href="">Мои проекты</a></li>
                    <li><a href="">Обо мне</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
                <div>
                    <FlexWrapper height={"0"}>
                        <a href="">
                            <Icon iconId={"telegram"} svgSize={"28px"} svgViewBox={"0 0 40 40"}/>
                        </a>
                        <a href="">
                            <Icon iconId={"vk"} svgSize={"27px"} svgViewBox={"0 0 27 27"}/>
                        </a>
                    </FlexWrapper>
                </div>
            </MobileMenuWrapper>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`

  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const BurgerBtn = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 300;

  span {
    display: block;
    width: 25px;
    height: 1px;
    background-color: #292D32;
    position: absolute;
    left: 40px;
    bottom: 65px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 25px;
      height: 1px;
      background-color: #292D32;
      position: absolute;
      transform: translateY(5px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
        z-index: 300;
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 25px;
      height: 1px;
      background-color: #292D32;
      position: absolute;
      transform: translateY(-5px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        z-index: 300;
      `}
    }
  }
`

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(241, 241, 241, 1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: none;

  ${
          props => props.isOpen && css<{ isOpen: boolean }>`
            flex-direction: column;
            display: flex;
            justify-content: flex-start;
          `
  }
  ul {
    margin: 60px 0 0 15vw;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    gap: 40px;
    flex-direction: column;
  }

  li {
    padding: 0 10px 0 10px;
    height: 30px;
    width: 70vw;
    border-bottom: 1px solid #818181;
  }
  
  div {
    margin: 15px 0 0 8vw;
  }
`

const StyledLetsTalkBtn = styled.button<{ isOpen: boolean }>`
  position: fixed;
  z-index: 400;
  background-color: ${theme.colors.darkBlocksBg};
  color: white;
  height: 40px;
  width: 110px;
  top: 14px;
  right: 85px;
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: none;
  `}
`