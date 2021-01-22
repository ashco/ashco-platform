import React from 'react';
import styled from 'styled-components';
import { VisualContextConsumer } from '../Context/VisualContext';

const MenuIcon = () => (
  <VisualContextConsumer>
    {({ navMenuOpen, toggleNavMenu }) => (
      <MenuIconWrapper
        onClick={toggleNavMenu.bind(null, !navMenuOpen)}
        id="menu-icon"
        className={navMenuOpen && 'open'}
      >
        <span />
        <span />
        <span />
      </MenuIconWrapper>
    )}
  </VisualContextConsumer>
);

const MenuIconWrapper = styled.div`
  pointer-events: auto;
  min-width: 34px;
  span {
    background: ${(props) => props.theme.colorText};
  }
`;

export default MenuIcon;
