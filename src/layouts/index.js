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
    isMenuOpen: true,
    pageMiddle: false,
    pageBottom: false,
  };

  componentWillMount() {
    this.updateIsHome();
    this.updateIsMobile();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollState);
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    this.updateIsHome();
  }

  handleResize = () => {
    setTimeout(() => {
      this.updateIsMobile();
    }, 1000);
  };

  updateIsHome() {
    const isHome = this.props.location.pathname === '/';
    if (isHome !== this.state.isHome) {
      this.setState({
        isHome,
      });
    }
  }

  updateIsMobile() {
    if (typeof window !== `undefined`) {
      const isMobile = window.innerWidth <= 750;
      if (isMobile !== this.state.isMobile) {
        this.setState({
          isMobile,
        });
      }
    }
  }

  toggleMenu = isOpen => {
    if (this.state.isMobile) {
      if (isOpen === 'open') {
        this.setState({
          isMenuOpen: true,
        });
      } else if (isOpen === 'closed') {
        this.setState({
          isMenuOpen: false,
        });
      } else {
        this.setState({
          isMenuOpen: !this.state.isMenuOpen,
        });
      }
    }
  };

  handleScrollState = event => {
    let scrollLength = window.pageYOffset;
    let windowHeight = window.innerHeight;
    if (typeof window !== `undefined`) {
      scrollLength = window.pageYOffset;
      windowHeight = window.innerHeight;
    }
    const pageScrolled = scrollLength > 0;
    const marginLength = 300;
    const borderLength = 5;
    const extraMobileMenuMargin = 300;

    console.log({ pageScrolled });

    if (pageScrolled !== this.state.pageScrolled) {
      this.setState({
        pageScrolled,
      });
    }

    let lengthToMiddle = scrollLength;
    if (this.state.isMobile && this.state.isMenuOpen) {
      lengthToMiddle = lengthToMiddle - extraMobileMenuMargin;
    }

    let pageMiddle = lengthToMiddle >= windowHeight * 0.55;

    if (pageMiddle !== this.state.pageMiddle) {
      this.setState({
        pageMiddle,
      });
    }

    let pageLength =
      document.querySelector('#body').offsetHeight + marginLength;
    if (this.state.isMobile && this.state.isMenuOpen) {
      pageLength = pageLength + extraMobileMenuMargin;
    }
    if (this.state.isHome) {
      pageLength = pageLength + windowHeight + borderLength;
    } else {
      pageLength = pageLength + 140;
    }
    const isBottom = () => pageLength - windowHeight <= scrollLength;

    console.log({ pageLength });
    console.log({ scrollLength });
    console.log({ windowHeight });
    console.log(pageLength - windowHeight);
    console.log(isBottom());

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

  getBodyTop(isHome, isMobile, isMenuOpen) {
    let top = 0;
    if (isHome) {
      const headerHeight = isMobile ? '140px' : '15vh';
      if (isMobile) {
        let navMargin = isMenuOpen ? 300 : 0;
        if (typeof window !== `undefined`) {
//           top = window.innerHeight - parseInt(headerHeight) - navMargin;
          // top = window.innerHeight - parseInt(headerHeight);
        }
        top = `${top}px`;
      } else {
        top = 100 - parseInt(headerHeight);
        top = `${top}vh`;
      }
    }
    return top;
  }

  render() {
    const { children, data, location } = this.props;
    const {
      isHome,
      isMobile,
      isMenuOpen,
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
            isMobile={isMobile}
            isMenuOpen={isMenuOpen}
            toggleMenu={this.toggleMenu}
          />
          {!isMobile ? <TitleText /> : isHome && !pageMiddle && <TitleText />}
          <Body
            id="body"
            isHome={isHome}
            top={this.getBodyTop(isHome, isMobile, isMenuOpen)}
            isMenuOpen={isMenuOpen}
          >
            {children()}
          </Body>
          <Footer
            pageScrolled={pageScrolled}
            pageMiddle={pageMiddle}
            pageBottom={pageBottom}
            isHome={isHome}
            isMobile={isMobile}
            toggleMenu={this.toggleMenu}
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
  margin: calc(
      ${props => props.theme.mobileHeaderHeight} +
        ${props => (props.isMenuOpen ? '300px' : '0px')}
    )
    auto ${props => props.theme.mobileFooterHeight} auto;
  transition: 0.2s ease-in-out;
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
