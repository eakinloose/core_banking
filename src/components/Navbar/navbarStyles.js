import Styled from "styled-components";

export const NavWrapper = Styled.div`
  width: 100%;
  padding: 0 4rem;
  z-index: 1;
  background: ${({ theme }) => theme.colors?.transparent};
  top: 0;

  a, span{
    color: ${({ theme }) => theme.colors?.white};
  }
`;

export const NavContent = Styled.div`
    width: 95%;
    max-width: 1500px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
      margin-top: 1rem;
      height: 60px;
    }

    .nav-content{
      width: 80%;
      max-width: 650px;
    }
`;

export const NavTop = Styled.div`
    width: 100%;
    text-align: end;
    padding: 0.5rem 0;
    
    span{
      display: inline-block;
      padding: 0.5rem 0 1rem;
      cursor: pointer;
      margin-left: 3rem;
      text-transform: uppercase;
    }
    `;

export const NavBottom = Styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors?.white};
    align-items: center;
    text-align: end;
      
    .contact{
    padding: 10px 2.4rem;  
  }
    
  .nav-links{
    width: 40%;
    min-width: 450px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logout{
      border: none;
      background: none;
    }
  }
`;
