import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { sizes, media } from '../config/media';
import { StaticQuery, graphql } from 'gatsby';

import { MenuContextProvider } from '../components/Context/MenuContext';
import {
  HiddenContextProvider,
  HiddenContextConsumer,
} from '../components/Context/HiddenContext';
import { theme } from '../config/theme';

import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import '../style/index.css';

import HeroImg from '../components/HeroImg';
import ParticleBG from '../components/ParticleBG';
import Listener from '../components/Listener';

class Layout extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isHome: true,
  //     // pageMiddle: false,
  //     // pageBottom: false,
  //   };
  //   // this.updateIsHome();
  // }

  // componentDidUpdate() {
  //   this.updateIsHome();
  // }

  // handleResize = () => {
  //   setTimeout(() => {
  //     this.updateIsMobile();
  //   }, 1000);
  // };

  // updateIsHome() {
  //   const isHome = this.props.location.pathname === '/';
  //   if (isHome !== this.state.isHome) {
  //     this.setState({
  //       isHome,
  //     });
  //   }
  // }

  // handleScrollState = event => {
  //   let scrollLength = window.pageYOffset;
  //   let windowHeight = window.innerHeight;
  //   if (typeof window !== `undefined`) {
  //     scrollLength = window.pageYOffset;
  //     windowHeight = window.innerHeight;
  //   }
  //   const pageScrolled = scrollLength > 0;
  //   const marginLength = 300;
  //   const borderLength = 5;
  //   const extraMobileMenuMargin = 300;

  //   if (pageScrolled !== this.state.pageScrolled) {
  //     this.setState({
  //       pageScrolled,
  //     });
  //   }

  //   let lengthToMiddle = scrollLength;
  //   if (this.state.isMobile && this.state.isMenuOpen) {
  //     lengthToMiddle = lengthToMiddle - extraMobileMenuMargin;
  //   }

  //   let pageMiddle = lengthToMiddle >= windowHeight * 0.55;

  //   if (pageMiddle !== this.state.pageMiddle) {
  //     this.setState({
  //       pageMiddle,
  //     });
  //   }

  //   let pageLength =
  //     document.querySelector('#body').offsetHeight + marginLength;
  //   if (this.state.isMobile && this.state.isMenuOpen) {
  //     pageLength = pageLength + extraMobileMenuMargin;
  //   }
  //   if (this.state.isHome) {
  //     pageLength = pageLength + windowHeight + borderLength;
  //   } else {
  //     pageLength = pageLength + 140;
  //   }
  //   const isBottom = () => pageLength - windowHeight <= scrollLength;

  // getBodyTop(isHome, isMobile, isMenuOpen) {
  //   let top = 0;
  //   if (isHome) {
  //     const headerHeight = isMobile ? '140px' : '15vh';
  //     if (isMobile) {
  //       let navMargin = isMenuOpen ? 300 : 0;
  //       if (typeof window !== `undefined`) {
  //         top = window.innerHeight - parseInt(headerHeight) - navMargin;
  //         // top = window.innerHeight - parseInt(headerHeight);
  //       }
  //       top = `${top}px`;
  //     } else {
  //       top = 100 - parseInt(headerHeight);
  //       top = `${top}vh`;
  //     }
  //   }
  //   return top;
  // }

  render() {
    const { location, children } = this.props;
    // const {
    //   isHome,
    //   // isMobile,
    //   pageScrolled,
    //   pageMiddle,
    //   pageBottom,
    // } = this.state;

    // let pageTitleArr = location.pathname.split('/');
    // let pageTitle = '';
    // if (pageTitleArr.length >= 0) {
    //   pageTitle = pageTitleArr[pageTitleArr.length - 1];
    //   pageTitle = pageTitle
    //     .split('-')
    //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //     .join(' ');
    // }

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => (
          <MenuContextProvider>
            <HiddenContextProvider pathname={location.pathname}>
              <ThemeProvider theme={theme}>
                <LayoutWrapper>
                  <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[{ name: 'sup', content: 'bro' }]}
                  >
                    <html lang="en" />
                  </Helmet>
                  <ParticleBG />
                  <HiddenContextConsumer>
                    {value => <Listener value={value} />}
                  </HiddenContextConsumer>
                  <Header pathname={location.pathname} />
                  <HeroImg />
                  <HiddenContextConsumer>
                    {({ isHome }) => (
                      <Body id="body" isHome={isHome}>
                        {children}
                      </Body>
                    )}
                  </HiddenContextConsumer>
                  <Footer
                  // pageScrolled={pageScrolled}
                  // pageMiddle={pageMiddle}
                  // pageBottom={pageBottom}
                  // isHome={isHome}
                  // isMobile={isMobile}
                  />
                </LayoutWrapper>
              </ThemeProvider>
            </HiddenContextProvider>
          </MenuContextProvider>
        )}
      />
    );
  }
}

const LayoutWrapper = styled.div`
  color: ${props => props.theme.colorText};
`;

const Body = styled.main`
  border-top: 7px solid ${props => props.theme.colorPrimary}80;
  border-bottom: 7px solid ${props => props.theme.colorPrimary}80;
  z-index: 10;
  pointer-events: none;
  position: absolute;
  overflow-y: scroll;
  width: 100vw;
  top: 100vh;
  margin: calc(
      (${props => props.theme.mobileHeaderHeight}) +
        (${props => (props.isMenuOpen ? '300px' : '0px')})
    )
    auto ${props => props.theme.mobileFooterHeight} auto;
  /* transition: 0.2s ease-in-out; */
  /* @media (min-width: ${props => props.theme.widthTablet}) {
    margin: calc(
        ${props => props.theme.tabletHeaderHeight}vh -
          ${props => props.theme.mainBorderSize}
      )
      auto;
  } */
  ${media.tablet`
    margin: 17vh auto 13vh auto;
  `}
  @media (min-width: ${sizes.laptop}px){
    border-radius: 10px;
    margin-left: 8vw;
    margin-right: 8vw;
    width: 84vw;
    border: 7px solid ${props => props.theme.colorPrimary}80;
  }
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `};
`;

export default Layout;
