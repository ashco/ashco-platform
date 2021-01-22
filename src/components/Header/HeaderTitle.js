import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { sizes, media } from '../../config/media';

import AshCoIcon from '../Icons/AshCo';

const HeaderTitle = ({ pathname }) => {
  function getPageTitle() {
    const siteTitles = ['About', 'Projects', 'Blog', 'Contact'];
    let pageTitle = pathname.split('/')[1];
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

    if (siteTitles.some((title) => title === pageTitle)) {
      return pageTitle;
    }
  }

  const pageTitle = getPageTitle();

  return (
    <HeaderTitleWrapper>
      <Link to="/" aria-label="hero-screen">
        <AshCoIcon pathname={pathname} />
      </Link>
      {<h1 className="title">{pageTitle}</h1>}
    </HeaderTitleWrapper>
  );
};

// This is where the title logo sizing issue occurs
const HeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    pointer-events: auto;
  }
  svg {
    height: 9vh;
    width: auto;
  }
  .title {
    font-size: 2rem;
    font-weight: 600;
  }
  ${media.tablet`
    .title {
      font-size: 2.5rem;
    }
  `}
  ${media.laptop`
    .title {
      font-size: 3rem;
    }
  `}
`;

export default HeaderTitle;
