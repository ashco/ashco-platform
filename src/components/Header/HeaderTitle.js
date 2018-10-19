import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../config/media';

import AshCoIcon from '../Icons/AshCo';

const HeaderTitle = ({ pathname, toggleMenu }) => {
  let pageTitle = pathname.split('/')[1];
  pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

  return (
    <HeaderTitleWrapper>
      <Link
        to="/"
        aria-label="hero-screen"
        onClick={toggleMenu.bind(null, 'open')}
      >
        <AshCoIcon />
      </Link>
      <span>{pageTitle}</span>
    </HeaderTitleWrapper>
  );
};

const HeaderTitleWrapper = styled.h1`
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  svg {
    height: 11vh;
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
      svg {
        height: 9.5vh;
      }
  `}
  ${media.laptop`
    font-size: 3rem;
    svg {
      height: 10.5vh;
    }
  `}
  /* ${media.hd`
    svg {
      height: 11.5vh;
    }
  `} */
`;

export default HeaderTitle;
