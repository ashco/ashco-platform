import React, { Component } from 'react';
import styled from 'styled-components';
import ArrowDown from '../Icons/ArrowDown';

class NavArrow extends Component {
  handleClick = () => {
    this.props.toggleMenu(false);
    if (typeof window !== `undefined`) {
      const scrollLength = window.innerHeight;
      window.scrollTo({ top: scrollLength, behavior: 'smooth' });
    }
  };

  render() {
    return (
      <NavArrowStyle
        className="animated bounce delay-10s infinite"
        onClick={this.handleClick}
        aria-hidden="true"
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
