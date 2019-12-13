import React, { PureComponent } from 'react';

import styled, { css, withTheme } from 'styled-components';
import { sizes, media } from '../config/media';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    const colorPrimary = this.props.theme.colorPrimary;

    this.state = {
      colorPrimary,
    };
  }
  render() {
    const { colorPrimary } = this.state;
    const { children, isHome, navMenuOpen } = this.props;
    return (
      <MainContainer>
        <MainWrapper
          isHome={isHome}
          navMenuOpen={navMenuOpen}
          colorPrimary={colorPrimary}
        >
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
    height: ${({ isHome }) => (isHome ? 0 : '10vh')};
  }
`;

const MainWrapper = styled.main`
  overflow: auto;
  width: 100%;
  pointer-events: all;
  /* 140x2 to evenly frame main */
  min-height: calc(100vh - 130px - 130px);
  margin: 0 auto;
  margin-top: ${({ navMenuOpen }) => (navMenuOpen ? '300px' : '140px')};
  background-color: ${({ theme }) => theme.colorBackground};
  border-top: 3px solid ${props => props.theme.colorPrimary};
  border-bottom: 3px solid ${props => props.theme.colorPrimary};
  box-shadow: ${({ theme }) => theme.colorPrimary}80 0px 5px 15px;
  @media (min-width: ${sizes.tablet}px) {
    min-height: 77vh;
    margin-top: 13vh;
  }
  @media (min-width: ${sizes.laptop}px) {
    border: 3px solid ${props => props.theme.colorPrimary};
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
