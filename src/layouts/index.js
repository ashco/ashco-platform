import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../style/theme';

import Header from '../components/header';
import Footer from '../components/Footer';
import '../style/index.css';

import ParticleBG from '../components/ParticleBG';

const LayoutWrapper = styled.div`
  color: ${props => props.theme.colorText};
`;

const Body = styled.main`
  z-index: 10;
  pointer-events: none;
  position: absolute;
  overflow-y: scroll;
  /* top: ${({ isHome }) => (isHome ? '100vh' : '0')}; */
  top: ${props => props.top};
  width: 100vw;
  margin: ${props => props.theme.mobileHeaderHeight} auto
    ${props => props.theme.mobileFooterHeight} auto;
  @media (min-width: ${props => props.theme.widthTablet}) {
    margin: ${props => props.theme.tabletHeaderHeight} auto;
  }
`;

class Layout extends Component {
  state = {
    isHome: true,
    pageScrolled: false,
    pageBottom: false,
  };

  componentWillMount() {
    this.updateIsHome();
    window.addEventListener('scroll', this.handleScrollState);
  }

  componentDidUpdate() {
    this.updateIsHome();
  }

  updateIsHome() {
    const isHome = location.pathname === '/';
    if (isHome !== this.state.isHome) {
      this.setState({
        isHome,
      });
    }
  }

  handleScrollState = event => {
    const pageScrolled = window.pageYOffset >= window.innerHeight * 0.5;

    if (pageScrolled !== this.state.pageScrolled) {
      this.setState({
        pageScrolled: pageScrolled,
      });
    }

    // pageBottom state
    const marginLength = 300 + 140;
    const mainPageLength = window.innerHeight;
    let pageLength =
      document.querySelector('#body').offsetHeight + marginLength;
    if (this.state.isHome) {
      pageLength = pageLength + mainPageLength;
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
    const { isHome, pageScrolled, pageBottom } = this.state;

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
        const isMobile = window.innerWidth <= 750;
        const headerHeight = isMobile ? '140px' : '15vh';
        if (isMobile) {
          top = window.innerHeight - parseInt(headerHeight);
          top = `${top}px`;
          console.log(top);
        } else {
          top = 100 - parseInt(headerHeight);
          top = `${top}vh`;
          console.log(top);
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
          <Body id="body" isHome={isHome} top={getBodyTop(isHome)}>
            {children()}
          </Body>
          <Footer
            pageScrolled={pageScrolled}
            pageBottom={pageBottom}
            isHome={isHome}
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
