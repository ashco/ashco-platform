import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import AshCoIcon from './Icons/AshCo';
import NavArrow from './Icons/NavArrow';

const HeaderWrapper = styled.header`
  position: fixed;
  pointer-events: none;
  width: 100%;
  z-index: 5;
`;

const HeaderContainer = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
  /* padding: 1.45rem 1.0875rem; */
  position: relative;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  height: ${props => props.theme.mobileHeaderHeight};

  @media (min-width: ${props => props.theme.widthTablet}) {
    height: ${props => props.theme.tabletHeaderHeight};
  }
`;

const HeaderTitle = styled.h1`
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  img {
    height: 5rem;
  }
  svg {
    height: 5rem;
    width: auto;
  }
  a {
    /* color:  ${props => props.theme.colorText}; */
    text-decoration: none;
    pointer-events: auto;
  }
  span {
    margin-left: 0.6rem;
  }

  @media (min-width: 800px) {
    font-size: 2.5rem;
  }
  @media (min-height: 800px) {
    img {
      height: 6rem;
    }
  }
  @media (min-width: 1000px) {
    font-size: 3rem;
  }
  /* @media (min-height: 800px) {
    img {
      height: 7rem;
    }
  } */
  @media (min-width: 1400px) {
    font-size: 3.5rem;
  }
  /* @media (min-height: 800px) {
    img {
      height: 8rem;
    } */
  }
  /* @media (min-width: 1800px) {
    font-size: 4rem;
  } */
`;

const NavLinks = styled.div`
  font-size: 1.25rem;
  margin: 1.45rem 1.1rem;
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
          border-bottom: 3px solid ${props => props.theme.colorPrimary};
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.widthTablet}) {
    ul {
      flex-direction: row;

      li {
        margin: 0 0.9rem;
      }
    }
  }
  /* @media (min-width: 800px) {
    font-size: 1.25rem;
  } */
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1400px) {
    font-size: 1.75rem;
  }
  /* @media (min-width: 1800px) {
    ul {
      font-size: 2rem;
    }
  } */
`;

class Header extends Component {
  render() {
    const { data, location, title, isHome } = this.props;
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
        </HeaderContainer>
        {/* {isHome && <NavArrow />} */}
      </HeaderWrapper>
    );
  }
}

export default Header;
