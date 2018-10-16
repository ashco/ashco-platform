import React, { Component } from 'react';
import styled from 'styled-components';
import ArrowDown from './ArrowDown';

class NavArrow extends Component {
  handleClick = () => {
    this.props.toggleMenu('closed');
    this.scroll();
  };

  scroll() {
    document
      .querySelector('#home')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    return (
      <NavArrowStyle
        className="animated bounce delay-5s infinite"
        onClick={this.handleClick}
      >
        <div className="fade-in">
          <ArrowDown />
        </div>
      </NavArrowStyle>
    );
  }
}

const NavArrowStyle = styled.button`
  pointer-events: auto;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colorText};
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export default NavArrow;
