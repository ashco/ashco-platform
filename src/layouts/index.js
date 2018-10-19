import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
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
import Body from '../components/Body';

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
                    {({ isHome, isMobile }) => (
                      <Body id="body" isHome={isHome} isMobile={isMobile}>
                        {children}
                      </Body>
                    )}
                  </HiddenContextConsumer>
                  <Footer />
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

export default Layout;
