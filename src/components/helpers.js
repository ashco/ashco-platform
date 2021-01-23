import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { media } from '../config/media';

export const DefaultContainer = styled.div`
  pointer-events: auto;
  display: grid;
  justify-items: center;
  height: 100%;
  margin: auto;
  gap: 2rem;
  ${media.tablet`
    box-shadow: 0px 0px 60px -25px inset ${({ theme }) => theme.colorPrimary};
  `};
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  padding-bottom: 1.5rem;
  > * {
    text-align: center;
    margin-bottom: 16px;
    :last-child {
      margin-bottom: 0;
    }
  }
  h2 {
    line-height: 1em;
    font-weight: 600;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colorPrimary};
    border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
    padding: 0 1.5rem 0.6rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.15em;
  }
  ${media.tablet`
    h2 {
      font-size: 2rem;
    }
  `};
  ${media.laptop`
    width: 80%;
    padding-bottom: 2rem;
    h2 {
      border-bottom-width: 5px;
      font-size: 2.5rem;
    }
  `};
  ${media.desktop`
    p {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 2.8rem;
    }
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
