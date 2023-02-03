import Styled from "styled-components";

// export const Wrapper = Styled.div`
//       background-image: linear-gradient(to bottom right, #3f75cc, #02b35a);
//       background-image: black;

// .footer-wrapper{
//     background: ${({ theme }) => theme.colors.black};

//   .heading-frame {
// 	display: grid;
// 	box-shadow: 0 3px 6px rgba(0,0,0,0.4);
// 	grid-template-columns: max-content auto;
// 	grid-template-rows: auto max-content;
// 	background-size: cover;
// 	color: white;
// 	width: 95%;
//   margin: auto;
//   max-width: 1500px;
// 	height: 250px;
// 	padding:  2rem 4rem;
// 	&:before,
// 	&:after {
// 		content: "";
// 		display: block;
// 		width: 100%;
//     max-width: 1500px;
// 		height: 100%;
// 		border: 2px solid ${({ theme }) => theme.colors?.primary};
// 	}
// 	&:before {
// 		grid-row: 1 / 2;
// 		border-right: none;
// 		border-bottom: none;
// 	}
// 	&:after {
// 		grid-row: 1 / span 2;
// 		border-left: none;
// 	}

//     h2 {
//       margin: 1rem 1rem -.5rem 0;
//       font-size: 2rem;
//       max-width: 1500px;
//         color: #fff;
//       }
//     }
//   }
// `;

export const ContactWrapper = Styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  transform: translatey(5%);

  .contentWrapper{
    width: 85%;
    max-width: 1205px;
    height: 89%;
    max-height: 635px;
    display: flex;
    background: white;
    border-radius: 7px;
    
    .mapwrapper{
      filter: brightness(50%);
      width: 50%;
      
      .iframe{
        width: 100%;
        height: 100%;
        border-radius: 7px 0 0 7px ;
        filter: brightness(90%);
      }
    }

    .form{
      padding: 6rem 5rem;
      width: 50%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      
      form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .img{
        height: 50px;
      }

      input, textarea, span{
      margin-bottom: 2rem;
      width: 100%;
    }
    }
  }

`;
