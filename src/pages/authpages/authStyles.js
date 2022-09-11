import Styled from "styled-components";

export const FormWrapper = Styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #3f75cc, #02b35a);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 2rem;


  form{
    width: 100%;
    max-width: 450px;
    padding: 0rem 4rem 4rem;
    background: white;
    border-radius: 10px;
    text-align: center;
    
    .title{
      width: 110%;
      border-radius: 10px;
      transform: translate(-5%, -20%);
      margin: auto;
      padding: 4rem 2rem;
      background-color: ${({ theme }) => theme.colors?.button};
      color: ${({ theme }) => theme.colors.white};
      text-align: center;
      font-weight: 100;
    }

    .dashboard-link{
      color: white;
    }

    input{
      margin-bottom: 1.5rem;
    }

    button{
      width: 100%;
    }
    .psd{
      display: flex;
      justify-content: space-between;
      margin: 0.1rem 0 0.4rem;
    }
  }
`;
