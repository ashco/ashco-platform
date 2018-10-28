import styled from 'styled-components';

const FadeWrapper = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: ${props =>
    props.visible
      ? props.noFade
        ? 'all 0s linear'
        : 'all 0.15s linear'
      : props.noFade
        ? 'all 0s linear'
        : 'all 0.1s linear'};
`;

export default FadeWrapper;
