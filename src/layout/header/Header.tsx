import React from 'react';
import styled from "styled-components";
import {Menu} from "./menu/Menu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container maxWidth={"1040px"}>
                <FlexWrapper justify={"space-between"}>
                    <Icon iconId={"ap"} svgSize={"40px"} svgViewBox={"0 0 48 48"}/>
                    <Menu/>
                    <MobileMenu/>
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