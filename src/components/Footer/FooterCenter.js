import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import NavArrow from './NavArrow';

const FooterCenter = ({ showFooterCenter }) => (
  <FooterCenterWrapper className={showFooterCenter ? 'visible' : 'hidden'}>
    <NavArrow />
  </FooterCenterWrapper>
);

const FooterCenterWrapper = styled.div`
  flex: 1;
  margin: 0;
  position: absolute;
  top: 15vh;
  transition: visibility 0.25s 10s, opacity 0.25s linear;
  /* @media (min-width: ${props => props.theme.widthTablet}) { */
  ${media.tablet`
    position: initial;
    display: flex;
    justify-content: center;
  `}
  /* } */
`;

export default FooterCenter;
