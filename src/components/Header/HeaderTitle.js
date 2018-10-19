import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../config/media';

import AshCoIcon from '../Icons/AshCo';

const HeaderTitle = ({ title, toggleMenu }) => (
  <HeaderTitleWrapper>
    <Link
      to="/"
      aria-label="hero-screen"
      onClick={toggleMenu.bind(null, 'open')}
    >
      <AshCoIcon />
    </Link>
    <span>{title}</span>
  </HeaderTitleWrapper>
);

const HeaderTitleWrapper = styled.h1`
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  svg {
    height: 5.5rem;
    width: auto;
  }
  a {
    text-decoration: none;
    pointer-events: auto;
  }
  span {
    margin-left: 0.6rem;
  }

  ${media.tablet`
    font-size: 2.5rem;
  `}
  ${media.laptop`
    font-size: 3rem;
    svg {
      height: 6.4rem;
    }
  `}
  ${media.hd`
    svg {
      height: 8rem;
    }
  `}
`;

export default HeaderTitle;
