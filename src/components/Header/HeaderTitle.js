import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { sizes } from '../../config/media';


import AshCoIcon from '../Icons/AshCo';

const HeaderTitle = ({ isHome, pathname }) => {

  function getPageTitle() {
    const siteTitles = ['About', 'Projects', 'Blog', 'Contact'];
    let pageTitle = pathname.split('/')[1];
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

    if (siteTitles.some(title => title === pageTitle)) {
      return pageTitle;
    }
  }

  const pageTitle = getPageTitle();

  return (
    <HeaderTitleWrapper isHome={isHome}>
      <Link to="/" aria-label="hero-screen">
        <AshCoIcon pathname={pathname} />
      </Link>
      {
        !isHome &&
        <h1>{pageTitle}</h1>
      }
    </HeaderTitleWrapper >
  );
}


const HeaderTitleWrapper = styled.div`
  margin-left: 1.4rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  padding-top: ${({ isHome }) => isHome ? '40px' : '10px'};
  svg {
    height: ${({ isHome }) => isHome ? '120px' : '75px'};
    width: auto;
  }
  a {
    text-decoration: none;
    pointer-events: auto;
  }
  h1 {
    margin-left: 0.8rem;
  }


  @media (min-width: ${sizes.tablet}px) {
    padding-top: ${({ isHome }) => isHome ? '85px' : '10px'};
    font-size: 2.5rem;
    svg {
      height: ${({ isHome }) => isHome ? '140px' : '75px'};
    }
  }
  @media (min-width: ${sizes.laptop}px) {
    svg {
      height: ${({ isHome }) => isHome ? '160px' : '85px'};
    }
    font-size: 3rem;
  }
  @media (min-width: ${sizes.hd}px) {
    svg {
      height: ${({ isHome }) => isHome ? '180px' : '95px'};
    }
  };
`;


export default HeaderTitle;
