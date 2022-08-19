import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`

export const BackgroundBall = styled.main`
  position: absolute;
  top: 0px;
  right: 0px;
  overflow: hidden;
  width: 700px;
  height: 600px;
  border-bottom-left-radius: 100%;

  background: var(--blue-700);
  z-index: -1;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1rem;

  .logo{
    display: flex;
    align-items: flex-end;
    width: auto;
    
    h1{
    color: var(--white)
    }

    span{
      color: var(--green-500);
      font-size: 2rem;
    }
  }

  button{
    background-color: var(--white);
    border: none;
    height: 40px;
    width: 180px;

    border-radius: 24px;
    color: var(--blue-900);
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  @media(max-width: 720px) {
    flex-direction: column;

    .contentLeft{
      margin-right: 0px;
    }
  }
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;

  margin-top: 60px;

  .contentLeft{
    max-width: 567px;
    margin-right: 30px;

    h1{
      font-size: 3rem;
      color: var(--white)
    }

    h3{
      padding: 1rem 0;
      color: var(--gray-100);
      font-size: 1.3rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
    }

    a > p{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      width: 240px;
      margin-top: 40px;
      background-color: var(--green-500);
      border-radius: 24px;
      color: var(--blue-900);
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      transition: opacity 0.2s;
      cursor: pointer;

      &:hover{
        opacity: 0.8;
      }
    }
  }
`