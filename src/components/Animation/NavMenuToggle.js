import styled, { css } from 'styled-components';
import { media } from '../../config/media';

const transformMenuOpen = css`
  transform: translate3d(-35vw, 0, 0);
`;

const NavMenuToggleWrapper = styled.div`
  ul li {
    transform: translate3d(0, 0, 0);
    ${({ isOpen }) => isOpen && transformMenuOpen};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: ${({ isOpen }) => (isOpen ? '0.25s ease-in' : '0.2s ease-out')};
  }
  ul li:nth-child(2) {
    transition-delay: ${({ isOpen }) => (isOpen ? '0.05s' : 0)};
  }
  ul li:nth-child(3) {
    transition-delay: ${({ isOpen }) => (isOpen ? '0.1s' : 0)};
  }
  ul li:nth-child(4) {
    transition-delay: ${({ isOpen }) => (isOpen ? '0.15s' : 0)};
  }
  ul li:nth-child(5) {
    transition-delay: ${({ isOpen }) => (isOpen ? '0.2s' : 0)};
  }
  ${media.tablet`
    transform: translate3d(35vw, 0, 0);
  `};
`;
// const NavMenuToggleWrapper = styled.div`
//   ul li {
//     transform: ${({ closed }) =>
//       closed ? 'translate3d(0, 0, 0)' : 'translate3d(-35vw, 0, 0)'};
//     opacity: ${({ closed }) => (closed ? 0 : 1)};
//     transition: ${({ closed }) => (closed ? '0.2s ease-out' : '0.25s ease-in')};
//   }
//   ul li:nth-child(2) {
//     transition-delay: ${({ closed }) => (closed ? 0 : '0.05s')};
//   }
//   ul li:nth-child(3) {
//     transition-delay: ${({ closed }) => (closed ? 0 : '0.1s')};
//   }
//   ul li:nth-child(4) {
//     transition-delay: ${({ closed }) => (closed ? 0 : '0.15s')};
//   }
//   ul li:nth-child(5) {
//     transition-delay: ${({ closed }) => (closed ? 0 : '0.2s')};
//   }
//   ${media.tablet`
//     transform: translate3d(35vw, 0, 0);
//   `};
// `;

export default NavMenuToggleWrapper;
