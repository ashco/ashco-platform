import React, { PureComponent } from 'react';

import styled from 'styled-components';
import { sizes, media } from '../config/media';

class Main extends PureComponent {
  render() {
    // Calculate top margin
    const { children, isMobile, isHome, navMenuOpen } = this.props;
    let marginTop = 100;

    if (isMobile) {
      if (typeof window !== `undefined`) {
        marginTop = isHome ? `${window.innerHeight + 140}px` : `140px`;
        if (navMenuOpen && !isHome) {
          marginTop = '605px';
        }
      }
    } else {
      marginTop = isHome ? '113vh' : '13vh';
    }

    return (
      <MainWrapper isHome={isHome} marginTop={marginTop}>
        {children}
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.main`
  border-top: ${({ isHome, theme }) =>
    isHome ? 'none' : `7px solid ${theme.colorPrimary}`};
  border-bottom: ${({ isHome, theme }) =>
    isHome ? 'none' : `7px solid ${theme.colorPrimary}`};
  /* border-top: ${({ isHome }) => (isHome ? 'none' : '7px solid')};
  border-bottom: ${({ isHome }) => (isHome ? 'none' : '7px solid')};
  border-image: linear-gradient(
    135deg,
    ${({ theme }) => theme.colorDarker} 0%,
    ${({ theme }) => theme.colorPrimary} 50%,
    ${({ theme }) => theme.colorLighter} 100%
  );
  border-image-slice: 1; */
  z-index: 10;
  pointer-events: none;
  position: absolute;
  overflow: auto;
  width: 100%;
  min-height: calc(100vh - 140px - 140px);
  margin: 0 auto 220px auto;
  margin-top: ${({ marginTop }) => marginTop};
  background-color: ${({ theme, isHome }) =>
    isHome ? 'transparent' : theme.colorBackground};
  @media (min-width: ${sizes.tablet}px) {
    min-height: 77vh;
    margin-bottom: 7.8rem;
    margin-top: ${({ marginTop }) => marginTop};
  }
  @media (min-width: 935px) {
    margin-bottom: 6.8rem;
  }
  @media (min-width: 935px) {
    margin-bottom: 6rem;
  }
  @media (min-width: ${sizes.laptop}px) {
    border-radius: 10px;
    margin-left: 8vw;
    margin-right: 8vw;
    width: 84vw;
    border: ${({ isHome, theme }) =>
      isHome ? 'none' : `7px solid ${theme.colorPrimary}`};
    /* border: 8px solid; */
    /* border-image: linear-gradient(
      135deg,
      ${({ theme }) => theme.colorDarker}bb 0%,
      ${({ theme }) => theme.colorPrimary}bb 50%,
      ${({ theme }) => theme.colorLighter}bb 100%
    );
    border-image-slice: 1; */
  }
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `};
`;

export default Main;
