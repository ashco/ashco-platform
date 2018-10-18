import React from 'react';
import styled from 'styled-components';
import { MenuContextConsumer } from '../Context/MenuContext';

const MenuIcon = () => (
  <MenuContextConsumer>
    {({ menuOpen, toggleMenu }) => (
      <MenuIconWrapper
        onClick={toggleMenu}
        id="menu-icon"
        className={menuOpen && 'open'}
      >
        <span />
        <span />
        <span />
      </MenuIconWrapper>
    )}
  </MenuContextConsumer>
);

const MenuIconWrapper = styled.div`
  pointer-events: auto;
  margin-right: 1.4rem;
  min-width: 34px;
  span {
    background: ${props => props.theme.colorText};
  }
`;

export default MenuIcon;
