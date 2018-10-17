// HeroContext.js
import React from 'react';

const HeroImgContext = React.createContext();

export class HeroImgContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeroImg: true,
    };
  }

  handleHeroImg = showHeroImg => {
    console.log(showHeroImg);
    this.setState({
      showHeroImg,
    });
  };

  render() {
    return (
      <HeroImgContext.Provider
        value={{
          showHeroImg: this.state.showHeroImg,
          handleHeroImg: this.handleHeroImg,
        }}
      >
        {this.props.children}
      </HeroImgContext.Provider>
    );
  }
}

export const HeroImgContextConsumer = HeroImgContext.Consumer;
