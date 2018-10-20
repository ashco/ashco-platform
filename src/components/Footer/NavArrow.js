import React, { Component } from 'react';
import styled from 'styled-components';
import ArrowDown from '../Icons/ArrowDown';

import { VisualContextConsumer } from '../Context/VisualContext';

class NavArrow extends Component {
  render() {
    return (
      <VisualContextConsumer>
        {({ toggleMenu }) => (
          <NavArrowStyle
            className="animated bounce delay-10s infinite"
            onClick={toggleMenu.bind(null, false)}
            aria-hidden="true"
          >
            <div className="fade-in">
              <ArrowDown />
            </div>
          </NavArrowStyle>
        )}
      </VisualContextConsumer>
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
