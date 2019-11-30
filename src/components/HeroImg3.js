import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../config/media';

import AshCoIcon from '../components/Icons/ashco-v2';

class HeroImg3 extends PureComponent {
  render() {
    const { isHome } = this.props;
    return (
      <HeroTextWrapper isHome={isHome}>
        {/* <SelectedIconWrapper> */}
        <AshCoIcon />
        {/* </SelectedIconWrapper> */}
      </HeroTextWrapper>
    );
  }
}


const HeroTextWrapper = styled.div`
  user-select: none;
  position: fixed;
  pointer-events: none;
  bottom: 160px;
  left: 140px;
  svg {
    width: 300px;
    height: auto;
  }
  padding: 20px 30px 15px 22px;
`;

// const
export default HeroImg3;
