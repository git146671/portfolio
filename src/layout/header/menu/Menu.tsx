import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Menu = () => {
    return (
        <StyledMenu>
            <FlexWrapper align={"center"}>
            <ul>
                <li><a href="">Мои проекты</a></li>
                <li><a href="">Обо мне</a></li>
                <li><a href="">Контакты</a></li>
                <li><a href="">
                    <button>Поболтаем?</button>
                </a></li>
            </ul>
            </FlexWrapper>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  
  ul{
    display: flex;
    gap: 30px;
    list-style: none;
  }
  
  li{
    align-self: center;
  }
  
  button{
    background-color: ${theme.colors.darkBlocksBg};
    color: white;
    height: 40px;
    width: 110px;
  }
  
  @media ${theme.media.tablet} {
    display: none;
}
`