// HeroContext.js
import React from 'react';
import { sizes } from '../../config/media';

const HiddenContext = React.createContext();

export class HiddenContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeroImg: false,
      // showFooterLeft: false,
      showFooterLeft: true,
      showFooterCenter: true,
      showFooterRight: true,
      isMobile: false,
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

  componentWillMount() {
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
          handleHeroImg: this.handleHeroImg,
          handleFooterLeft: this.handleFooterLeft,
          handleFooterCenter: this.handleFooterCenter,
          handleFooterRight: this.handleFooterRight,
          updateIsMobile: this.updateIsMobile,
        }}
      >
        {this.props.children}
      </HiddenContext.Provider>
    );
  }
}

export const HiddenContextConsumer = HiddenContext.Consumer;
