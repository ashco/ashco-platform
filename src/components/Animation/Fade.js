import styled from 'styled-components';

const FadeWrapper = styled.div`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  /* transform: scale(${({ visible }) => (visible ? '1' : '0.95')}); */
  transition: ${({ visible, noFade }) =>
    visible
      ? noFade
        ? 'all 0s linear'
        : 'all 0.15s linear'
      : noFade
        ? 'all 0s linear'
        : 'all 0.1s linear'};
`;

export default FadeWrapper;
