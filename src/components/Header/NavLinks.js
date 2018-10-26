import React from 'react';

import styled from 'styled-components';
import { media } from '../../config/media';
import { Link } from 'gatsby';

const NavLinks = ({ menuOpen }) => (
  <NavLinksWrapper
    className={menuOpen ? 'nav-links-showing' : 'nav-links-hiding'}
  >
    <ul>
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
    {({ toggleMenu }) => (
      <NavLinkItemWrapper>
        <Link to={to} onClick={toggleMenu.bind(null, false)}>
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
      /* border-bottom: 3px solid;
      border-image: linear-gradient(135deg, ${props =>
        props.theme.colorPrimary} 0%,${props =>
  props.theme.colorSecondary} 100%);
      border-image-slice: 1; */
    }
  }
  ${media.tablet`
    margin: 0 0.9rem;
  `};
`;

export default NavLinks;
