import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { LinkIcon } from './helpers';

import githubIcon from '../images/icons/github-brands.svg';
import linkedInIcon from '../images/icons/linkedin-brands.svg';
import twitterIcon from '../images/icons/twitter-brands.svg';
import resumeIcon from '../images/icons/file-alt-solid.svg';

const FooterWrapper = styled.footer`
  pointer-events: none;
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  /* margin: 2rem 0.5rem; */
  a {
    color: ${props => props.theme.colorPrimary};
  }
  div {
    margin: 1.5rem;
  }

  @media (min-width: 720px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const FooterLeft = styled.div`
  line-height: 1.3rem;
  text-align: center;
  font-size: 0.85rem;
  a {
    pointer-events: auto;
  }
  @media (min-width: 720px) {
    text-align: left;
  }
  @media (min-width: 800px) {
    font-size: 1rem;
  }
`;

const FooterRight = styled.div`
  ul {
    display: flex;
    color: ${props => props.theme.colorPrimary};
    li {
      margin: 0 0.75rem;
      a {
        pointer-events: auto;
        &:hover {
          border-bottom: 3px solid ${props => props.theme.colorPrimary};
        }
      }
    }
  }
`;

const Footer = ({ pageScrolled, isHome }) => {
  const year = new Date().getFullYear();
  const showFooter = !isHome || pageScrolled;
  return (
    <FooterWrapper>
      {showFooter ? (
        <FooterLeft>
          <p>© {year} Copyright Ashton Christie. All rights reserved.</p>
          <p>
            This site is built with{' '}
            <a href="https://www.gatsbyjs.org/" target="_blank">
              Gatsbyjs
            </a>{' '}
            and{' '}
            <a href="https://www.contentful.com/" target="_blank">
              Contentful
            </a>
            . The source code is hosted on{' '}
            <a href="https://github.com/ashco/ashco-platform" target="_blank">
              Github
            </a>
            .
          </p>
        </FooterLeft>
      ) : (
        <FooterLeft />
      )}
      <FooterRight>
        <ul>
          <li>
            <a href="https://github.com/ashco" target="_blank">
              <LinkIcon src={githubIcon} alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashtonchristie/"
              target="_blank"
            >
              <LinkIcon src={linkedInIcon} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AshCo_Io" target="_blank">
              <LinkIcon src={twitterIcon} alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/14z2YxB2hESDel8_Ek3oySUdyQRvpTNF5/view"
              target="_blank"
            >
              <LinkIcon src={resumeIcon} alt="Resume" />
            </a>
          </li>
        </ul>
      </FooterRight>
    </FooterWrapper>
  );
};

export default Footer;
