import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Particles from 'react-particles-js';

import logo from '../images/logo-lite.svg';

const HeaderWrapper = styled.div`
  /* background: #606090; */
  overflow: hidden;
  position: ${({ isHome }) => (isHome ? 'fixed' : 'static')};
  height: ${({ isHome }) => (isHome ? '100vh' : '15vh')};
  width: 100vw;
  h1 {
    img {
      height: 5rem;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 1.8rem;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 600;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #d27831;
        }
      }
    }
  }
`;

class Header extends Component {
  // componentDidUpdate = (prevProps, prevState) => {
  //   // console.log(this.props.location.pathname)
  //   const { location } = this.props;
  //   if (location.pathname !== prevProps.location.pathname) {
  //     if (this.props.location.pathname === '/') {
  //       // console.log(this.wrapper)
  //       this.wrapper.animate(
  //         [
  //           { height: '24vh' }, // beginning
  //           { height: '70vh' }, // ending
  //         ],
  //         {
  //           // animation properties
  //           duration: 400,
  //           fill: 'forwards', // stick at end frame
  //           easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
  //           iterations: 1,
  //         }
  //       );
  //     } else {
  //       this.wrapper.animate(
  //         [
  //           { height: '70vh' }, // beginning
  //           { height: '24vh' }, // ending
  //         ],
  //         {
  //           // animation properties
  //           duration: 400,
  //           fill: 'forwards', // stick at end frame
  //           easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
  //           iterations: 1,
  //         }
  //       );
  //     }
  //   }
  // };

  render() {
    const { data, location, title } = this.props;
    return (
      // refs are a way to reference a component
      // sets this.wrapper to dom element
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <h1
            style={{
              margin: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link
              to="/"
              style={{
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="logo" />
            </Link>
            <span style={{ marginLeft: '0.6rem' }}>{title}</span>
          </h1>
          <MainNav>
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
          </MainNav>
        </HeaderContainer>
        <NavLink />
        <Particles
          className="bg-position"
          params={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 4000,
                },
              },
              color: {
                value: '#d27831',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#d27831',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false,
                  mode: 'grab',
                },
                onclick: {
                  enable: false,
                  mode: 'push',
                },
                resize: false,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
          style={{
            backgroundColor: '#222',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
        {/* <Img
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0.8,
          }}
          sizes={data.background.sizes}
        /> */}
      </HeaderWrapper>
    );
  }
}

const NavLinkStyle = styled.div`
  position: absolute;
  top: 95vh;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 3;
  a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
  }
`;

const NavLink = () => {
  return (
    <NavLinkStyle>
      <a href="#home">V{/* <img href=""></img> */}</a>
    </NavLinkStyle>
  );
};

export default Header;
