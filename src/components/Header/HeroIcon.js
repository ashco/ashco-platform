import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import AshCoIcon from '../Icons/AshCo';

export const HeroIcon = () => {
  return (
    <HeroIconWrapper>
      <AshCoIcon isAnimating={true} />
    </HeroIconWrapper>
  );
};

// This is where the title logo sizing issue occurs
const HeroIconWrapper = styled.div`
  align-self: start;
  padding-top: 2rem;
  pointer-events: auto;
  cursor: pointer;
  svg {
    height: 7rem;
    width: auto;
  }

  ${media.tablet`
    padding: 2.5rem 0 0 1rem;
    svg {
      height: 8rem;
    }
  `}
  ${media.laptop`
    padding-top: 3rem;
    svg {
      height: 9rem;
    }
  `}
  ${media.hd`
    padding-top: 4rem;
    svg {
      height: 11rem;
    }
  `}
`;
