import React, { Component } from 'react';
import styled from 'styled-components';

import ArrowDown from '../Icons/ArrowDown';
import BounceWrapper from '../Animation/Bounce';
import InitialFooterCenterFadeInWrapper from '../Animation/InitialFooterCenterFadeIn';

class NavArrow extends Component {
  handleClick = () => {
    this.props.toggleNavMenu(false);
    if (typeof window !== `undefined`) {
      const scrollLength = window.innerHeight;
      window.scrollTo({ top: scrollLength, behavior: 'smooth' });
    }
  };

  render() {
    return (
      <NavArrowStyle onClick={this.handleClick} aria-hidden="true">
        <InitialFooterCenterFadeInWrapper>
          <BounceWrapper>
            <ArrowDown />
          </BounceWrapper>
        </InitialFooterCenterFadeInWrapper>
      </NavArrowStyle>
    );
  }
}
const NavArrowStyle = styled.button`
  pointer-events: auto;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colorText};
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export default NavArrow;
