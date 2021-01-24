import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import { HeroText } from '../HeroText';
import { CopyrightText } from './CopyrightText';
import ColorMenu from './ColorMenu';
import ContactLinks from './ContactLinks';
import FadeWrapper from '../Animation/Fade';

import { VisualContextConsumer } from '../Context/VisualContext';

const Footer = ({ themeobj, isHome, updateTheme, contactInfo }) => (
  <VisualContextConsumer>
    {({ isAnimating, showFooter }) => (
      <FadeWrapper visible={showFooter}>
        <FooterWrapper>
          <div className="footer-container">
            <HeroText isHome={isHome} isAnimating={isAnimating} />
            <ColorMenu
              themeobj={themeobj}
              updateTheme={updateTheme}
              isAnimating={isAnimating}
            />
            <ContactLinks contactInfo={contactInfo} isAnimating={isAnimating} />
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
    display: grid;
    /* justify-content: center; */
    align-items: center;
    padding: 0 2rem 2rem;
    gap: 2rem;
    width: 100%;
    ${media.tablet`
      grid-auto-flow: column;
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
