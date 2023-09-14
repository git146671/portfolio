import styled from "styled-components";

type ContainerPropsType = {
    maxWidth: string;
    position?: string;
    padding?: string;
}

export const Container = styled.div<ContainerPropsType>`
  width: 100%;
  min-height: 100%;
  max-width: ${props => props.maxWidth};
  position: ${props => props.position || "unset"};
  padding: ${props => props.padding || "0 15px"};
  margin: 0 auto;
  //border: 1px solid red;

`