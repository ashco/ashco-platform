import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import { media } from '../../config/media';

import { VisualContextConsumer } from '../Context/VisualContext';

import HeaderTitle from './HeaderTitle';
import NavLinks from './NavLinks';
import MenuIcon from '../Icons/MenuIcon';

class Header extends Component {
  render() {
    const { isHome, isMobile, pathname } = this.props;
    return (
      <VisualContextConsumer>
        {({ navMenuOpen }) => (
          <HeaderWrapper
            ref={(wrapper) => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
          >
            <HeaderContainer>
              <HeaderTitle isHome={isHome} pathname={pathname} />
              <NavLinks navMenuOpen={navMenuOpen} isMobile={isMobile} />
              {isMobile && !isHome && <MenuIcon />}
            </HeaderContainer>
          </HeaderWrapper>
        )}
      </VisualContextConsumer>
    );
  }
}

const HeaderWrapper = styled.header`
  position: fixed;
  pointer-events: none;
  width: 100%;
  z-index: 5;
  ${media.laptop`
    width: 84vw;
    margin-left: 8vw;
    margin-right: 8vw;
  `};
`;

const HeaderContainer = styled.nav`
  margin: 0 auto;
  margin-left: 1.5rem;
  max-width: 1200px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  height: 140px;
  ${media.tablet`
    height: 13vh;
  `};
  ${media.hd`
    max-width: 1600px;
  `};
`;

export default Header;
