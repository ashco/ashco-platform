import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import {
  VisualContextProvider,
  VisualContextConsumer,
} from '../components/Context/VisualContext';
import { theme } from '../config/config';
// import { theme } from '../pages/index';

import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import '../style/index.css';

import HeroImg from '../components/HeroImg';
import ParticleBG from '../components/ParticleBG';
import ListenerLogic from '../components/ListenerLogic';
import Main from '../components/Main';

// import { themeDefault, themeArr } from '../config/config';

class Layout extends Component {
  // constructor(props) {
  //   super(props);
  //   // let theme = themeDefault;
  //   // if (typeof localStorage !== 'undefined') {
  //   //   theme = JSON.parse(localStorage.getItem('themeObj'));
  //   // }

  //   this.state = {
  //     theme,
  //   };
  // }

  render() {
    // const { theme } = this.state;
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
            <VisualContextConsumer>
              {({ theme }) => (
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
                        <ListenerLogic
                          value={value}
                          pathname={location.pathname}
                        />
                      )}
                    </VisualContextConsumer>
                    <ParticleBG />
                    <Header pathname={location.pathname} />
                    <HeroImg />
                    <VisualContextConsumer>
                      {({
                        isHome,
                        isMobile,
                        navMenuOpen,
                        updateMainElHeight,
                      }) => (
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
              )}
            </VisualContextConsumer>
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
