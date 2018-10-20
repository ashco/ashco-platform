// HeroContext.js
import React from 'react';
import { sizes } from '../../config/config';

const VisualContext = React.createContext();

export class VisualContextProvider extends React.Component {
  constructor(props) {
    super(props);

    let isMobile;
    if (typeof window !== `undefined`) {
      isMobile = window.innerWidth <= sizes.tablet;
    }

    const isHome = this.props.pathname === '/';

    this.state = {
      isMobile,
      isHome,
      menuOpen: true,
      updateMainElHeight: 640,
      showHeroImg: false,
      showFooterLeft: false,
      showFooterCenter: false,
      showFooterRight: false,
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

  updateMainElHeight = mainElHeight => {
    if (mainElHeight !== this.state.mainElHeight) {
      this.setState({ mainElHeight });
    }
    console.log('trig', this.state.mainElHeight);
  };

  toggleMenu = menuOpen => {
    this.setState({
      menuOpen,
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
          isMobile: this.state.isMobile,
          isHome: this.state.isHome,
          menuOpen: this.state.menuOpen,
          showHeroImg: this.state.showHeroImg,
          showFooterLeft: this.state.showFooterLeft,
          showFooterCenter: this.state.showFooterCenter,
          showFooterRight: this.state.showFooterRight,
          updateIsMobile: this.updateIsMobile,
          updateIsHome: this.updateIsHome,
          toggleMenu: this.toggleMenu,
          updateMainElHeight: this.updateMainElHeight,
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
