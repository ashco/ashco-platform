import styled, { keyframes } from 'styled-components';

const fadeInOpacity = keyframes`
0%,
80% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const FadeInWrapper = styled.div`
  opacity: 1;
  animation-name: ${fadeInOpacity};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 10s;
`;

export default FadeInWrapper;
