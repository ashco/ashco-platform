import React from 'react';
import { VisualContextConsumer } from '../Context/VisualContext';

import styled from 'styled-components';
import { media } from '../../config/media';
import { Link } from 'gatsby';

const NavLinks = ({ navMenuOpen, isMobile }) => (
  <NavLinksWrapper>
    <ul className={!navMenuOpen && isMobile ? 'nav-menu-closed' : undefined}>
      <NavLinkItem to="/#home" title="Home" />
      <NavLinkItem to="/about/" title="About" />
      <NavLinkItem to="/projects/" title="Projects" />
      <NavLinkItem to="/blog/" title="Blog" />
      <NavLinkItem to="/contact/" title="Contact" />
    </ul>
  </NavLinksWrapper>
);

const NavLinkItem = ({ to, title }) => (
  <VisualContextConsumer>
    {({ toggleNavMenu }) => (
      <NavLinkItemWrapper>
        <Link to={to} onClick={toggleNavMenu.bind(null, false)}>
          {title}
        </Link>
      </NavLinkItemWrapper>
    )}
  </VisualContextConsumer>
);

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
  ul li {
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transition: 0.25s ease-in;
  }
  ul li:nth-child(2) {
    transition-delay: 0.05s;
  }
  ul li:nth-child(3) {
    transition-delay: 0.1s;
  }
  ul li:nth-child(4) {
    transition-delay: 0.15s;
  }
  ul li:nth-child(5) {
    transition-delay: 0.2s;
  }
  ul.nav-menu-closed li {
    transform: translate3d(35vw, 0, 0);
    opacity: 0;
    transition: 0.2s ease-out;
  }
  @media (min-width: 700px) {
    font-size: 1.6rem;
  }
  ${media.tablet`
    margin: -1rem 1.45rem 1.1rem 1.45rem;
    position: static;
    font-size: 1.5rem;
    ul {
      flex-direction: row;
    }
  `};
  ${media.desktop`
    font-size: 1.75rem;
  `};
`;

const NavLinkItemWrapper = styled.li`
  user-select: none;
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

export default NavLinks;
