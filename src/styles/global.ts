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

  .react-modal-overlay{
    background: rgba(0,0,0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--blue-700);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.7);
    }
  }
`;