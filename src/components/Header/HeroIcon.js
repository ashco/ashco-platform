import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { themeArr } from '../../config/config';
import { Link } from 'gatsby';
import AshCoIcon from '../Icons/AshCoGradient';
import { Button } from '../../pages/contact';
class HeroIcon extends Component {
  state = {
    colorsOpen: false,
  };

  handleTheme(themeObj) {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('themeObj', JSON.stringify(themeObj));
    }
  }

  handleClick = () => {
    // console.log(this.props);
    this.props.toggleMenu(true);
    this.toggleColors();
  };

  toggleColors = () => {
    this.setState({
      colorsOpen: !this.state.colorsOpen,
    });
  };

  render() {
    return (
      <>
        <Link
          to="/"
          aria-label="hero-screen"
          // onClick={this.props.toggleMenu.bind(null, true)}
          onClick={this.handleClick}
        >
          <AshCoIcon />
        </Link>
        <ButtonWrapper>
          {themeArr.map((themeObj, i) => {
            return (
              <ButtonColor
                className={this.state.colorsOpen && 'colors-open'}
                onClick={this.handleTheme.bind(null, themeObj)}
                themeObj={themeObj}
                open={this.state.colorsOpen}
                z={i}
                key={i}
              />
            );
          })}
        </ButtonWrapper>
      </>
    );
  }
}

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 5.2rem;
  left: 2.6rem;
  /* display: flex; */
  /* flex-direction: column; */
  pointer-events: auto;
  /* margin-top: 0.6rem; */
`;
const openAnimation = keyframes`
  from {
    left: 0;
  }
  to {
    left: 8rem;
  }
`;

const ButtonColor = styled(Button)`
  position: absolute;
  border: 4px solid ${props => props.themeObj.colorPrimary};
  border-radius: 50%;
  padding: 0.52rem;
  margin: 0.3rem;
  background: transparent;
  z-index: ${props => 10 - props.z};
  animation: ${openAnimation} 2s cubic-bezier(0, 0.38, 0.55, 0.96) 1;
`;

// Create the keyframes

// Here we create a component that will rotate everything we pass in over two seconds
const OpenUp = styled.div`
  /* display: inline-block; */

  /* padding: 2rem 1rem;
  font-size: 1.2rem; */
`;

export default HeroIcon;
