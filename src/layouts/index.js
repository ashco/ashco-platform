import React from 'react';
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

// class Layout extends Component {
const Layout = ({ location, children }) => {
  const [themeobj, setThemeobj] = React.useState(themeDefaultDark); // can't be called themeobj or error occurs
  const [isHome, setIsHome] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(true);
  const [scrollLength, setScrollLength] = React.useState(0);
  const [windowSize, setWindowSize] = React.useState({
    innerWidth: window?.innerWidth,
    innerHeight: window?.innerHeight,
  });

  // handle scroll listeners
  React.useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 150));
    window.addEventListener('resize', debounce(handleResize, 500));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // check if home
  React.useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname]);

  // check if mobile
  React.useEffect(() => {
    setIsMobile(windowSize.innerWidth < sizes.tablet);
  }, [windowSize.innerWidth]);

  function handleScroll() {
    if (typeof window !== `undefined`) {
      setScrollLength(window.pageYOffset);
    }
  }

  function handleResize() {
    if (typeof window !== `undefined`) {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    }
  }

  function updateTheme(newThemeobj) {
    setThemeobj({ ...themeobj, ...newThemeobj });
  }

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
          innerWidth={windowSize.innerWidth}
          innerHeight={windowSize.innerHeight}
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
                updateTheme={updateTheme}
                contactInfo={data.allContentfulContactInfo.edges[0].node}
              />
              <ParticleBG
                innerWidth={windowSize.innerWidth}
                innerHeight={windowSize.innerHeight}
              />
            </LayoutWrapper>
          </ThemeProvider>
        </VisualContextProvider>
      )}
    />
  );
};

const LayoutWrapper = styled.div`
  color: ${({ theme }) => theme.colorText};
`;

export default Layout;
