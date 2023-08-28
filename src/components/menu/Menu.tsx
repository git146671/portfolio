import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Мои проекты</a></li>
                <li><a href="">Обо мне</a></li>
                <li><a href="">Контакты</a></li>
                <li><a href="">
                    <button>Поболтаем?</button>
                </a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul{
    display: flex;
    gap: 30px;
    list-style: none;
  }
  

`