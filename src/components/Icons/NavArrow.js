import React, { Component } from 'react';
import styled from 'styled-components';

const NavArrowStyle = styled.button`
  pointer-events: auto;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colorText};
  background: transparent;
  border: none;
`;

class NavArrow extends Component {
  scroll() {
    document
      .querySelector('#home')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    return <NavArrowStyle onClick={this.scroll}>V</NavArrowStyle>;
  }
}

export default NavArrow;
