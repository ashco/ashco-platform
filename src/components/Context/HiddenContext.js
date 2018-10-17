// HeroContext.js
import React from 'react';

const HiddenContext = React.createContext();

export class HiddenContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeroImg: true,
      showFooterLeft: false,
      showFooterCenter: true,
      showFooterRight: true,
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

  render() {
    return (
      <HiddenContext.Provider
        value={{
          showHeroImg: this.state.showHeroImg,
          showFooterLeft: this.state.showFooterLeft,
          showFooterCenter: this.state.showFooterCenter,
          showFooterRight: this.state.showFooterRight,
          handleHeroImg: this.handleHeroImg,
          handleFooterLeft: this.handleFooterLeft,
          handleFooterCenter: this.handleFooterCenter,
          handleFooterRight: this.handleFooterRight,
        }}
      >
        {this.props.children}
      </HiddenContext.Provider>
    );
  }
}

export const HiddenContextConsumer = HiddenContext.Consumer;
