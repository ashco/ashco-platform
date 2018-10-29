import styled, { keyframes } from 'styled-components';

const initialFooterCenterFadeInAnimation = keyframes`
from, 80% {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const InitialFooterCenterFadeInWrapper = styled.div`
  opacity: 1;
  animation-delay: none;
  animation-name: ${initialFooterCenterFadeInAnimation};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 10s;
`;

export default InitialFooterCenterFadeInWrapper;
