import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

   *,
   *::before,
   *::after {
      box-sizing: border-box;
   }

   html {
      font-size: 62.5%;
   }

   body {
      margin: 0;
      min-height: 100%;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-weight: 300;
      letter-spacing: -0.02rem;
      line-height: 2.5rem;
   }

   html,
   body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
   }

   button{
    border: 0;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-block;
    max-width: 100%;
    text-align: center;
    padding: 1.3rem 2.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 1.6rem;
    font-weight: 300;
    border-radius: 3px;
    text-transform: capitalize;
    transition: transform 300ms ease-in-out;
    background-color: ${({ theme }) => theme.colors?.button};
    color: ${({ theme }) => theme.colors.white};
   }

   button:hover{
    background-color: ${({ theme }) => theme.colors?.buttonhover};
   }

   input{
    width: 100%;
    max-width: 560px;
   border: 1px solid ${({ theme }) => theme.colors.button};
   outline: none;
   font-size: 1.6rem;
   appearance: none;
   border-radius: 0;
   padding: 1.3rem;
   box-sizing: border-box;
   border-radius: 4px;
   background-color: ${({ theme }) => theme.colors?.grey01};
   }

   input:hover{
    background-color: ${({ theme }) => theme.colors?.inputhover};
   }

`;

export { GlobalStyles };