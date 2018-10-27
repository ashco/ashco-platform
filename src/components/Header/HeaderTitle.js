import React, { Component } from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../config/media';

import { Link } from 'gatsby';
import AshCoIcon from '../Icons/AshCoGradient';
import { Button } from '../../pages/contact';

import { themeArr } from '../../config/config';

// import AshCoIcon from '../Icons/AshCoGradient';
// import HeroIcon from './HeroIcon';

class HeaderTitle extends Component {
  handleUpdateTheme = themeObj => {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('themeObj', JSON.stringify(themeObj));
    }
    this.props.updateTheme(themeObj);
  };

  handleClick = () => {
    const { toggleColorMenu, toggleNavMenu, colorMenuOpen } = this.props;

    toggleColorMenu(!colorMenuOpen);
    toggleNavMenu(true);
  };

  render() {
    const {
      pathname,
      // toggleNavMenu,
      // colorMenuOpen,
      // toggleColorMenu,
      // updateTheme,
      isHome,
    } = this.props;
    let pageTitle = pathname.split('/')[1];
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

    return (
      <HeaderTitleWrapper>
        {/* <HeroIcon
        toggleNavMenu={toggleNavMenu}
        updateTheme={updateTheme}
        toggleColorMenu={toggleColorMenu}
        colorMenuOpen={colorMenuOpen}
      /> */}
        <LinkAnimate to="/" aria-label="hero-screen" onClick={this.handleClick}>
          <AshCoIcon />
        </LinkAnimate>
        {isHome ? (
          <ButtonWrapper
            className={this.props.colorMenuOpen && 'color-menu-open'}
          >
            {themeArr.map((themeObj, i) => {
              return (
                <ButtonColor
                  onClick={this.handleUpdateTheme.bind(null, themeObj)}
                  themeObj={themeObj}
                  key={i}
                />
              );
            })}
          </ButtonWrapper>
        ) : (
          <span>{pageTitle}</span>
        )}
      </HeaderTitleWrapper>
    );
  }
}

const HeaderTitleWrapper = styled.h1`
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
  span {
    margin-left: 0.8rem;
  }

  ${media.tablet`
    font-size: 2.5rem;
  `};
  ${media.laptop`
    font-size: 3rem;
  `};
`;

const LinkAnimate = styled(Link)`
  transform: scale(1);
  transition: 0.1s all ease-out;
  &:hover {
    transform: scale(1.075);
    transition: 0.15s all ease-in;
  }
`;

const ButtonWrapper = styled.div`
  /* pointer-events: auto; */
  margin-bottom: 0.75rem;
  margin-left: -5px;
  > * {
    opacity: 0;
    transform: translate3d(-50px, 0, 0) scale(0.5);
    transition: 0.15s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
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

const ButtonColor = styled(Button)`
  border: 4px solid ${props => props.themeObj.colorPrimary};
  border-radius: 50%;
  /* padding: 0.52rem; */
  padding: 0.5rem;
  margin: 0.25rem;
  background: transparent;
`;

export default HeaderTitle;
