import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { themeArr } from '../../config/config';
import { Link } from 'gatsby';
import AshCoIcon from '../Icons/AshCoGradient';
import { Button } from '../../pages/contact';
class HeroIcon extends Component {
  // handleUpdateTheme = themeObj => {
  //   if (typeof window !== `undefined`) {
  //     window.localStorage.setItem('themeObj', JSON.stringify(themeObj));
  //   }
  //   this.props.updateTheme(themeObj);
  // };

  // handleClick = () => {
  //   const { toggleColorMenu, toggleNavMenu, colorMenuOpen } = this.props;

  //   toggleColorMenu(!colorMenuOpen);
  //   toggleNavMenu(true);
  // };

  render() {
    return (
      <>
        {/* <LinkHover to="/" aria-label="hero-screen" onClick={this.handleClick}>
          <AshCoIcon />
        </LinkHover>
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
        </ButtonWrapper> */}
      </>
    );
  }
}

// const LinkHover = styled(Link)`
//   transform: scale(1);
//   transition: 0.1s all ease-out;
//   &:hover {
//     transform: scale(1.075);
//     transition: 0.15s all ease-in;
//   }
// `;

// const ButtonWrapper = styled.div`
//   /* pointer-events: auto; */
//   margin-bottom: 0.75rem;
//   margin-left: -5px;
//   > * {
//     opacity: 0;
//     transform: translate3d(-50px, 0, 0) scale(0.5);
//     transition: 0.15s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
//   }
//   button:nth-child(1) {
//     transition-delay: 0.2s;
//   }
//   button:nth-child(2) {
//     transition-delay: 0.15s;
//   }
//   button:nth-child(3) {
//     transition-delay: 0.1s;
//   }
//   button:nth-child(4) {
//     transition-delay: 0.05s;
//   }
//   button:nth-child(5) {
//     transition-delay: 0s;
//   }
// `;

// const ButtonColor = styled(Button)`
//   border: 4px solid ${props => props.themeObj.colorPrimary};
//   border-radius: 50%;
//   /* padding: 0.52rem; */
//   padding: 0.5rem;
//   margin: 0.25rem;
//   background: transparent;
// `;

export default HeroIcon;
