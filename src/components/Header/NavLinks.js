import React, { PureComponent } from 'react';
import { VisualContextConsumer } from '../Context/VisualContext';

import styled from 'styled-components';
import { media } from '../../config/media';
import { Link } from 'gatsby';

import NavMenuToggleWrapper from '../Animation/NavMenuToggle';

const NavLinks = ({ navMenuOpen, isMobile }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(navMenuOpen || !isMobile);
  }, [navMenuOpen, isMobile]);

  return (
    <NavLinksWrapper>
      <NavMenuToggleWrapper isOpen={isOpen}>
        <ul>
          <NavLinkItem to="/about/" title="About" closeMenu />
          <NavLinkItem to="/projects/" title="Projects" closeMenu />
          <NavLinkItem to="/contact/" title="Contact" closeMenu />
        </ul>
      </NavMenuToggleWrapper>
    </NavLinksWrapper>
  );
};

const NavLinkItem = ({ to, title, closeMenu }) => {
  return (
    <VisualContextConsumer>
      {({ toggleNavMenu }) => (
        <NavLinkItemWrapper>
          <Link to={to} onClick={closeMenu && toggleNavMenu.bind(null, false)}>
            {title}
          </Link>
        </NavLinkItemWrapper>
      )}
    </VisualContextConsumer>
  );
};

const NavLinksWrapper = styled.div`
  font-size: 1.5rem;
  margin: 1.5rem 2rem;
  position: absolute;
  right: 0;
  top: 90px;
  ul {
    list-style: none;
    display: grid;
    justify-items: flex-end;
    gap: 2rem;
  }
  ${media.tablet`
    margin: 0 1rem;
    position: static;
    font-size: 1.5rem;
    ul {
      grid-auto-flow: column;
    }
  `};
  ${media.desktop`
    font-size: 1.75rem;
  `};
`;

const NavLinkItemWrapper = styled.li`
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  a {
    pointer-events: auto;
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colorText};
    transition: border-bottom 0.2s ease-out;
    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colorPrimary}cc;
    }
  }
`;

export default NavLinks;
