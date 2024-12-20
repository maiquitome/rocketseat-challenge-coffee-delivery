import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme["primary-600"]};
  }
  body {
    background-color: ${(props) => props.theme["base-100"]};
  }
`;
