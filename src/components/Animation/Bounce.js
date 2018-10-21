import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
from,
4%,
10%,
16%,
20%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 0, 0);
}
8%,
9% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -15px, 0);
}
14% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -8px, 0);
}
18% {
  transform: translate3d(0, -2px, 0);
}
`;

const BounceWrapper = styled.div`
  animation-name: ${bounceAnimation};
  animation-duration: 7.5s;
  animation-delay: 10s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
`;

export default BounceWrapper;
