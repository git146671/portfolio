import styled from "styled-components";
import {theme} from "../../styles/Theme";

type ContainerPropsType = {
    maxWidth: string;
    position?: string;
    padding?: string;
    display?: string;
    justify?: string
}

export const Container = styled.div<ContainerPropsType>`
  width: 100%;
  min-height: 100%;
  max-width: ${props => props.maxWidth};
  position: ${props => props.position || "unset"};
  padding: ${props => props.padding || "0 15px"};
  margin: 0 auto;
  // display: ${props => props.display || "block"};
  // justify-content: ${props => props.justify || "flex-start"};
`