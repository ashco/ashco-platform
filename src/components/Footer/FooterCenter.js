import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';
import FadeWrapper from '../Animation/Fade';

import NavArrow from './NavArrow';

// const FooterCenter = ({ showFooterCenter, toggleNavMenu }) => {
class FooterCenter extends PureComponent {
  render() {
    const { showFooterCenter, toggleNavMenu } = this.props;
    return (
      <FooterCenterWrapper>
        <FadeWrapper visible={showFooterCenter}>
          <NavArrow toggleNavMenu={toggleNavMenu} />
        </FadeWrapper>
      </FooterCenterWrapper>
    );
  }
}

const FooterCenterWrapper = styled.div`
  flex: 1;
  margin: 0;
  position: absolute;
  ${media.tablet`
    position: initial;
    display: flex;
    justify-content: center;
  `};
`;

export default FooterCenter;
