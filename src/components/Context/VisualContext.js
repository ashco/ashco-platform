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
      // showFooterLeft: false,
      // showFooterRight: false,
      showFooter: false,
      isIntroDone: false,
    };
  }

  toggleColorMenu = (colorMenuOpen) => {
    if (colorMenuOpen !== this.state.colorMenuOpen) {
      this.setState({
        colorMenuOpen,
      });
    }
  };

  toggleNavMenu = (navMenuOpen) => {
    if (navMenuOpen !== this.state.navMenuOpen) {
      this.setState({
        navMenuOpen,
      });
    }
  };

  calcHeroImg() {
    const { isHome } = this.props;

    let showHeroImg = isHome;

    return showHeroImg;
  }

  // calcFooterLeft() {
  //   const { innerHeight, scrollLength, isHome } = this.props;

  //   let bodyLength;
  //   if (typeof document !== 'undefined') {
  //     bodyLength =
  //       document.documentElement.scrollHeight || document.body.scrollHeight;
  //   }

  //   const bottomScreenPoint = bodyLength - 10 <= innerHeight + scrollLength;
  //   let showFooterLeft = false;

  //   if (bottomScreenPoint && !isHome) {
  //     showFooterLeft = true;
  //   }

  //   return showFooterLeft;
  // }

  // calcFooterRight() {
  //   const { isMobile, isHome, innerHeight, scrollLength } = this.props;

  //   let bodyLength;
  //   if (typeof document !== 'undefined') {
  //     bodyLength =
  //       document.documentElement.scrollHeight || document.body.scrollHeight;
  //   }
  //   const bottomScreenPoint = bodyLength - 10 <= innerHeight + scrollLength;
  //   let showFooterRight = false;

  //   if (isHome || bottomScreenPoint) {
  //     showFooterRight = true;
  //   }
  //   return showFooterRight;
  // }

  calcFooter() {
    const { isMobile, isHome, innerHeight, scrollLength } = this.props;

    let bodyLength;
    if (typeof document !== 'undefined') {
      bodyLength =
        document.documentElement.scrollHeight || document.body.scrollHeight;
    }
    const bottomScreenPoint = bodyLength - 10 <= innerHeight + scrollLength;
    let showFooter = false;

    if (isHome || bottomScreenPoint) {
      showFooter = true;
    }
    return showFooter;
  }

  handleHeroImg = (showHeroImg) => {
    if (showHeroImg !== this.state.showHeroImg) {
      this.setState({
        showHeroImg,
      });
    }
  };

  // handleFooterLeft = (showFooterLeft) => {
  //   if (showFooterLeft !== this.state.showFooterLeft) {
  //     this.setState({
  //       showFooterLeft,
  //     });
  //   }
  // };

  // handleFooterRight = (showFooterRight) => {
  //   if (showFooterRight !== this.state.showFooterRight) {
  //     this.setState({
  //       showFooterRight,
  //     });
  //   }
  // };

  handleFooter = (showFooter) => {
    if (showFooter !== this.state.showFooter) {
      this.setState({
        showFooter,
      });
    }
  };

  componentDidMount() {
    this.handleHeroImg(this.calcHeroImg());
    // this.handleFooterLeft(this.calcFooterLeft());
    // this.handleFooterRight(this.calcFooterRight());
    this.handleFooter(this.calcFooter());
  }

  componentDidUpdate(prevProps) {
    if (this.props.scrollLength !== prevProps.scrollLength) {
      this.toggleColorMenu(false);
    }
    // Handle navMenu toggle on route change
    if (this.props.pathname !== prevProps.pathname) {
      if (this.props.pathname === '/') {
        this.toggleNavMenu(true);
      } else {
        this.toggleNavMenu(false);
        this.setState({ isIntroDone: true });
      }
    }
    this.handleHeroImg(this.calcHeroImg());
    // this.handleFooterLeft(this.calcFooterLeft());
    // this.handleFooterRight(this.calcFooterRight());
    this.handleFooter(this.calcFooter());
  }

  render() {
    return (
      <VisualContext.Provider
        value={{
          colorMenuOpen: this.state.colorMenuOpen,
          navMenuOpen: this.state.navMenuOpen,
          showHeroImg: this.state.showHeroImg,
          // showFooterLeft: this.state.showFooterLeft,
          // showFooterRight: this.state.showFooterRight,
          showFooter: this.state.showFooter,
          isIntroDone: this.state.isIntroDone,
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
