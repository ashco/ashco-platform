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
        className={this.state.open && 'open'}
      >
        <span />
        <span />
        <span />
      </MenuIconWrapper>
    );
  }
}

const MenuIconWrapper = styled.div`
  pointer-events: auto;
  margin-right: 1.4rem;
  span {
    background: ${props => props.theme.colorText};
  }
`;

export default MenuIcon;
