import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { media } from '../../config/media';
import { themeArr } from '../../config/config';

import SelectedIconWrapper from '../Animation/SelectedIcon';
import AshCoIcon from '../Icons/AshCoGradient';
import { Button } from '../../pages/contact';

class HeaderTitle extends Component {
  state = {
    menuActive: true,
  };

  handleUpdateTheme = themeObj => {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('themeObj', JSON.stringify(themeObj));
    }
    this.props.updateTheme(themeObj);
  };

  handleIconClick = () => {
    const {
      pathname,
      toggleColorMenu,
      toggleNavMenu,
      colorMenuOpen,
    } = this.props;

    const isHome = pathname === '/';
    let noScroll;
    if (typeof window !== `undefined`) {
      noScroll = window.pageYOffset === 0;
    }
    // Only show menu text on first click, only open menu if at top of home screen
    if (!colorMenuOpen && noScroll && isHome) {
      toggleColorMenu(true);
      setTimeout(() => {
        this.setState({
          menuActive: false,
        });
      }, 3000);
    } else {
      toggleColorMenu(false);
    }
    toggleNavMenu(true);
  };

  handleButtonClick = themeObj => {
    this.handleUpdateTheme(themeObj);
    setTimeout(() => this.props.toggleColorMenu(false), 500);
  };

  render() {
    const { pathname, isHome, colorMenuOpen } = this.props;
    console.log(pathname);
    let pageTitle = pathname.split('/')[1];
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

    return (
      <HeaderTitleWrapper>
        <Link to="/" aria-label="hero-screen" onClick={this.handleIconClick}>
          <SelectedIconWrapper open={colorMenuOpen}>
            <AshCoIcon />
          </SelectedIconWrapper>
        </Link>
        {isHome ? (
          <>
            <ColorMenuWrapper className={colorMenuOpen && 'color-menu-open'}>
              <ColorMenuMessage className={this.state.menuActive && 'active'}>
                AshCo has options!
              </ColorMenuMessage>
              <ColorMenuButtonsWrapper>
                {themeArr.map((themeObj, i) => {
                  return (
                    <ColorMenuButton
                      onClick={this.handleButtonClick.bind(null, themeObj)}
                      themeObj={themeObj}
                      key={i}
                    />
                  );
                })}
              </ColorMenuButtonsWrapper>
            </ColorMenuWrapper>
          </>
        ) : (
          <h1>{pageTitle}</h1>
        )}
      </HeaderTitleWrapper>
    );
  }
}

const menuFadeInOut = keyframes`
  0%,
  15% {
    opacity: 0;
    transform: scale(0.8, 0);
  }
  25%,
  92% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8, 0);
  }
`;

const HeaderTitleWrapper = styled.div`
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  svg {
    height: 8vh;
    width: auto;
  }
  a {
    text-decoration: none;
    pointer-events: auto;
  }
  h1 {
    /* margin-to : 0.25rem; */
    margin-left: 0.8rem;
  }

  .color-menu-open span.active {
    animation: ${menuFadeInOut} 3s;
  }

  .color-menu-open button {
    pointer-events: auto;
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    transition: 0.2s all cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .color-menu-open button:nth-child(1) {
    transition-delay: 0s;
  }
  .color-menu-open button:nth-child(2) {
    transition-delay: 0.05s;
  }
  .color-menu-open button:nth-child(3) {
    transition-delay: 0.1s;
  }
  .color-menu-open button:nth-child(4) {
    transition-delay: 0.15s;
  }
  .color-menu-open button:nth-child(5) {
    transition-delay: 0.2s;
  }

  ${media.tablet`
    font-size: 2.5rem;
  `};
  ${media.laptop`
    font-size: 3rem;
  `};
`;

// const LinkAnimate = styled(Link)`
//   transform: scale(1);
//   transition: 0.1s all ease-out;
//   &:hover {
//     transform: scale(1.075);
//     transition: 0.15s all ease-in;
//   }
// `;

const ColorMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.1rem;
`;

const ColorMenuMessage = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.25;
  padding-bottom: 0.5rem;
  opacity: 0;
  transform: scale(0.8, 0);
  transition: 0.15s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
`;

const ColorMenuButtonsWrapper = styled.div`
  display: flex;
  button {
    opacity: 0;
    transform: translate3d(-50px, 0, 0) scale(0.5);
    transition: 0.15s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }
  button:hover {
    transform: scale(1.25);
    transition: 0.15s all ease-out;
  }
  button:nth-child(1) {
    transition-delay: 0.2s;
  }
  button:nth-child(2) {
    transition-delay: 0.15s;
  }
  button:nth-child(3) {
    transition-delay: 0.1s;
  }
  button:nth-child(4) {
    transition-delay: 0.05s;
  }
  button:nth-child(5) {
    transition-delay: 0s;
  }
`;

const ColorMenuButton = styled(Button)`
  cursor: pointer;
  border: 4px solid ${props => props.themeObj.colorPrimary};
  border-radius: 50%;
  padding: 0.4rem;
  margin: 0.4rem;
  background: transparent;
  &:hover {
    transform: scale(1.25);
    transition: 0.15s all ease-out;
    border-color: ${props => props.themeObj.colorDarker};
  }
`;

export default HeaderTitle;
