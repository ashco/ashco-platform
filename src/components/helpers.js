import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PageTitleWrapper = styled.div``;

const PageLinkWrapper = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 1.5rem;
  }
`;

export const LinkIcon = styled.img`
  width: ${props => (props.size ? props.size : '50px')};
  height: ${props => (props.size ? props.size : '50px')};
`;

export const PageTitle = ({ text }) => (
  <div>
    <h2>{text}</h2>
  </div>
);

export const PageLink = ({ to, text }) => (
  <PageLinkWrapper>
    <Link to={to}>{text}</Link>
  </PageLinkWrapper>
);

// PORTFOLIO
export const PortfolioListingWrapper = styled.article`
  width: 440px;
  position: relative;
  img {
    display: block;
    transition: 0.5s ease;
  }
  &:hover {
    img {
      opacity: 0.3;
    }
  }
  &:hover {
    div {
      opacity: 1;
    }
  }
`;

export const PortfolioHoverArea = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
