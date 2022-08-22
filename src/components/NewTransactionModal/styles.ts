import styled from "styled-components";


export const Container = styled.form`
  h2{
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--blue-700);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--blue-700);
    }

    + input,
    + select{
      margin-top: 1rem;
    }
  }

  select{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--blue-700);

    font-weight: 400;
    font-size: 1rem;
  }

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background: var(--green-500);
    color: var(--white);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
  }
`;