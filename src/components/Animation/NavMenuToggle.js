import styled, { css } from 'styled-components';
import { media } from '../../config/media';

const NavMenuToggleWrapper_Open = css`
  ul li {
    transform: translate3d(-35vw, 0, 0);
    opacity: 1;
    transition: 0.25s ease-in;
  }
  ul li:nth-child(2) {
    transition-delay: 0.05s;
  }
  ul li:nth-child(3) {
    transition-delay: 0.1s;
  }
  ul li:nth-child(4) {
    transition-delay: 0.15s;
  }
  ul li:nth-child(5) {
    transition-delay: 0.2s;
  }
`;

const NavMenuToggleWrapper = styled.div`
  ul li {
    transform: translate3d(0, 0, 0);
    opacity: 0;
    transition: 0.2s ease-out;
  }
  ul li:nth-child(2) {
    transition-delay: 0;
  }
  ul li:nth-child(3) {
    transition-delay: 0;
  }
  ul li:nth-child(4) {
    transition-delay: 0;
  }
  ul li:nth-child(5) {
    transition-delay: 0;
  }
  ${({ isOpen }) => {
    console.log(isOpen);
    return isOpen && NavMenuToggleWrapper_Open;
  }};
  ${media.tablet`
    transform: translate3d(35vw, 0, 0);
  `};
`;

export default NavMenuToggleWrapper;
