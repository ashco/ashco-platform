import React, { Component } from 'react';
import styled from 'styled-components';
import ArrowDown from './ArrowDown';

import { MenuContextConsumer } from '../Context/Context';

class NavArrow extends Component {
  // handleClick = () => {
  //   this.props.toggleMenu('closed');
  //   this.scroll();
  // };

  // scroll = () => {
  //   document
  //     .querySelector('#home')
  //     .scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };

  render() {
    return (
      <MenuContextConsumer>
        {({ toggleMenu }) => (
          <NavArrowStyle
            className="animated bounce delay-5s infinite"
            // onClick={this.handleClick}
            // onClick={this.scroll}
            onClick={toggleMenu.bind(null, 'close')}
          >
            <div className="fade-in">
              <ArrowDown />
            </div>
          </NavArrowStyle>
        )}
      </MenuContextConsumer>
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
