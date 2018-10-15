import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../config/theme';

import TitleText from '../components/HeroText';
import Header from '../components/header';
import Footer from '../components/Footer';
import '../style/index.css';

import ParticleBG from '../components/ParticleBG';

class Layout extends Component {
  state = {
    isHome: true,
    isMobile: true,
    pageMiddle: false,
    pageBottom: false,
  };

  componentWillMount() {
    this.updateIsHome();
    this.updateIsMobile();
    window.addEventListener('scroll', this.handleScrollState);
  }

  componentDidUpdate() {
    this.updateIsHome();
    this.updateIsMobile();
  }

  updateIsHome() {
    const isHome = location.pathname === '/';
    if (isHome !== this.state.isHome) {
      this.setState({
        isHome,
      });
    }
  }

  updateIsMobile() {
    const isMobile = window.innerWidth <= 750;
    if (isMobile !== this.state.isMobile) {
      this.setState({
        isMobile,
      });
    }
  }

  handleScrollState = event => {
    const pageScrolled = window.pageYOffset > 0;
    if (pageScrolled !== this.state.pageScrolled) {
      this.setState({
        pageScrolled,
      });
    }

    const pageMiddle = window.pageYOffset >= window.innerHeight * 0.5;
    if (pageMiddle !== this.state.pageMiddle) {
      this.setState({
        pageMiddle,
      });
    }

    const marginLength = 300;
    const borderLength = 5;
    const mainPageLength = window.innerHeight;
    let pageLength =
      document.querySelector('#body').offsetHeight + marginLength;
    if (this.state.isHome) {
      pageLength = pageLength + mainPageLength + borderLength;
    } else {
      pageLength = pageLength + 140;
    }
    const windowHeight = window.innerHeight;
    const scrollLength = window.pageYOffset;
    const isBottom = () => pageLength - windowHeight === scrollLength;

    if (isBottom()) {
      this.setState({
        pageBottom: true,
      });
    } else if (!isBottom() && this.state.pageBottom === true) {
      this.setState({
        pageBottom: false,
      });
    }
  };

  render() {
    const { children, data, location } = this.props;
    const {
      isHome,
      isMobile,
      pageScrolled,
      pageMiddle,
      pageBottom,
    } = this.state;

    let pageTitleArr = location.pathname.split('/');
    let pageTitle = '';
    if (pageTitleArr.length >= 0) {
      pageTitle = pageTitleArr[pageTitleArr.length - 1];
      pageTitle = pageTitle
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    const getBodyTop = isHome => {
      let top = 0;
      if (isHome) {
        const headerHeight = isMobile ? '140px' : '15vh';
        if (isMobile) {
          top = window.innerHeight - parseInt(headerHeight);
          top = `${top}px`;
        } else {
          top = 100 - parseInt(headerHeight);
          top = `${top}vh`;
        }
      }
      return top;
    };

    return (
      <ThemeProvider theme={theme}>
        <LayoutWrapper>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header
            data={data}
            location={location}
            title={pageTitle}
            isHome={isHome}
          />
          {isHome && <TitleText />}
          <Body id="body" isHome={isHome} top={getBodyTop(isHome)}>
            {children()}
          </Body>
          <Footer
            pageScrolled={pageScrolled}
            pageMiddle={pageMiddle}
            pageBottom={pageBottom}
            isHome={isHome}
            isMobile={isMobile}
          />
          <ParticleBG />
        </LayoutWrapper>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

const LayoutWrapper = styled.div`
  color: ${props => props.theme.colorText};
`;

const Body = styled.main`
  border-top: ${props => props.theme.mainBorderSize} solid
    ${props => props.theme.colorPrimary}80;
  border-bottom: ${props => props.theme.mainBorderSize} solid
    ${props => props.theme.colorPrimary}80;
  z-index: 10;
  pointer-events: none;
  position: absolute;
  overflow-y: scroll;
  width: 100vw;
  top: calc(${props => props.top} + ${props => props.theme.mainBorderSize});
  margin: ${props => props.theme.mobileHeaderHeight} auto
    ${props => props.theme.mobileFooterHeight} auto;
  @media (min-width: ${props => props.theme.widthTablet}) {
    margin: calc(
        ${props => props.theme.tabletHeaderHeight} -
          ${props => props.theme.mainBorderSize}
      )
      auto;
  }
  @media (min-width: ${props => props.theme.widthDesktop}) {
    border-radius: 10px;
    margin-left: ${props => props.theme.desktopBodySideMargin};
    margin-right: ${props => props.theme.desktopBodySideMargin};
    width: calc(
      100vw - (${props => props.theme.desktopBodySideMargin} * 2) -
        (${props => props.theme.mainBorderSize} * 2)
    );
    border: ${props => props.theme.mainBorderSize} solid
      ${props => props.theme.colorPrimary}80;
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    margin-left: ${props => props.theme.HDBodySideMargin};
    margin-right: ${props => props.theme.HDBodySideMargin};
    width: calc(
      100vw - (${props => props.theme.HDBodySideMargin} * 2) -
        (${props => props.theme.mainBorderSize} * 2)
    );
  }
`;

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    background: imageSharp(id: { regex: "/bg.png/" }) {
      sizes(maxWidth: 1240, grayscale: false) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
