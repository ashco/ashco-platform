// HeroContext.js
import React, { Component } from 'react';

const VisualContext = React.createContext();

export class VisualContextProvider extends Component {
  constructor(props) {
    super(props);

    let navMenuOpen = false;
    if (this.props.isHome) {
      navMenuOpen = true;
    }

    this.state = {
      navMenuOpen,
      colorMenuOpen: false,
      showHeroImg: false,
      showFooterLeft: false,
      showFooterCenter: false,
      showFooterRight: false,
    };
  }

  toggleColorMenu = colorMenuOpen => {
    if (colorMenuOpen !== this.state.colorMenuOpen) {
      this.setState({
        colorMenuOpen,
      });
    }
  };

  toggleNavMenu = navMenuOpen => {
    if (navMenuOpen !== this.state.navMenuOpen) {
      this.setState({
        navMenuOpen,
      });
    }
  };

  calcHeroImg() {
    const { isMobile, isHome, innerHeight, scrollLength } = this.props;
    const mobileMarginTop = 140;
    const midScreenPoint = (innerHeight + mobileMarginTop) * 0.7;
    let showHeroImg = false;

    if (isMobile) {
      if (!isHome) {
        showHeroImg = scrollLength < 50 && this.state.navMenuOpen;
      } else {
        showHeroImg = scrollLength < midScreenPoint;
      }
    } else {
      if (isHome) {
        showHeroImg = true;
      }
    }
    return showHeroImg;
  }

  calcFooterLeft() {
    const { isMobile, innerHeight, scrollLength, isHome } = this.props;

    let bodyLength;
    if (typeof document !== 'undefined') {
      bodyLength =
        document.documentElement.scrollHeight || document.body.scrollHeight;
    }

    const bottomScreenPoint = bodyLength - 10 <= innerHeight + scrollLength;
    let showFooterLeft = false;

    if (bottomScreenPoint && !isHome) {
      showFooterLeft = true;
    }

    return showFooterLeft;
  }

  calcFooterCenter() {
    const { isHome, scrollLength } = this.props;

    let showFooterCenter = false;
    if (isHome) {
      showFooterCenter = scrollLength <= 50;
    }
    return showFooterCenter;
  }

  calcFooterRight() {
    const { isMobile, isHome, innerHeight, scrollLength } = this.props;

    let bodyLength;
    if (typeof document !== 'undefined') {
      bodyLength =
        document.documentElement.scrollHeight || document.body.scrollHeight;
    }
    const bottomScreenPoint = bodyLength - 10 <= innerHeight + scrollLength;
    let showFooterRight = false;

    if (isMobile) {
      if (!isHome && bottomScreenPoint) {
        showFooterRight = true;
      }
    } else {
      if (isHome) {
        showFooterRight = true;
      } else if (bottomScreenPoint) {
        showFooterRight = true;
      }
    }
    return showFooterRight;
  }

  handleHeroImg = showHeroImg => {
    if (showHeroImg !== this.state.showHeroImg) {
      this.setState({
        showHeroImg,
      });
    }
  };

  handleFooterLeft = showFooterLeft => {
    if (showFooterLeft !== this.state.showFooterLeft) {
      this.setState({
        showFooterLeft,
      });
    }
  };

  handleFooterCenter = showFooterCenter => {
    if (showFooterCenter !== this.state.showFooterCenter) {
      this.setState({
        showFooterCenter,
      });
    }
  };

  handleFooterRight = showFooterRight => {
    if (showFooterRight !== this.state.showFooterRight) {
      this.setState({
        showFooterRight,
      });
    }
  };

  componentDidMount() {
    this.handleHeroImg(this.calcHeroImg());
    this.handleFooterLeft(this.calcFooterLeft());
    this.handleFooterCenter(this.calcFooterCenter());
    this.handleFooterRight(this.calcFooterRight());
  }

  componentDidUpdate(nextProps) {
    if (this.props.scrollLength !== nextProps.scrollLength) {
      this.toggleColorMenu(false);
    }
    this.handleHeroImg(this.calcHeroImg());
    this.handleFooterLeft(this.calcFooterLeft());
    this.handleFooterCenter(this.calcFooterCenter());
    this.handleFooterRight(this.calcFooterRight());
  }

  render() {
    return (
      <VisualContext.Provider
        value={{
          colorMenuOpen: this.state.colorMenuOpen,
          navMenuOpen: this.state.navMenuOpen,
          showHeroImg: this.state.showHeroImg,
          showFooterLeft: this.state.showFooterLeft,
          showFooterCenter: this.state.showFooterCenter,
          showFooterRight: this.state.showFooterRight,
          toggleColorMenu: this.toggleColorMenu,
          toggleNavMenu: this.toggleNavMenu,
        }}
      >
        {this.props.children}
      </VisualContext.Provider>
    );
  }
}

export const VisualContextConsumer = VisualContext.Consumer;
