import React from 'react';
import styled, { css, withTheme } from 'styled-components';

import { sizes, media } from '../config/media';

function genBackgroundImage(color, isDarkMode) {
  const opacity = isDarkMode ? '0.06' : '0.09';

  switch (color) {
    case 'ORANGE':
      return `url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23DD702B' fill-opacity='${opacity}' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    case 'RED':
      return `url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23FF5D5B' fill-opacity='${opacity}' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    case 'PURPLE':
      return `url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23E773F4' fill-opacity='${opacity}' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    case 'BLUE':
      return `url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%234BB9DA' fill-opacity='${opacity}' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    case 'GREEN':
      return `url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%2321C9A4' fill-opacity='${opacity}' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    default:
      return '';
  }
}

const Main = ({
  children,
  isHome,
  navMenuOpen,
  pathname,
  theme: { colorPrimary },
}) => {
  function checkIsProject(pathname) {
    const path = pathname.split('/');

    return path.length === 4 && path[1] === 'projects';
  }

  checkIsProject(pathname);

  return (
    <MainContainer>
      <MainWrapper
        isHome={isHome}
        isProject={checkIsProject(pathname)}
        navMenuOpen={navMenuOpen}
        colorPrimary={colorPrimary}
      >
        {children}
      </MainWrapper>
      <FooterSpacer isHome={isHome} />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  pointer-events: none;
`;

const FooterSpacer = styled.div`
  height: ${({ isHome }) => (isHome ? 0 : '17.5rem')};
  @media (min-width: ${sizes.tablet}px) {
    height: ${({ isHome }) => (isHome ? 0 : '10rem')};
  }
`;

const MainWrapper = styled.main`
  overflow: auto;
  width: 100%;
  pointer-events: all;
  /* 140x2 to evenly frame main */
  min-height: calc(100vh - 130px - 130px);
  padding: ${(props) =>
    props.isHome ? '0' : props.isProject ? '0 0 1.5rem' : '1.5rem 0'};
  margin-top: ${({ navMenuOpen }) => (navMenuOpen ? '300px' : '140px')};
  background-color: ${({ theme }) => theme.colorBackground};
  border-top: 3px solid ${(props) => props.theme.colorPrimary};
  border-bottom: 3px solid ${(props) => props.theme.colorPrimary};
  box-shadow: ${({ theme }) => theme.colorPrimary}80 0px 5px 15px;
  border-radius: 5px;
  ${media.tablet`
    min-height: 77vh;
    margin-top: 13vh;
  `}
  @media (min-width: ${sizes.laptop}px) {
    padding: ${(props) => (props.isHome ? '0' : '3rem')};
    border: 3px solid ${(props) => props.theme.colorPrimary};
    border-radius: 30px;
    margin-left: 8vw;
    margin-right: 8vw;
    width: 84vw;
  }
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `};
  ${({ isHome }) => isHome && MainWrapper_isHome}

  background-color: ${({ theme }) => theme.colorBackground};
  background-image: ${({ theme }) =>
    genBackgroundImage(theme.color, theme.isDarkMode)};
`;

const MainWrapper_isHome = css`
  border-top: none;
  border-bottom: none;
  margin-top: 100vh;
  background-color: transparent;
  min-height: 0;
  height: 0;
  @media (min-width: ${sizes.tablet}px) {
    min-height: 0;
    height: 0;
    margin-top: 100vh;
  }
  @media (min-width: ${sizes.laptop}px) {
    border: none;
  }
`;

export default withTheme(Main);
