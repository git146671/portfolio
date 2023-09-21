import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>

            <BurgerBtn isOpen={true}>
                <span></span>
            </BurgerBtn>
            <MobileMenuWrapper isOpen={true}>
                <ul>
                    <li><a href="">Мои проекты</a></li>
                    <li><a href="">Обо мне</a></li>
                    <li><a href="">Контакты</a></li>
                    <li><a href="">
                        <button>Поболтаем?</button>
                    </a></li>
                </ul>
            </MobileMenuWrapper>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  
  display: none;

  button {
    background-color: ${theme.colors.darkBlocksBg};
    color: white;
    height: 40px;
    width: 110px;
  }

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
  z-index: 200;

  span {
    display: block;
    width: 20px;
    height: 1px;
    background-color: #292D32;
    position: absolute;
    left: 30px;
    top: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 20px;
      height: 1px;
      background-color: #292D32;
      position: absolute;
      transform: translateY(5px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 20px;
      height: 1px;
      background-color: #292D32;
      position: absolute;
      transform: translateY(-5px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: #f1f1f1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: none;

  ${
          props => props.isOpen && css<{ isOpen: boolean }>`
            display: flex;
            justify-content: center;
            align-items: center;
          `
  }
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
    flex-direction: column;
    align-items: center;
  }

  li {
    align-self: center;
  }
`