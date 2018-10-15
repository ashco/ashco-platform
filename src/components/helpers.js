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
  @media (min-width: ${props => props.theme.widthDesktop}) {
    box-shadow: 0px 0px 60px -25px inset ${props => props.theme.colorPrimary};
  }
`;

export const ContentWrapper = styled.div`
  max-width: ${props => (props.width ? props.width : '990px')};
  width: 90%;
  margin: 0px auto;
  @media (min-width: ${props => props.theme.widthTablet}) {
    margin-top: 2.5rem;
  }
`;

export const PageLink = ({ to, text }) => (
  <PageLinkWrapper>
    <Link to={to}>{text}</Link>
  </PageLinkWrapper>
);

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
