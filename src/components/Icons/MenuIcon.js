import React from 'react';
import styled from 'styled-components';
import { VisualContextConsumer } from '../Context/VisualContext';

const MenuIcon = () => (
  <VisualContextConsumer>
    {({ menuOpen, toggleMenu }) => (
      <MenuIconWrapper
        onClick={toggleMenu.bind(null, !menuOpen)}
        id="menu-icon"
        className={menuOpen && 'open'}
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
  margin-right: 1.4rem;
  min-width: 34px;
  span {
    background: ${props => props.theme.colorText};
  }
`;

export default MenuIcon;
