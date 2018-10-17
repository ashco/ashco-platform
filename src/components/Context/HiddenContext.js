// HeroContext.js
import React from 'react';

const HiddenContext = React.createContext();

export class HiddenContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeroImg: true,
      showFooterLeft: false,
      showFooterCenter: false,
      showFooterRight: true,
    };
  }

  handleHeroImg = showHeroImg => {
    console.log(showHeroImg);
    this.setState({
      showHeroImg,
    });
  };

  handleFooterLeft = showFooterLeft => {
    console.log(showFooterLeft);
    this.setState({
      showFooterLeft,
    });
  };

  handleFooterCenter = showFooterCenter => {
    console.log(showFooterCenter);
    this.setState({
      showFooterCenter,
    });
  };

  handleFooterRight = showFooterRight => {
    console.log(showFooterRight);
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
