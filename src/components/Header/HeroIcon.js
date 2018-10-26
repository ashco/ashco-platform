import React, { Component } from 'react';
import styled from 'styled-components';
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
                onClick={this.handleTheme.bind(null, themeObj)}
                themeObj={themeObj}
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

const ButtonColor = styled(Button)`
  position: absolute;
  border: 4px solid ${props => props.themeObj.colorPrimary};
  border-radius: 50%;
  padding: 0.52rem;
  margin: 0.3rem;
  background: transparent;
  z-index: ${props => 10 - props.z};
`;

export default HeroIcon;
