import React from 'react';
import styled from 'styled-components';

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
  z-index: 1;
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
  @media (min-width: ${props => props.theme.widthTablet}) {
    flex-direction: row;
    align-items: flex-end;
  }
  @media (min-width: ${props => props.theme.widthDesktop}) {
    margin-left: ${props => props.theme.desktopBodySideMargin};
    margin-right: ${props => props.theme.desktopBodySideMargin};
    width: calc(
      100vw - (${props => props.theme.desktopBodySideMargin} * 2) -
        (${props => props.theme.mainBorderSize} * 2)
    );
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    margin-left: ${props => props.theme.HDBodySideMargin};
    margin-right: ${props => props.theme.HDBodySideMargin};
    width: calc(
      100vw - (${props => props.theme.HDBodySideMargin} * 2) -
        (${props => props.theme.mainBorderSize} * 2)
    );
  }
`;

export default Footer;
