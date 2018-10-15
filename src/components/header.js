import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import MenuIcon from './Icons/MenuIcon';
import AshCoIcon from './Icons/AshCo';

class Header extends Component {
  render() {
    const { data, location, title, isHome, isMobile } = this.props;
    return (
      // refs are a way to reference a component
      // sets this.wrapper to dom element
      <HeaderWrapper
        isHome={isHome}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <HeaderTitle>
            <Link to="/">
              <AshCoIcon />
            </Link>
            <span>{title}</span>
          </HeaderTitle>
          <NavLinks>
            <ul>
              <li>
                <Link to="/#home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </NavLinks>
          {isMobile && <MenuIcon />}
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

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
  /* @media (min-width: ${props => props.theme.widthDesktop}) {
  } */
  @media (min-width: ${props => props.theme.widthHD}) {
    svg {
      height: 8rem;
    }
  }
`;

const NavLinks = styled.div`
  font-size: 1.25rem;
  margin: 1.45rem 1.1rem;
  position: absolute;
  right: 0;
  top: 80px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    li {
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
    }
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    position: static;
    font-size: 1.5rem;
    ul {
      flex-direction: row;

      li {
        margin: 0 0.9rem;
      }
    }
  }
  @media (min-width: ${props => props.theme.widthDesktop}) {
    font-size: 1.75rem;
  }
`;

export default Header;
