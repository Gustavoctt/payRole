import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--white);
      font-weight: 700;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      background: var(--blue-700);
      color: var(--white);


    }
  }
`;