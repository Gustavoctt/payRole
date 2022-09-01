import styled from "styled-components";

export const Container = styled.section`
 width: 100%;
 padding: 0 48px;
 
 background: var(--blue-700);
 border-radius: 0 0 32px 32px;

 .content{
    max-width: 980px;
    margin: 0 auto;
    padding: 4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .transactions{
      display: flex;
      flex-direction: column;
      color: var(--white);
      line-height: 3rem;

      h2{
        font-size: 20px;
      }

      h1{
        font-size: 44px;
      }
    }

    .buttons{
      display: flex;
      flex-direction: column;

      button:first-child{
        font-size: 1rem;
        color: #fff;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        background: var(--green-500);
        margin-bottom: 1rem;
        transition: filter 0.2s;
        font-weight: 700;
        
        &:hover{
          filter: brightness(0.9);
        }
      }

      button{
        display: flex;
        align-items: center;
        justify-content: center;
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

        svg{
          margin-left: 1rem;
        }
      }
  }
  }

  @media(max-width: 800px) {
      .content{
        display: flex;
        flex-direction: column;

        .transactions{
          margin-bottom: 2rem;

          h1{
            font-size: 40px;
          }
        }
      }
    }

`;