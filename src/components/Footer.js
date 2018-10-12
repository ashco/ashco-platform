import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { LinkIcon } from './helpers';

import githubIcon from '../images/icons/github-brands.svg';
import linkedInIcon from '../images/icons/linkedin-brands.svg';
import twitterIcon from '../images/icons/twitter-brands.svg';
import resumeIcon from '../images/icons/file-alt-solid.svg';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0.5rem;
  a {
    color: #d27831;
  }
`;

const FooterLeft = styled.div``;

const FooterRight = styled.div`
  ul {
    display: flex;
    color: #d27831;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
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
      <FooterRight>
        <ul>
          <li>Say Hi! - </li>
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
          <li />
        </ul>
      </FooterRight>
    </FooterWrapper>
  );
};

export default Footer;
