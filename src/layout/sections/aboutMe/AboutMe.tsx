import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import me2Photo from "../../../assets/images/Me2.jpg";
import me3Photo from "../../../assets/images/MeSquare.jpg";
import {Container} from "../../../components/container/Container";

type AboutMePicturePropsType = {
    width: string;
    height: string;
    margin: string;
}
export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container maxWidth={"1050px"}>
                <FlexWrapper justify={"space-between"}>
                    <StyledAboutMeHeader>
                        <StyledSpan>Обо мне</StyledSpan>
                        <StyledSlogan>НЕ ЛЮБЛЮ ДЕВИЗЫ ПОЭТОМУ ЕГО НЕТ</StyledSlogan>
                        <Photo src={me2Photo} width={"532px"} height={"498px"} margin={"100 0 0 0"}/>
                    </StyledAboutMeHeader>
                    <StyledAboutMeText>
                        <StyledP>Меня зовут Плеханов Антон. У меня есть прекрасная жена Лена и трое деток.<br/><br/>
                            Родился и прожил много лет в Туле, сейчас живу в Москве и работаю разработчиком в крупном
                            российском банке. Также имею опыт работы во многих областях и сферах<br/><br/>
                            Данное портфолио должно было рассказать о моих профессиональных навыках, но вместо этого я
                            решил рассказать немного о себе просто как о человеке.
                        </StyledP>
                        <Photo src={me3Photo} width={"440px"} height={"412px"} margin={"100 0 0 0"}/>
                    </StyledAboutMeText>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMeHeader = styled.div`
  margin: 109px 0 16px 0;

`

const StyledAboutMe = styled.section`
  background-color: #887070;
  width: 100%;
`

const Photo = styled.img<AboutMePicturePropsType>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  flex-shrink: 0;
`

const StyledAboutMeText = styled.div`

  width: 440px;
  margin: 0 0 205px 0;
`
const StyledSpan = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  color: var(--Gray-6, #F2F2F2);
`
const StyledSlogan = styled.div`
  color: var(--Gray-6, #F2F2F2);
  font-size: 48px;
  font-style: normal;
  font-weight: 254;
  line-height: 120%; /* 57.6px */
  font-variant: all-small-caps;
  max-width: 350px;
  margin: 0 0 240px 0;
`
const StyledP = styled.p`
  color: var(--Gray-6, #F2F2F2);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 109px 0 204px 0;
`