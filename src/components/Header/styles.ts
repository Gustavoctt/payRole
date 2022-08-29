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
`;