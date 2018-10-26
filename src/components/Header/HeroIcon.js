import React, { Component } from 'react';
import styled from 'styled-components';
import { themeArr } from '../../config/config';
import { Link } from 'gatsby';
import AshCoIcon from '../Icons/AshCoGradient';
import { Button } from '../../pages/contact';
class HeroIcon extends Component {
  handleTheme(themeObj) {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('themeObj', JSON.stringify(themeObj));
    }
  }

  render() {
    return (
      <>
        <Link
          to="/"
          aria-label="hero-screen"
          onClick={this.props.toggleMenu.bind(null, true)}
        >
          <AshCoIcon />
        </Link>
        <ButtonWrapper>
          {themeArr.map((themeObj, i) => {
            return (
              <ButtonColor
                onClick={this.handleTheme.bind(null, themeObj)}
                themeObj={themeObj}
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
  display: flex;
  /* flex-direction: column; */
  pointer-events: auto;
  margin-top: 0.45rem;
`;

const ButtonColor = styled(Button)`
  border: 4px solid ${props => props.themeObj.colorPrimary};
  border-radius: 50%;
  padding: 0.5rem;
  margin: 0.3rem;
`;

export default HeroIcon;
