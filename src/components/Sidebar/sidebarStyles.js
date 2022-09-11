import Styled from "styled-components";

export const SidebarWrapper = Styled.div`
  width: 270px;
  height: 85vh;
  position: fixed;
  bottom: 2%;
  left: 2rem;
  background-color: #eefefe;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 1.5rem;
  color: ${({ theme }) => theme.colors?.black};

  .avt{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors?.green};;
    background: ${({ theme }) => theme.colors?.grey01};
  }

  button{
    padding: 10px 2.4rem;  
  }

  h4{
    font-weight: 400;
    line-height: 1;
  }
  span{
    text-transform: uppercase;
  }

  img{
    height: 50px;
    width: 100px;
  }
`;
