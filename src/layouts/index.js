import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import debounce from 'lodash.debounce';

import {
  VisualContextProvider,
  VisualContextConsumer,
} from '../components/Context/VisualContext';

import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import '../style/index.css';

import HeroImg from '../components/HeroImg';
import ParticleBG from '../components/ParticleBG';
import ListenerLogic from '../components/ListenerLogic';
import Main from '../components/Main';
import { sizes } from '../config/media';

import { themeDefault } from '../config/config';

class Layout extends PureComponent {
  constructor(props) {
    super(props);

    let theme = themeDefault;
    let innerWidth = 0;
    let innerHeight = 0;
    let isMobile;
    const isHome = this.props.location.pathname === '/';

    if (typeof localStorage !== 'undefined') {
      let localStorageObj = JSON.parse(localStorage.getItem('themeObj'));
      if (localStorageObj) {
        theme = localStorageObj;
      }
    }
    if (typeof window !== `undefined`) {
      innerWidth = window.innerWidth;
      innerHeight = window.innerHeight;
      isMobile = window.innerWidth <= sizes.tablet;
    }

    this.state = {
      theme,
      innerWidth,
      innerHeight,
      isMobile,
      isHome,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', debounce(this.handleResize, 500));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    const isHome = this.props.location.pathname === '/';
    if (isHome !== this.state.isHome) {
      this.setState({
        isHome,
      });
    }
    if (typeof window !== `undefined`) {
      const isMobile = window.innerWidth <= sizes.tablet;
      if (isMobile !== this.state.isMobile) {
        this.setState({
          isMobile,
        });
      }
    }
  }

  handleResize = () => {
    let innerWidth;
    let innerHeight;

    if (typeof window !== `undefined`) {
      innerWidth = window.innerWidth;
      innerHeight = window.innerHeight;
    }

    this.setState({
      innerWidth,
      innerHeight,
    });
  };

  updateTheme = themeObj => {
    if (themeObj !== this.state.theme) {
      this.setState({ theme: themeObj });
    }
  };

  render() {
    const { theme, innerWidth, innerHeight, isHome, isMobile } = this.state;
    const { location, children } = this.props;
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
          <VisualContextProvider pathname={location.pathname}>
            {/* <VisualContextConsumer>
              {({ theme }) => {
                return ( */}
            <ThemeProvider theme={theme}>
              <LayoutWrapper>
                <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[{ name: 'sup', content: 'bro' }]}
                >
                  <html lang="en" />
                </Helmet>
                <VisualContextConsumer>
                  {value => (
                    <ListenerLogic value={value} pathname={location.pathname} />
                  )}
                </VisualContextConsumer>
                <ParticleBG innerWidth={innerWidth} innerHeight={innerHeight} />
                <Header
                  isHome={isHome}
                  isMobile={isMobile}
                  pathname={location.pathname}
                  updateTheme={this.updateTheme}
                />
                <VisualContextConsumer>
                  {({ showHeroImg }) => {
                    return (
                      <HeroImg showHeroImg={showHeroImg} isHome={isHome} />
                    );
                  }}
                </VisualContextConsumer>
                <VisualContextConsumer>
                  {({ navMenuOpen, updateMainElHeight }) => (
                    <Main
                      isHome={isHome}
                      isMobile={isMobile}
                      navMenuOpen={navMenuOpen}
                      updateMainElHeight={updateMainElHeight}
                    >
                      {children}
                    </Main>
                  )}
                </VisualContextConsumer>
                <Footer />
              </LayoutWrapper>
            </ThemeProvider>
            {/* );
              }}
            </VisualContextConsumer> */}
          </VisualContextProvider>
        )}
      />
    );
  }
}

// ThemeProvider.defaultProps = {
//   theme: {
//     colorLighter: '#E3854A',
//     colorPrimary: '#DD702B',
//     colorDarker: '#D65E12',
//     colorBackground: '#1f1f1f',
//     colorText: '#dfdfdf',
//   },
// };

const LayoutWrapper = styled.div`
  color: ${({ theme }) => theme.colorText};
`;

export default Layout;
