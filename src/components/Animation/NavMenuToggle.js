import styled from 'styled-components';

const NavMenuToggleWrapper = styled.div`
  ul li {
    transform: ${props =>
      props.closed ? 'translate3d(35vw, 0, 0)' : 'translate3d(0, 0, 0)'};
    opacity: ${props => (props.closed ? 0 : 1)};
    transition: ${props => (props.closed ? '0.25s ease-out' : '0.3s ease-in')};
  }
  ul li:nth-child(2) {
    transition-delay: ${props => (props.closed ? 0 : '0.05s')};
  }
  ul li:nth-child(3) {
    transition-delay: ${props => (props.closed ? 0 : '0.1s')};
  }
  ul li:nth-child(4) {
    transition-delay: ${props => (props.closed ? 0 : '0.15s')};
  }
  ul li:nth-child(5) {
    transition-delay: ${props => (props.closed ? 0 : '0.2s')};
  }
`;

export default NavMenuToggleWrapper;
