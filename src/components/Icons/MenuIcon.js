import React from 'react';
import styled from 'styled-components';

const MenuIcon = ({ isMenuOpen, toggleMenu }) => {
  return (
    <MenuIconWrapper
      onClick={toggleMenu}
      id="menu-icon"
      className={isMenuOpen && 'open'}
    >
      <span />
      <span />
      <span />
    </MenuIconWrapper>
  );
};
const MenuIconWrapper = styled.div`
  pointer-events: auto;
  margin-right: 1.4rem;
  min-width: 34px;
  span {
    background: ${props => props.theme.colorText};
  }
`;

export default MenuIcon;
