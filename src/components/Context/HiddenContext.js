// HeroContext.js
import React from 'react';
import { sizes } from '../../config/media';

const HiddenContext = React.createContext();

export class HiddenContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeroImg: true,
      showFooterLeft: false,
      showFooterCenter: true,
      showFooterRight: true,
      isMobile: false,
      isHome: true,
    };
  }

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
      <HiddenContext.Provider
        value={{
          showHeroImg: this.state.showHeroImg,
          showFooterLeft: this.state.showFooterLeft,
          showFooterCenter: this.state.showFooterCenter,
          showFooterRight: this.state.showFooterRight,
          isMobile: this.state.isMobile,
          isHome: this.state.isHome,
          handleHeroImg: this.handleHeroImg,
          handleFooterLeft: this.handleFooterLeft,
          handleFooterCenter: this.handleFooterCenter,
          handleFooterRight: this.handleFooterRight,
          updateIsHome: this.updateIsHome,
        }}
      >
        {this.props.children}
      </HiddenContext.Provider>
    );
  }
}

export const HiddenContextConsumer = HiddenContext.Consumer;
