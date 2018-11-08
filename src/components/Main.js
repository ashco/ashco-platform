import React, { PureComponent } from 'react';

import styled, { css } from 'styled-components';
import { sizes, media } from '../config/media';

class Main extends PureComponent {
  render() {
    const { children, isHome, navMenuOpen } = this.props;
    return (
      <MainContainer>
        <MainWrapper isHome={isHome} navMenuOpen={navMenuOpen}>
          {children}
        </MainWrapper>
        <FooterSpacer isHome={isHome} />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  pointer-events: none;
`;

const FooterSpacer = styled.div`
  height: ${({ isHome }) => (isHome ? 0 : '220px')};
  @media (min-width: ${sizes.tablet}px) {
    height: ${({ isHome }) => (isHome ? 0 : '7.8rem')};
  }
  @media (min-width: 935px) {
    height: ${({ isHome }) => (isHome ? 0 : '6rem')};
  }
`;

const MainWrapper = styled.main`
  /* border-top: ${({ theme }) => `7px solid ${theme.colorPrimary}`}; */
  border-top: ${({ theme }) => {
    console.log('theme: ', theme);
    return `7px solid ${theme.colorPrimary}`;
  }};
  border-bottom: ${({ theme }) => `7px solid ${theme.colorPrimary}`};
  overflow: auto;
  width: 100%;
  /* 140x2 to evenly frame main */
  min-height: calc(100vh - 130px - 130px);
  margin: 0 auto;
  margin-top: ${({ navMenuOpen }) => (navMenuOpen ? '605px' : '130px')};
  background-color: ${({ theme }) => theme.colorBackground};
  transition: 0.3s cubic-bezier(0.43, 0.26, 0, 1.01);
  @media (min-width: ${sizes.tablet}px) {
    min-height: 77vh;
    margin-top: 13vh;
  }
  @media (min-width: ${sizes.laptop}px) {
    border-radius: 10px;
    margin-left: 8vw;
    margin-right: 8vw;
    width: 84vw;
    border: ${({ theme }) => `7px solid ${theme.colorPrimary}`};
  }
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `};
  ${({ isHome }) => isHome && MainWrapper_isHome}
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

export default Main;
