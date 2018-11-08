import React, { Component } from 'react';
import { VisualContextConsumer } from '../Context/VisualContext';

import styled from 'styled-components';
import { media } from '../../config/media';
import { Link } from 'gatsby';

import NavMenuToggleWrapper from '../Animation/NavMenuToggle';

class NavLinks extends Component {
  render() {
    const { navMenuOpen, isMobile } = this.props;
    const isClosed = !navMenuOpen && isMobile;

    console.log(isClosed);
    return (
      <NavLinksWrapper>
        <NavMenuToggleWrapper closed={isClosed}>
          <ul>
            <NavLinkItem to="/about/" title="About" closeMenu />
            <NavLinkItem to="/projects/" title="Projects" closeMenu />
            <NavLinkItem to="/blog/" title="Blog" closeMenu />
            <NavLinkItem to="/contact/" title="Contact" closeMenu />
          </ul>
        </NavMenuToggleWrapper>
      </NavLinksWrapper>
    );
  }
}

class NavLinkItem extends PureComponent {
  render() {
    const { to, title, closeMenu } = this.props;
    return (
      <VisualContextConsumer>
        {({ toggleNavMenu }) => (
          <NavLinkItemWrapper>
            <Link
              to={to}
              onClick={closeMenu && toggleNavMenu.bind(null, false)}
            >
              {title}
            </Link>
          </NavLinkItemWrapper>
        )}
      </VisualContextConsumer>
    );
  }
}

const NavLinksWrapper = styled.div`
  font-size: 1.25rem;
  margin: 1.45rem 0.6rem;
  position: absolute;
  /* right: 0; */
  right: -35vw;
  top: 90px;

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
    color: ${({ theme }) => theme.colorText};
    transition: border-bottom 0.2s ease-out;
    &:hover {
      border-bottom: 3px solid ${({ theme }) => theme.colorPrimary}cc;
    }
  }
  ${media.tablet`
    margin: 0 0.9rem;
  `};
`;

export default NavLinks;
