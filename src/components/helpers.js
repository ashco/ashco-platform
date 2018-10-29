import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../config/media';

export const DefaultContainer = styled.div`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  max-width: 990px;
  margin: 1.5rem auto;
  ${media.tablet`
    box-shadow: 0px 0px 60px -25px inset ${({ theme }) => theme.colorPrimary};
  `};
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
    color: ${({ theme }) => theme.colorText};
    font-size: 1.5rem;
  }
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
