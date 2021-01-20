import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

import { VisualContextConsumer } from '../Context/VisualContext';

const Footer = ({ themeObj, isHome, updateTheme, contactInfo }) => (
  <VisualContextConsumer>
    {({ showFooterLeft, showFooterRight, handleFooterRight, isIntroDone }) => (
      <FooterWrapper>
        <FooterLeft
          showFooterLeft={showFooterLeft}
          themeObj={themeObj}
          isHome={isHome}
          updateTheme={updateTheme}
        />
        <FooterRight
          contactInfo={contactInfo}
          showFooterRight={showFooterRight}
          handleFooterRight={handleFooterRight}
          isHome={isHome}
          isIntroDone={isIntroDone}
        />
      </FooterWrapper>
    )}
  </VisualContextConsumer>
);

const FooterWrapper = styled.footer`
  pointer-events: none;
  z-index: 4;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  a {
    pointer-events: auto;
    color: ${({ theme }) => theme.colorPrimary};
    transition: border-bottom 0.2s ease-out;
  }
  ${media.tablet`
    flex-direction: row;
    align-items: flex-end;
    margin-left: 2vw;
    margin-right: 2vw;
    width: 96vw;
  `};
  ${media.laptop`
    margin-left: 8vw;
    margin-right: 8vw;
    width: 84vw;
  `};
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `};
`;

export default Footer;
