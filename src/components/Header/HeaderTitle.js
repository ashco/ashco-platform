import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../../config/media';

// import AshCoIcon from '../Icons/AshCoGradient';
import HeroIcon from './HeroIcon';

const HeaderTitle = ({ pathname, toggleMenu, updateTheme }) => {
  let pageTitle = pathname.split('/')[1];
  pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

  return (
    <HeaderTitleWrapper>
      {/* <Link
        to="/"
        aria-label="hero-screen"
        onClick={toggleMenu.bind(null, true)}
      > */}
      <HeroIcon toggleMenu={toggleMenu} updateTheme={updateTheme} />
      {/* </Link> */}
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
    height: 8vh;
    width: auto;
  }
  a {
    text-decoration: none;
    pointer-events: auto;
  }
  span {
    margin-left: 0.8rem;
  }

  ${media.tablet`
    font-size: 2.5rem;
  `};
  ${media.laptop`
    font-size: 3rem;
  `};
`;

export default HeaderTitle;
