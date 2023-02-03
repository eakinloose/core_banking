import Styled from "styled-components";

export const HomeContainer = Styled.div`
  width: 100%;

  .black-section{
    clip-path: polygon(100% 0, 100% 36%, 100% 100%, 0 100%, 0 5%);
    background: ${({ theme }) => theme.colors?.black};
    padding: 18rem 0 7rem;
    color: ${({ theme }) => theme.colors?.white};
    position: relative;
    
    .content{
      width: 95%;
      max-width: 1500px;
      margin: auto;
      text-align: center;
      padding: 0rem 4rem;

      h1{
        background: -webkit-linear-gradient(#3f75cc, #02b35a);
        -webkit-background-clip: text;
        line-height: 1.3;
        text-transform: uppercase;
        -webkit-text-fill-color: transparent;
        text-align: center;
      }

      p{
        width: 90%;
        max-width: 750px;
        margin:auto;
      }

      img{
        width: 90%;
        max-width: 700px;
        margin: auto;
      }

      .animate-charcter{
          text-transform: uppercase;
          background-image: linear-gradient(
            -225deg,
            #ffffff 0%,
            #173361 29%,
            #3f75cc 67%,
            #02b35a 100%
          );
          margin: 3rem auto 2rem;
          background-size: auto auto;
          background-clip: border-box;
          background-size: 200% auto;
          color: #fff;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textclip 2s linear infinite;
        }
    }
  }


  .h1 {
  margin: 15rem auto 8rem; 
  text-align: center;
  font-size: clamp(1.8rem, 2.5vw, 3rem);
  color: #333;
  font-weight: 300;
  line-height: 1.5;
  text-transform: uppercase;
  transform: translatex(-12%);
  white-space: nowrap;
  overflow-Y: hidden;
  position: relative;

  .message {
    background-color: ${({ theme }) => theme.colors?.primary};
    display: block;
    font-weight: 300;
    overflow: hidden;
    position: absolute;
    color: white;
    top: 15rem;
    left: 50%;
    transform: translatex(15%);
    animation: openclose 5s ease-in-out infinite;
  }
}

  .footer-wrapper{
    background: ${({ theme }) => theme.colors.black};
    
  .heading-frame {
	display: grid;
	box-shadow: 0 3px 6px rgba(0,0,0,0.4);
	grid-template-columns: max-content auto;
	grid-template-rows: auto max-content;
	background-size: cover;
	color: white;
	width: 95%;
  margin: auto;
  max-width: 1500px;
	height: 250px;
	padding:  2rem 4rem;
	&:before,
	&:after {
		content: "";
		display: block;
		width: 100%;
    max-width: 1500px;
		height: 100%;
		border: 2px solid ${({ theme }) => theme.colors?.primary};
	}
	&:before {
		grid-row: 1 / 2;
		border-right: none;
		border-bottom: none;
	}	
	&:after {
		grid-row: 1 / span 2;
		border-left: none;
	}

    h2 {
      margin: 1rem 1rem -.5rem 0;
      font-size: 2rem;
      max-width: 1500px;
        color: #fff;
      }
    }
  }

  .end{
    width: 100%;
    text-align: center;
    color: white;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
      }    
  }

  @keyframes openclose {
    0% {
      top: 0.2rem;
      width: 0;
    }
    5% {
      width: 0;
    }
    15% {
      width: 330px;
    }
    30% {
      top: 0.2rem;
      width: 330px;
    }
    33% {
      top: 0.2rem;
      width: 0;
    }
    35% {
      top: 0.2rem;
      width: 0;
    }
    38% {
      top: -4.5rem;
      
    }
    48% {
      top: -4.5rem;
      width: 380px;
    }
    62% {
      top: -4.5rem;
      width: 380px;
    }
    66% {
      top: -4.5rem;
      width: 0;
      text-indent: 0;
    }
    71% {
      top: -9rem;
      width: 0;
      text-indent: 5px;
    }
    86% {
      top: -9rem;
      width: 385px;
    }
    95% {
      top: -9rem;
      width: 385px;
    }
    98% {
      top: -9rem;
      width: 0;
      text-indent: 5px;
    }
    100% {
      top: 0;
      width: 0;
      text-indent: 0;
    }
  }

`;

export const HomeWrapper = Styled.div`
  width: 95%;
  max-width: 1500px;
  margin: auto;
  padding: 0rem 4rem;

  .hero-section{
    width: 100%;
    background: ${({ theme }) => theme.colors?.transperant};
    height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .text-content{
      width: 100%;
      max-width: 600px;
      color:  ${({ theme }) => theme.colors?.white};

      h1{
        line-height: 1.25;
      }
    }

    .img-wrapper{
      width: 100%;
      max-width: 700px;

      img{
        height: 70vh;
        max-width: 410px;
        max-height: 602px;
        position: absolute;
        border-radius: 20px;
        z-index: 1;
        margin-top: 12px;
      }

      .sim2{
        right: 25%;
        top: 6%;
      }

      .sim3{
        right: 0%;
        top: 36%;
      }
    }
  }
`;
