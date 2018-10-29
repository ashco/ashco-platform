import styled, { keyframes } from 'styled-components';

const selectedIconAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1.1);
  }
`;

const SelectedIconWrapper = styled.div`
  svg {
    transform: ${props => (props.open ? 'scale(1.1)' : 'scale(1)')};
    animation: ${props => props.open && selectedIconAnimation} 0.3s;
  }
`;

export default SelectedIconWrapper;
