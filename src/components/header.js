import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import MenuIcon from './Icons/MenuIcon';
import AshCoIcon from './Icons/AshCo';

class Header extends Component {
  render() {
    const {
      data,
      location,
      title,
      isHome,
      isMobile,
      isMenuOpen,
      toggleMenu,
    } = this.props;
    return (
      <HeaderWrapper
        isHome={isHome}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <HeaderTitle>
            <Link to="/" onClick={toggleMenu.bind(null, 'open')}>
              <AshCoIcon />
            </Link>
            <span>{title}</span>
          </HeaderTitle>
          <NavLinks toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          {isMobile && (
            <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          )}
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

const NavLinks = ({ isMenuOpen, toggleMenu }) => (
  <NavLinksWrapper
    className={isMenuOpen ? 'nav-links-showing' : 'nav-links-hiding'}
  >
    <ul>
      <NavLinkItem to="/#home" toggleMenu={toggleMenu} title="Home" />
      <NavLinkItem to="/about" toggleMenu={toggleMenu} title="About" />
      <NavLinkItem to="/projects" toggleMenu={toggleMenu} title="Projects" />
      <NavLinkItem to="/blog" toggleMenu={toggleMenu} title="Blog" />
      <NavLinkItem to="/contact" toggleMenu={toggleMenu} title="Contact" />
    </ul>
  </NavLinksWrapper>
);

const NavLinkItem = ({ to, title, toggleMenu }) => (
  <NavLinkItemWrapper>
    <Link to={to} onClick={toggleMenu.bind(null, 'closed')}>
      {title}
    </Link>
  </NavLinkItemWrapper>
);

const HeaderWrapper = styled.header`
  position: fixed;
  pointer-events: none;
  width: 100%;
  z-index: 5;
`;

const HeaderContainer = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  height: ${props => props.theme.mobileHeaderHeight};

  @media (min-width: ${props => props.theme.widthTablet}) {
    height: ${props => props.theme.tabletHeaderHeight};
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    max-width: 1600px;
  }
`;

const HeaderTitle = styled.h1`
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  svg {
    height: 5.5rem;
    width: auto;
  }
  a {
    text-decoration: none;
    pointer-events: auto;
  }
  span {
    margin-left: 0.6rem;
  }

  @media (min-width: 800px) {
    font-size: 2.5rem;
  }
  @media (min-width: ${props => props.theme.widthLaptop}) {
    font-size: 3rem;
    svg {
      height: 6.4rem;
    }
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    svg {
      height: 8rem;
    }
  }
`;

const NavLinksWrapper = styled.div`
  font-size: 1.25rem;
  margin: 1.45rem 0.6rem;
  position: absolute;
  right: 0;
  top: 90px;
  transition: 0.3s ease-in-out;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    margin: 1.45rem 1.1rem;
    position: static;
    font-size: 1.5rem;
    ul {
      flex-direction: row;
    }
  }
  @media (min-width: ${props => props.theme.widthDesktop}) {
    font-size: 1.75rem;
  }
`;

const NavLinkItemWrapper = styled.li`
  margin: 0.9rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  a {
    pointer-events: auto;
    text-decoration: none;
    font-weight: 600;
    color: ${props => props.theme.colorText};
    transition: border-bottom 0.2s ease-out;
    &:hover {
      border-bottom: 3px solid ${props => props.theme.colorPrimary}cc;
    }
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    margin: 0 0.9rem;
  }
`;

export default Header;
