import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../config/config';

export const DefaultContainer = styled.div`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  max-width: 990px;
  margin: 1.5rem auto;
  /* width: 90%; */
  ${media.tablet`
    box-shadow: 0px 0px 60px -25px inset ${props => props.theme.colorPrimary};
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
    color: ${props => props.theme.colorText};
    font-size: 1.5rem;
  }
`;

export const HeaderTextContainer = styled.div`
  margin-bottom: 0.75rem;
  h2 {
    margin-bottom: 0.25em;
    font-size: 2.2rem;
    line-height: 1em;
    font-weight: 600;
  }
  p {
    font-size: 1.1rem;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0.25em;
  font-size: 2.2rem;
  line-height: 1em;
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
