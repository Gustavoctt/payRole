import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --blue-900: #0a2640;
    --blue-700: #1C3D5B;

    --green-500: #69e6a6;
    --green-600:#399e6a;

    --white: #FFFFFF;
    
    --gray-50: #F7FAFC;
    --gray-100: #edf2f7;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e0;
    --gray-400: #a0aec0;
    --gray-500: #718096;
    --gray-600: #4a5568;
    --gray-700: #2d3748;
    --gray-800: #1a202c;
    --gray-900: #171923;
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
    background: var(--white);
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
    max-width: 450px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;

    animation-name: animateModal;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    -webkit-animation-fill-mode: forwards;
  }

  @media(max-width: 800px) {
    .react-modal-content{
      width: 100%;
      max-width: 300px;
      padding: 1.5rem;
    }
  }

  @keyframes animateModal {
  0% {
    top: 20px;
  }
  100% {
    top: 0;
  }
}
`;