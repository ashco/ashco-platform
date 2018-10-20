import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

// import { MenuContextProvider } from '../components/Context/MenuContext';
import {
  VisualContextProvider,
  VisualContextConsumer,
} from '../components/Context/VisualContext';
import { theme } from '../config/theme';

import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import '../style/index.css';

import HeroImg from '../components/HeroImg';
import ParticleBG from '../components/ParticleBG';
import EventListener from '../components/EventListener';
import Main from '../components/Main';

class Layout extends Component {
  render() {
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
            <ThemeProvider theme={theme}>
              <LayoutWrapper>
                <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[{ name: 'sup', content: 'bro' }]}
                >
                  <html lang="en" />
                </Helmet>
                <VisualContextConsumer>
                  {value => <EventListener value={value} />}
                </VisualContextConsumer>
                <ParticleBG />
                <Header pathname={location.pathname} />
                <HeroImg />
                <VisualContextConsumer>
                  {({ isHome, isMobile, menuOpen }) => (
                    <Main
                      isHome={isHome}
                      isMobile={isMobile}
                      menuOpen={menuOpen}
                    >
                      {children}
                    </Main>
                  )}
                </VisualContextConsumer>
                <Footer />
              </LayoutWrapper>
            </ThemeProvider>
          </VisualContextProvider>
        )}
      />
    );
  }
}

const LayoutWrapper = styled.div`
  color: ${props => props.theme.colorText};
`;

export default Layout;
