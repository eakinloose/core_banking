import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

   *,
   *::before,
   *::after {
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
   }
 
   html {
      font-size: 62.5%;
   }

   body {
      margin: 0;
      min-height: 100%;
      width: 100%;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0.02rem;
      line-height: 2.5rem;
      background-image: linear-gradient(to bottom right, #02b35a, #3f75cc);
      background-image: linear-gradient(to bottom right, #3f75cc, #02b35a);
   }

   html,
   body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: 'Roboto', sans-serif;
   }

   a{
      text-decoration: none;
      color: ${({ theme }) => theme.colors?.button};
   }

   button, .button{
    border: 0;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-block;
    max-width: 100%;
    text-align: center;
    padding: 1.2rem 2.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.5rem;
    letter-spacing: 0;
    line-height: 1.6rem;
    border-radius: 3px;
    text-transform: capitalize;
    transition: transform 300ms ease-in-out;
    background-color: ${({ theme }) => theme.colors?.button};
    color: ${({ theme }) => theme.colors.white};
   }

   button:hover, .button:hover{
    background-color: ${({ theme }) => theme.colors?.buttonhover};
   }

   input, textarea{
    width: 100%;
    max-width: 560px;
   border: 1px solid grey;
   outline: none;
   font-size: 1.5rem;
   appearance: none;
   border-radius: 0;
   padding: 1.08rem;
   box-sizing: border-box;
   border-radius: 4px;
   background-color: ${({ theme }) => theme.colors?.grey01};
   }

   input:hover, textarea:hover{
    background-color: ${({ theme }) => theme.colors?.inputhover};
   }

input::placeholder, textarea::placeholder {
    font-weight: 400;
    opacity: .9;
    font-size: 12px;
    text-transform: capitalize !important;
    color: grey;
}

   table {
      border-collapse: collapse;
      width: 100%;
      margin: 0rem auto;
   }

   table th, table td {
      border: 1px solid #ddd;
      padding: 8px;
   }

   table th{
      background-image: linear-gradient(to bottom right, #3f75cc, teal);
      /* background: grey; */
      color: white;
      font-weight: 400;
      font-size: 14px;
   }

   label{
      color: ${({ theme }) => theme.colors?.button};
      text-transform: capitalize;
      font-size: 13px;
   }

   .weak{
      color: red;
   }

   #pswcheck{
      height: 40px;
      text-align: start;

      #check{
         width: 15px;
         height: 15px;
         cursor: pointer;
      }

      span{
         cursor: pointer;
      }
   }

   #name{
    text-transform: capitalize;
  }

  .inactive{
   color:grey;
   background: #c9d2f2;
   cursor: not-allowed;
  }

  .inactive:hover{
   color:grey;
   background: #c9d2f2;
  }

  .entry{
   cursor: pointer;
  }

  .links{
   cursor: pointer;
  }

  .manage{
   background: none;
   color: black;
   
   .cont{
      display: flex;
      align-items: center;

   }

   img{
      height: 17px;
      margin-right: 1rem;
   }

}

.manage:hover{
   background: none;
   color: #3177bb;
}

`;

export { GlobalStyles };
