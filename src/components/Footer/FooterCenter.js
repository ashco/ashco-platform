import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import NavArrow from './NavArrow';

const FooterCenter = ({ showFooterCenter, toggleNavMenu }) => {
  return (
    <FooterCenterWrapper className={!showFooterCenter && 'hidden-fade'}>
      <NavArrow toggleNavMenu={toggleNavMenu} />
    </FooterCenterWrapper>
  );
};

const FooterCenterWrapper = styled.div`
  animation-delay: 10s;
  flex: 1;
  margin: 0;
  position: absolute;
  visibility: visible;
  opacity: 1;
  transition: all 2s linear 10s;
  ${media.tablet`
    position: initial;
    display: flex;
    justify-content: center;
  `};
`;

export default FooterCenter;
