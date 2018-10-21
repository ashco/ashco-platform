import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/config';

import NavArrow from './NavArrow';

const FooterCenter = ({ showFooterCenter, toggleMenu }) => {
  return (
    <FooterCenterWrapper
      className={showFooterCenter ? 'visible-fade' : 'hidden-fade'}
    >
      <NavArrow toggleMenu={toggleMenu} />
    </FooterCenterWrapper>
  );
};

const FooterCenterWrapper = styled.div`
  animation-delay: 10s;
  flex: 1;
  margin: 0;
  position: absolute;
  transition: visibility 0.25s 10s, opacity 0.25s linear;
  ${media.tablet`
    position: initial;
    display: flex;
    justify-content: center;
  `};
`;

export default FooterCenter;
