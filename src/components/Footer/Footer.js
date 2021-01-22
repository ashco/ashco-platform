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
            {isHome && <HeroText />}
            <ColorMenu themeObj={themeObj} updateTheme={updateTheme} />
            {/* <FadeWrapper visible={showFooter} homeTimeout={isHome && !isIntroDone}> */}
            <ContactLinks contactInfo={contactInfo} />
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
  /* ${media.tablet`
  `} */
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
    ${media.tablet`
      padding: 0 2rem 2rem;
      flex-direction: row;
      justify-content: space-between;
      max-width: 1200px;
    `}
  }
  /* ${media.tablet`
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
  `}; */
`;

export default Footer;
