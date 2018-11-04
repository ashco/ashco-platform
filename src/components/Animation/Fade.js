import styled from 'styled-components';

const FadeWrapper = styled.div`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: ${({ visible }) =>
    visible ? 'all 0.15s linear' : 'all 0.1s linear'};
`;

export default FadeWrapper;
