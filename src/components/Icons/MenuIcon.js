import React from 'react';
import styled from 'styled-components';
import ContextConsumer from '../../Context';

const MenuIcon = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <MenuIconWrapper
        onClick={() => set({ isMenuOpen: !data.isMenuOpen })}
        id="menu-icon"
        className={data.isMenuOpen && 'open'}
      >
        <span />
        <span />
        <span />
      </MenuIconWrapper>
    )}
  </ContextConsumer>
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
