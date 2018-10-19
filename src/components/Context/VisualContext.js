// HeroContext.js
import React from 'react';
import { sizes } from '../../config/media';

const VisualContext = React.createContext();

export class VisualContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      isHome: true,
      menuOpen: true,
      showHeroImg: true,
      showFooterLeft: false,
      showFooterCenter: true,
      showFooterRight: true,
    };
  }

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

  toggleMenu = menuState => {
    if (menuState === 'open') {
      this.setState({
        menuOpen: true,
      });
    } else if (menuState === 'close') {
      this.setState({
        menuOpen: false,
      });
    } else {
      this.setState({
        menuOpen: !this.state.menuOpen,
      });
    }
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

  componentWillMount() {
    this.updateIsMobile();
    this.updateIsHome();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pathname !== this.props.pathname) {
      this.updateIsHome();
    }
    this.updateIsMobile();
  }

  render() {
    return (
      <VisualContext.Provider
        value={{
          isMobile: this.state.isMobile,
          isHome: this.state.isHome,
          menuOpen: this.state.menuOpen,
          showHeroImg: this.state.showHeroImg,
          showFooterLeft: this.state.showFooterLeft,
          showFooterCenter: this.state.showFooterCenter,
          showFooterRight: this.state.showFooterRight,
          updateIsHome: this.updateIsHome,
          toggleMenu: this.toggleMenu,
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