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

  handleFooter = (showFooter) => {
    if (showFooter !== this.state.showFooter) {
      this.setState({
        showFooter,
      });
    }
  };

  componentDidMount() {
    this.handleHeroImg(this.calcHeroImg());
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
    this.handleFooter(this.calcFooter());
  }

  render() {
    return (
      <VisualContext.Provider
        value={{
          colorMenuOpen: this.state.colorMenuOpen,
          navMenuOpen: this.state.navMenuOpen,
          showHeroImg: this.state.showHeroImg,
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
