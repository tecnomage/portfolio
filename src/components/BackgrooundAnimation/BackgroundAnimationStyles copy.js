import styled, { keyframes } from 'styled-components';


export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(100deg);  
  }
  100% {
    transform: rotate(360deg);
  }
`;


export const AnimatedSvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
  animation: ${spinAnimation} 5s linear infinite; /* Adjust duration and timing as needed */
`;


