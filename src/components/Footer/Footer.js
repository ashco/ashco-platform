import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import FooterLeft from './FooterLeft';
import FooterCenter from './FooterCenter';
import FooterRight from './FooterRight';

import { HiddenContextConsumer } from '../Context/HiddenContext';

const Footer = () => (
  <HiddenContextConsumer>
    {({ showFooterLeft, showFooterCenter, showFooterRight }) => (
      <FooterWrapper>
        <FooterLeft showFooterLeft={showFooterLeft} />
        <FooterCenter showFooterCenter={showFooterCenter} />
        <FooterRight showFooterRight={showFooterRight} />
      </FooterWrapper>
    )}
  </HiddenContextConsumer>
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
    color: ${props => props.theme.colorPrimary};
    transition: border-bottom 0.2s ease-out;
  }
  ${media.tablet`
    flex-direction: row;
    align-items: flex-end;
  `}
  ${media.desktop`
    margin-left: 10vw;
    margin-right: 10vw;
    width: 80vw;
  `}
  ${media.hd`
    margin-left: 15vw;
    margin-right: 15vw;
    width: 70vw;
  `}
`;

export default Footer;
