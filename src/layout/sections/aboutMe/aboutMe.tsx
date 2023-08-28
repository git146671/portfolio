import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import mainPhoto from "../../../assets/images/MeSquare.jpg";

type AboutMePicturePropsType = {
    width: string;
    height: string;
    margin: string;
}
export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <FlexWrapper justify={"space-evenly"}>
                <StyledAboutMeHeader>
                    <span>Обо мне(будет крупно как на макете)</span>
                    <p>ТУТ БУДЕТ КАКОЙ ТО ДЕВИЗ</p>
                    <Photo src={mainPhoto} width={"532px"} height={"498px"} margin={"100 0 0 0"}/>
                </StyledAboutMeHeader>
                <StyledAboutMeText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam asperiores
                        aspernatur assumenda beatae culpa dolores eaque eos excepturi exercitationem fugiat impedit in
                        iure laudantium libero nesciunt nostrum, odio provident quidem quos repellat sequi sit tempore,
                        veritatis. Amet asperiores at cupiditate, dolorem doloremque eaque, eveniet fugit iste mollitia
                        nostrum officia perspiciatis quas quis ratione repellendus sint sunt suscipit tempore unde
                        voluptates! A assumenda at deleniti doloremque facilis obcaecati possimus quaerat veniam!
                        Consequuntur cum dolorem fuga numquam placeat repellendus, veniam?</p>
                    <Photo src={mainPhoto} width={"440px"} height={"412px"} margin={"100 0 0 0"}/>
                </StyledAboutMeText>
            </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMeHeader = styled.div`
  background-color: #21935f;

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
  background-color: #21935f;
  width: 440px;
`