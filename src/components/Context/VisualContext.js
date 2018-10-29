// HeroContext.js
import React from 'react';
import { sizes } from '../../config/media';
// import { themeDefault } from '../../config/config';

const VisualContext = React.createContext();

export class VisualContextProvider extends React.Component {
  constructor(props) {
    super(props);

    let isMobile;
    if (typeof window !== `undefined`) {
      isMobile = window.innerWidth <= sizes.tablet;
    }

    const isHome = this.props.pathname === '/';

    // let theme = themeDefault;
    // if (typeof localStorage !== 'undefined') {
    //   let localStorageObj = JSON.parse(localStorage.getItem('themeObj'));
    //   if (localStorageObj) {
    //     theme = localStorageObj;
    //   }
    // }

    this.state = {
      // theme,
      isMobile,
      isHome,
      colorMenuOpen: false,
      navMenuOpen: true,
      showHeroImg: false,
      showFooterLeft: false,
      showFooterCenter: false,
      showFooterRight: false,
    };
  }

  // updateTheme = themeObj => {
  //   if (themeObj !== this.state.theme) {
  //     this.setState({ theme: themeObj });
  //   }
  // };

  updateIsMobile = () => {
    if (typeof window !== `undefined`) {
      const isMobile = window.innerWidth <= sizes.tablet;
      if (isMobile !== this.state.isMobile) {
        this.setState({
          isMobile,
        });
      }
    }
  };

  updateIsHome = () => {
    const isHome = this.props.pathname === '/';
    if (isHome !== this.state.isHome) {
      this.setState({
        isHome,
      });
    }
  };

  toggleColorMenu = colorMenuOpen => {
    if (colorMenuOpen !== this.state.colorMenuOpen) {
      this.setState({
        colorMenuOpen,
      });
    }
  };

  toggleNavMenu = navMenuOpen => {
    this.setState({
      navMenuOpen,
    });
  };

  handleHeroImg = showHeroImg => {
    this.setState({
      showHeroImg,
    });
  };

  handleFooterLeft = showFooterLeft => {
    this.setState({
      showFooterLeft,
    });
  };

  handleFooterCenter = showFooterCenter => {
    this.setState({
      showFooterCenter,
    });
  };

  handleFooterRight = showFooterRight => {
    this.setState({
      showFooterRight,
    });
  };

  componentDidUpdate(prevProps) {
    // only run if path changes
    if (prevProps.pathname !== this.props.pathname) {
      this.updateIsHome();
    }
    this.updateIsMobile();
  }

  render() {
    return (
      <VisualContext.Provider
        value={{
          // theme: this.state.theme,
          isMobile: this.state.isMobile,
          isHome: this.state.isHome,
          colorMenuOpen: this.state.colorMenuOpen,
          navMenuOpen: this.state.navMenuOpen,
          showHeroImg: this.state.showHeroImg,
          showFooterLeft: this.state.showFooterLeft,
          showFooterCenter: this.state.showFooterCenter,
          showFooterRight: this.state.showFooterRight,
          // updateTheme: this.updateTheme,
          updateIsMobile: this.updateIsMobile,
          updateIsHome: this.updateIsHome,
          toggleColorMenu: this.toggleColorMenu,
          toggleNavMenu: this.toggleNavMenu,
          handleHeroImg: this.handleHeroImg,
          handleFooterLeft: this.handleFooterLeft,
          handleFooterCenter: this.handleFooterCenter,
          handleFooterRight: this.handleFooterRight,
        }}
      >
        {this.props.children}
      </VisualContext.Provider>
    );
  }
}

export const VisualContextConsumer = VisualContext.Consumer;
