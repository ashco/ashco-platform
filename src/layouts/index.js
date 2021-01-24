import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

import { themeDefaultDark } from '../config/config';

import {
  VisualContextProvider,
  VisualContextConsumer,
} from '../components/Context/VisualContext';

import Header from '../components/Header/header'; // for whatever reason, this needs to be lowercase header or netlify will run into issue deploying
import Footer from '../components/Footer/Footer';
import '../style/index.css';

import ParticleBG from '../components/ParticleBG';
import Main from '../components/Main';
import { sizes } from '../config/media';

class Layout extends Component {
  constructor(props) {
    super(props);

    let themeobj = themeDefaultDark;
    let innerWidth = 0;
    let innerHeight = 0;
    let scrollLength = 0;
    let isMobile;
    const isHome = this.props.location.pathname === '/';

    if (typeof window !== `undefined`) {
      innerWidth = window.innerWidth;
      innerHeight = window.innerHeight;
      scrollLength = window.pageYOffset;
      isMobile = window.innerWidth <= sizes.tablet;
    }

    this.state = {
      themeobj,
      innerWidth,
      innerHeight,
      scrollLength,
      isMobile,
      isHome,
    };
  }

  // All logic to handle bg and theme updates
  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 150));
    window.addEventListener('resize', debounce(this.handleResize, 500));

    // if (typeof window !== `undefined`) {
    //   // Check for system Dark Mode
    //   if (
    //     window.matchMedia &&
    //     window.matchMedia('(prefers-color-scheme: dark)').matches
    //   ) {
    //     this.updateTheme(themeDefaultDark);
    //   } else {
    //     this.updateTheme(themeDefaultLight);
    //   }
    // } else {
    //   this.updateTheme(themeDefaultLight);
    // }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

  handleScroll = () => {
    let scrollLength;
    if (typeof window !== `undefined`) {
      scrollLength = window.pageYOffset;
    }

    this.setState({ scrollLength });
  };

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

  updateTheme = (themeobj) => {
    const newState = {
      ...this.state,
      themeobj: { ...this.state.themeobj, ...themeobj },
    };

    this.setState(newState);
  };

  render() {
    const {
      themeobj,
      innerWidth,
      innerHeight,
      scrollLength,
      isHome,
      isMobile,
    } = this.state;
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
            allContentfulContactInfo {
              edges {
                node {
                  # id
                  githubUrl
                  linkedInUrl
                  resumeUrl
                }
              }
            }
          }
        `}
        render={(data) => (
          <VisualContextProvider
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            scrollLength={scrollLength}
            isHome={isHome}
            isMobile={isMobile}
            pathname={location.pathname}
          >
            <ThemeProvider theme={themeobj}>
              <LayoutWrapper>
                <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
                  <html lang="en" />
                </Helmet>

                <Header
                  isHome={isHome}
                  isMobile={isMobile}
                  pathname={location.pathname}
                />
                <VisualContextConsumer>
                  {({ navMenuOpen, updateMainElHeight }) => (
                    <Main
                      isHome={isHome}
                      isMobile={isMobile}
                      navMenuOpen={navMenuOpen}
                      updateMainElHeight={updateMainElHeight}
                      pathname={location.pathname}
                    >
                      {children}
                    </Main>
                  )}
                </VisualContextConsumer>
                <Footer
                  themeobj={themeobj}
                  isHome={isHome}
                  updateTheme={this.updateTheme}
                  contactInfo={data.allContentfulContactInfo.edges[0].node}
                />
                <ParticleBG innerWidth={innerWidth} innerHeight={innerHeight} />
              </LayoutWrapper>
            </ThemeProvider>
          </VisualContextProvider>
        )}
      />
    );
  }
}

const LayoutWrapper = styled.div`
  color: ${({ theme }) => theme.colorText};
`;

export default Layout;
