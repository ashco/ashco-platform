import React, { Component } from 'react';
import styled from 'styled-components';
import ArrowDown from '../Icons/ArrowDown';

import { MenuContextConsumer } from '../Context/MenuContext';

class NavArrow extends Component {
  render() {
    return (
      <MenuContextConsumer>
        {({ toggleMenu }) => (
          <NavArrowStyle
            className="animated bounce delay-5s infinite"
            onClick={toggleMenu.bind(null, 'close')}
            aria-hidden="true"
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
