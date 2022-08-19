import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue-700);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo{
    display: flex;
    align-items: flex-end;
    
    h1{
    color: var(--white)
    }

    span{
      color: var(--green-500);
      font-size: 2rem;
    }
  }

  .buttons{
    button:first-child{
      font-size: 1rem;
      color: #fff;
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      background: var(--green-500);
      margin-right: 1rem;
      transition: filter 0.2s;
      font-weight: 700;
      
      &:hover{
        filter: brightness(0.9);
      }
    }

    button{
      font-size: 1rem;
      color: var(--blue-900);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      background: var(--white);
      margin-right: 1rem;
      font-weight: 700;
      transition: filter 0.2s;

      &:hover{
        filter: brightness(0.9);
      }
    }
  }
`;