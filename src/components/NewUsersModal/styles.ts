import styled from "styled-components";


export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2rem;

    h2{
      color: var(--blue-700);      
    }

    button{
      width: 2.5rem;
      height: 2.5rem;

      background: transparent;
      border: none;
      color: var(--blue-700);

      transition: filter 0.2s;

      &:hover{
        background: var(--green-500);
        border-radius: 50%;
        filter: brightness(0.9);
        color: var(--green-600);
      }
    }
  }

  .text-input-container{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0 16px;

    &:focus-within{
      border: 1px solid var(--green-600);
    }

    label{
      position: absolute;
      left: 14px;
      top: 14px;
      padding: 0;
      line-height: 100%;
      transition-property: top, left;
      transition-duration: 100ms;
      transition-timing-function: ease-in-out;
    }

    input{
      border: none;
      padding: 1rem 0;
      background-color: transparent;
      font-size: 1rem;
      &:focus-visible{
        outline: none;        
      }
      &:focus-visible ~ label,
      &:valid ~ label{
        top: -8px;
        left: 10px;
        background-color:#fff;
        padding:0 5px 0 5px;
      }
    }
  }

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background: var(--green-500);
    border: none;
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    
    gap: 1rem;
    
  }
  /* h2{
    color: var(--white);
    font-size: 1.5rem;
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
  } */
`;