import React, { Component } from 'react';
import styled from 'styled-components';

class MenuIcon extends Component {
  state = {
    open: false,
  };

  toggleIcon = () => {
    this.setState({
      open: !this.state.open,
    });
    console.log(this.state);
  };

  render() {
    return (
      <MenuIconWrapper
        onClick={this.toggleIcon}
        id="menu-icon"
        className={this.state.open ? 'open' : ''}
      >
        <span />
        <span />
        <span />
      </MenuIconWrapper>
    );
  }
}

const MenuIconWrapper = styled.div`
  /* ::selection {
    background: none;
  } */
  pointer-events: auto;
  span {
    background: ${props => props.theme.colorText};
  }
`;

export default MenuIcon;
