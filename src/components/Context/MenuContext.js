// MenuContext.js
import React from 'react';

const MenuContext = React.createContext();

export class MenuContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: true,
    };
  }

  toggleMenu = menuState => {
    if (menuState === 'open') {
      this.setState({
        menuOpen: true,
      });
    } else if (menuState === 'close') {
      this.setState({
        menuOpen: false,
      });
    } else {
      this.setState({
        menuOpen: !this.state.menuOpen,
      });
    }
  };

  render() {
    return (
      <MenuContext.Provider
        value={{ menuOpen: this.state.menuOpen, toggleMenu: this.toggleMenu }}
      >
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}

export const MenuContextConsumer = MenuContext.Consumer;
