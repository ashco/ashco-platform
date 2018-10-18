import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../config/media';

import { MenuContextConsumer } from '../Context/MenuContext';

import HeaderTitle from './HeaderTitle';
import MenuIcon from '../Icons/MenuIcon';

import Responsive from 'react-responsive';

// const Desktop = props => <Responsive {...props} minWidth={992} />;
// const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
// const Default = props => <Responsive {...props} minWidth={768} />;

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <MenuContextConsumer>
        {({ menuOpen, toggleMenu }) => (
          <HeaderWrapper
            ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
          >
            <HeaderContainer>
              <HeaderTitle title={title} toggleMenu={toggleMenu} />
              <Mobile>
                {matches => {
                  if (matches) {
                    return (
                      <>
                        <NavLinks menuOpen={menuOpen} />
                        <MenuIcon />
                      </>
                    );
                  } else {
                    return <NavLinks menuOpen={menuOpen} />;
                  }
                }}
              </Mobile>
            </HeaderContainer>
          </HeaderWrapper>
        )}
      </MenuContextConsumer>
    );
  }
}

const NavLinks = ({ menuOpen }) => (
  <NavLinksWrapper
    className={menuOpen ? 'nav-links-showing' : 'nav-links-hiding'}
  >
    <ul>
      <NavLinkItem to="/#home" title="Home" />
      <NavLinkItem to="/about" title="About" />
      <NavLinkItem to="/projects" title="Projects" />
      <NavLinkItem to="/blog" title="Blog" />
      <NavLinkItem to="/contact" title="Contact" />
    </ul>
  </NavLinksWrapper>
);

const NavLinkItem = ({ to, title }) => (
  <MenuContextConsumer>
    {({ toggleMenu }) => (
      <NavLinkItemWrapper>
        <Link to={to} onClick={toggleMenu.bind(null, 'close')}>
          {title}
        </Link>
      </NavLinkItemWrapper>
    )}
  </MenuContextConsumer>
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
  ${media.tablet`
    height: ${props => props.theme.tabletHeaderHeight}vh;
  `};
  ${media.hd`
    max-width: 1600px;
  `};
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
  /* @media (min-width: ${props => props.theme.widthTablet}) { */
  ${media.tablet`
    margin: 1.45rem 1.1rem;
    position: static;
    font-size: 1.5rem;
    ul {
      flex-direction: row;
    }
  `};
  /* } */
  /* @media (min-width: ${props => props.theme.widthDesktop}) { */
  ${media.desktop`
    font-size: 1.75rem;
  `};
  /* } */
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
  ${media.tablet`
    margin: 0 0.9rem;
  `};
`;

export default Header;
