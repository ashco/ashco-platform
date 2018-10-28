import styled from 'styled-components';

export const FadeWrapper = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: ${props =>
    props.visible ? 'all 0.15s linear' : 'all 0.1s linear'};
`;
