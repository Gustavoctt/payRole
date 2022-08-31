import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  
  h1{
    color: var(--gray-800)
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-top: 2px solid var(--gray-200);

  div{
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    justify-items: start;
    padding: 1rem 0;
    border-bottom: 1px solid var(--gray-300);

    p{
      color: var(--gray-700)
    }

    strong{
      color: var(--gray-800);
      font-size: 1.2rem;
    }
  }
  
`;