import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import { HeroText } from '../HeroText';
import { CopyrightText } from './CopyrightText';
import ColorMenu from './ColorMenu';
import ContactLinks from './ContactLinks';
import FadeWrapper from '../Animation/Fade';

import { VisualContextConsumer } from '../Context/VisualContext';

const Footer = ({ themeObj, isHome, updateTheme, contactInfo }) => (
  <VisualContextConsumer>
    {({ isIntroDone, showFooter }) => (
      <FadeWrapper visible={showFooter}>
        <FooterWrapper>
          <div className="footer-container">
            <HeroText isHome={isHome} />
            <ColorMenu themeObj={themeObj} updateTheme={updateTheme} />
            <ContactLinks contactInfo={contactInfo} isIntroDone={isIntroDone} />
            {!isHome && <CopyrightText />}
          </div>
        </FooterWrapper>
      </FadeWrapper>
    )}
  </VisualContextConsumer>
);

const FooterWrapper = styled.footer`
  pointer-events: none;
  z-index: 4;
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    pointer-events: auto;
    color: ${({ theme }) => theme.colorPrimary};
    transition: border-bottom 0.2s ease-out;
  }
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    gap: 2rem;
    width: 100%;
    ${media.tablet`
      padding: 0 2rem 2rem;
      flex-direction: row;
      justify-content: space-between;
      max-width: 1200px;
    `}
    ${media.laptop`
      max-width: 84vw;
    `};
    ${media.hd`
      width: 70vw;
    `};
  }
`;

export default Footer;
