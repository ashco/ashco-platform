import React, { PureComponent } from 'react';

import styled from 'styled-components';
import { sizes, media } from '../config/media';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    const { isMobile, isHome, navMenuOpen } = this.props;
    let marginTop = '140px';

    if (isMobile) {
      marginTop = isHome ? `0` : `140px`;
      if (navMenuOpen && !isHome) {
        marginTop = '605px';
      }
    } else {
      marginTop = '13vh';
    }

    this.state = {
      marginTop,
    };
  }

  componentDidUpdate() {
    const { isMobile, isHome, navMenuOpen } = this.props;
    let marginTop = '140px';

    if (isMobile) {
      marginTop = isHome ? `0` : `140px`;
      if (navMenuOpen && !isHome) {
        marginTop = '605px';
      }
    } else {
      marginTop = '13vh';
    }

    this.setState = {
      marginTop,
    };
  }

  getMarginTop() {
    const { isMobile, isHome, navMenuOpen } = this.props;
    let marginTop = '140px';

    if (isMobile) {
      marginTop = isHome ? `0` : `140px`;
      if (navMenuOpen && !isHome) {
        marginTop = '605px';
      }
    } else {
      marginTop = '13vh';
    }

    return marginTop;
  }

  render() {
    // Calculate top margin
    // const { marginTop } = this.state;
    const { children, isHome } = this.props;
    // let marginTop = 140;
    // console.log(this.props);
    // console.log('isMobile:', this.props.isMobile);

    // if (isMobile) {
    //   // if (typeof window !== `undefined`) {
    //   marginTop = isHome ? `0` : `140px`;
    //   if (navMenuOpen && !isHome) {
    //     marginTop = '605px';
    //   }
    //   console.log('its mobile');
    //   console.log('marginTop:', marginTop);
    //   // }
    // } else {
    //   marginTop = '13vh';
    // }
    return (
      <Thing>
        {/* <MainWrapper isHome={isHome} marginTop={marginTop}> */}
        <MainWrapper isHome={isHome} marginTop={this.getMarginTop()}>
          {children}
        </MainWrapper>
        <FooterSpacer />
      </Thing>
    );
  }
}

const Thing = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  pointer-events: none;
`;

const FooterSpacer = styled.div`
  height: 220px;
  @media (min-width: ${sizes.tablet}px) {
    height: 7.8rem;
  }
  @media (min-width: 935px) {
    height: 6rem;
  }
`;

const MainWrapper = styled.main`
  border-top: ${({ isHome, theme }) =>
    isHome ? 'none' : `7px solid ${theme.colorPrimary}`};
  border-bottom: ${({ isHome, theme }) =>
    isHome ? 'none' : `7px solid ${theme.colorPrimary}`};
  overflow: auto;
  width: 100%;
  /* 140x2 to evenly frame main */
  min-height: calc(100vh - 140px - 140px);
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop};
  background-color: ${({ theme, isHome }) =>
    isHome ? 'transparent' : theme.colorBackground};
  @media (min-width: ${sizes.tablet}px) {
    min-height: 77vh;
    margin-top: ${({ marginTop }) => marginTop};
  }
  @media (min-width: ${sizes.laptop}px) {
    border-radius: 10px;
    margin-left: 8vw;
    margin-right: 8vw;
    width: 84vw;
    border: ${({ isHome, theme }) =>
      isHome ? 'none' : `7px solid ${theme.colorPrimary}`};
  }
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `};
`;

export default Main;
