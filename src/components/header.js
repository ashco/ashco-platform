import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

// import ParticleBG from './ParticleBG';
import NavArrow from './NavArrow';

import logo from '../images/logo-lite.svg';

const HeaderWrapper = styled.header`
  /* overflow: hidden; */
  position: fixed;
  /* height: 100vh; */
  width: 100vw;
`;

const HeaderContainer = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  img {
    height: 5rem;
  }
  a {
    color: #fff;
    text-decoration: none;
    pointer-events: auto;
  }
  span {
    margin-left: 0.6rem;
  }

  @media (min-width: 800px) {
    font-size: 2.5rem;
    img {
      height: 6rem;
    }
  }
  @media (min-width: 1000px) {
    font-size: 3rem;
    img {
      height: 7rem;
    }
  }
  @media (min-width: 1400px) {
    font-size: 3.5rem;
    img {
      height: 8rem;
    }
  }
  /* @media (min-width: 1800px) {
    font-size: 4rem;
  } */
`;

const NavLinks = styled.div`
  font-size: 1rem;
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 0.9rem;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        pointer-events: auto;
        text-decoration: none;
        font-weight: 600;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #d27831;
        }
      }
    }
  }
  @media (min-width: 800px) {
    font-size: 1.25rem;
  }
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
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps);
  //   console.log(this.props);
  //   return nextProps !== this.props;
  //   // return !equals(nextProps, this.props); // equals() is your implementation
  // }

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
              <img src={logo} alt="logo" />
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
        {isHome && <NavArrow />}
        {/* <ParticleBG /> */}
      </HeaderWrapper>
    );
  }
}

export default Header;
