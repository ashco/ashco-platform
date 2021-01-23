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
      showFooter: false,
      // isAnimating: false,
      isAnimating: true,
    };
  }

  toggleNavMenu = (navMenuOpen) => {
    if (navMenuOpen !== this.state.navMenuOpen) {
      this.setState({
        navMenuOpen,
      });
    }
  };

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

  handleFooter = (showFooter) => {
    if (showFooter !== this.state.showFooter) {
      this.setState({
        showFooter,
      });
    }
  };

  componentDidMount() {
    if (this.props.pathname !== '/') {
      this.setState({ isAnimating: false });
    }

    this.handleFooter(this.calcFooter());
  }

  componentDidUpdate(prevProps) {
    if (this.props.pathname !== prevProps.pathname) {
      // nav menu logic
      if (this.props.pathname === '/') {
        this.toggleNavMenu(true);
      } else {
        this.toggleNavMenu(false);
      }
      // isAnimating logic
      if (this.props.pathname !== '/') {
        this.setState({ isAnimating: false });
      }
    }

    // TODO - Fix this to not trigger so much
    this.handleFooter(this.calcFooter());
  }

  render() {
    return (
      <VisualContext.Provider
        value={{
          navMenuOpen: this.state.navMenuOpen,
          showFooter: this.state.showFooter,
          isAnimating: this.state.isAnimating,
          toggleNavMenu: this.toggleNavMenu,
        }}
      >
        {this.props.children}
      </VisualContext.Provider>
    );
  }
}

export const VisualContextConsumer = VisualContext.Consumer;
