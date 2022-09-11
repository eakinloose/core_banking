import Styled from "styled-components";

export const ButtonLoad = Styled.div`

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
}
.lds-ripple div {
  position: absolute;
  border: 3px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 12px;
    left: 12px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 12px;
    left: 12px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 12px;
    left: 12px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 24px;
    height:24px;
    opacity: 0;
  }
}


`;
