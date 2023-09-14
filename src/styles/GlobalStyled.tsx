import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0 auto;
    font-family: 'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: unset;
  }
    
  section:nth-of-type(odd){
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.darkTextColor};
  }

  section:nth-of-type(even){
    background-color: ${theme.colors.darkBlocksBg};
    color: ${theme.colors.whiteTextColor};
  }
`