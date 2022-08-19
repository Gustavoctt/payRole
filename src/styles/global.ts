import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --blue-900: #0a2640;
    --blue-700: #1C3D5B;

    --green-500: #69e6a6;

    --white: #FFFFFF;
    --gray-100: #f1f1f1;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%; //15px
    }

    @media(max-width: 720px){
      font-size: 87.5%; //15px
    }
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  body{
    background: var(--blue-900);
  }

  button{
    cursor: pointer;
  }
`;