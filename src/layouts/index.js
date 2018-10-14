import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import Header from '../components/header';
import Footer from '../components/Footer';
import './index.css';

import ParticleBG from '../components/ParticleBG';
import image from '../images/logo-dark.svg';

const LayoutWrapper = styled.div`
  color: ${props => props.theme.colorText};
`;

const Body = styled.main`
  z-index: 10;
  pointer-events: none;
  position: absolute;
  overflow-y: scroll;
  /* background-color: #222; */
  top: ${({ isHome }) => (isHome ? '100vh' : '0')};
  width: 100vw;
  margin: 120px auto;
  padding-top: 0;
  @media (min-height: 770px) {
    margin: 15vh auto;
  }
`;

class Layout extends Component {
  state = {
    isHome: true,
    pageScrolled: false,
  };

  componentWillMount() {
    this.updateIsHome();
    this.toggleIsHomeEvent();
  }

  componentDidUpdate() {
    this.updateIsHome();
    this.toggleIsHomeEvent();
  }

  updateIsHome() {
    const isHome = location.pathname === '/';
    if (isHome !== this.state.isHome) {
      this.setState({
        isHome,
      });
    }
  }

  toggleIsHomeEvent() {
    this.state.isHome
      ? window.addEventListener('scroll', this.handleScroll)
      : window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    let pageScrolled = window.pageYOffset >= window.innerHeight * 0.5;
    if (pageScrolled !== this.state.pageScrolled) {
      this.setState({
        pageScrolled,
      });
    }
  };

  render() {
    const { children, data, location } = this.props;
    const { isHome, pageScrolled } = this.state;

    const theme = {
      // colorPrimary: '#d27831',
      colorPrimary: '#d34545',
      colorBackground: '#222',
      // colorText: '#d3d',
      colorText: '#eee',
    };

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
          />
          <Body isHome={isHome}>{children()}</Body>
          <Footer pageScrolled={pageScrolled} isHome={isHome} />
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
