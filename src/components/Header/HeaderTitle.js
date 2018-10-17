import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import AshCoIcon from '../Icons/AshCo';

const HeaderTitle = ({ title, toggleMenu }) => (
  <HeaderTitleWrapper>
    <Link to="/" onClick={toggleMenu.bind(null, 'open')}>
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

  @media (min-width: 800px) {
    font-size: 2.5rem;
  }
  @media (min-width: ${props => props.theme.widthLaptop}) {
    font-size: 3rem;
    svg {
      height: 6.4rem;
    }
  }
  @media (min-width: ${props => props.theme.widthHD}) {
    svg {
      height: 8rem;
    }
  }
`;

export default HeaderTitle;
