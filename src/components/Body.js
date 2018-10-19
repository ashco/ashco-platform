import React from 'react';

import styled from 'styled-components';
import { sizes, media } from '../config/media';

const Body = ({ children, isMobile, isHome }) => {
  // Calculate top margin

  return <BodyWrapper>{children}</BodyWrapper>;
};

const BodyWrapper = styled.main`
  border-top: 7px solid ${props => props.theme.colorPrimary}80;
  border-bottom: 7px solid ${props => props.theme.colorPrimary}80;
  z-index: 10;
  pointer-events: none;
  position: absolute;
  overflow-y: scroll;
  width: 100vw;
  /* top: 100vh; */
  margin: calc(
      (100vh + ${props => props.theme.mobileHeaderHeight}) +
        (${props => (props.isMenuOpen ? '300px' : '0px')})
    )
    auto ${props => props.theme.mobileFooterHeight} auto;
  ${media.tablet`
    margin: 107vh auto 13vh auto;
  `}
  @media (min-width: ${sizes.laptop}px){
    border-radius: 10px;
    margin-left: 8vw;
    margin-right: 8vw;
    width: 84vw;
    border: 7px solid ${props => props.theme.colorPrimary}80;
  }
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `};
`;

export default Body;
