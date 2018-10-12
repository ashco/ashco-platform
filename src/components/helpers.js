import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitleWrapper = styled.div`
  /* position: absolute;
  top: 5.5vh;
  left: 22vh; */
`;

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
  <PageTitleWrapper>
    <h2>{text}</h2>
  </PageTitleWrapper>
);

export const PageLink = ({ to, text }) => (
  <PageLinkWrapper>
    <Link to={to}>{text}</Link>
  </PageLinkWrapper>
);

// PORTFOLIO
export const PortfolioListingWrapper = styled.article`
  /* width: 440px; */
  /* display: flex;
  justify-content: center; */
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

export const Tag = styled.div`
  background: #2c768e;
  height: 30px;
  width: 60px;
  margin: 10px;
`;

export const TagContainer = styled.div`
  display: flex;
`;
