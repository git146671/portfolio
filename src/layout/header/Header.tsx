import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <Container maxWidth={"1040px"}>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  
`