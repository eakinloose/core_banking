import Styled from "styled-components";

export const MainWrapper = Styled.div`
  width: calc(100% - 330px);
  background-color: #eefefe;
  height: 85vh;
  padding: 5rem 1.5rem;
  position: fixed;
  border-radius: 5px;
  bottom: 2%;
  right: 2rem;
  overflow: scroll; 
  font-size: 12.5px;

  .chartHolder{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }

  h2{
    font-weight: 400;
  }
  .chart{
    width:100%;
    height: 100%;
    min-width: 450px;
    min-height: 280px;
  }
`;
