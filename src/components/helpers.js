import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

export const MainContainer = styled.div`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 70vh;
  height: 530px;
  background-color: ${props => props.theme.colorBackground};
`;

export const ContentWrapper = styled.div`
  max-width: ${props => (props.width ? props.width : '990px')};
  width: 90%;
  margin: 0px auto;
`;

const PageLinkWrapper = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: ${props => props.theme.colorText};
    font-size: 1.5rem;
  }
`;
export const PageLink = ({ to, text }) => (
  <PageLinkWrapper>
    <Link to={to}>{text}</Link>
  </PageLinkWrapper>
);

// PORTFOLIO
export const PortfolioListingWrapper = styled.article`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 2rem 0;
  border-radius: ${props => props.theme.portfolioRadius};
  img {
    display: block;
    transition: 0.5s ease;
    border-radius: ${props => props.theme.portfolioRadius};
  }
  &:hover {
    img {
      opacity: 0.3;
    }
    div {
      opacity: 1;
    }
    transition: 0.5s ease;
    box-shadow: 0px 0px 75px 0px ${props => props.theme.colorPrimary};
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

export const MainTitle = styled.h2`
  margin-bottom: 0.2em;
  font-size: 2.2rem;
  line-height: 1.2em;
  font-weight: 600;
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
