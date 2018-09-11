import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import githubIcon from '../images/icons/github-brands.svg';
import linkedInIcon from '../images/icons/linkedIn-brands.svg';
import twitterIcon from '../images/icons/twitter-brands.svg';
import resumeIcon from '../images/icons/file-alt-solid.svg';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0.5rem;
`;

const FooterLeft = styled.div``;

const FooterRight = styled.div`
  ul {
    display: flex;
    color: red;
  }
`;

const ContactIcon = styled.img`
  width: 40px;
  height: 40px;
  color: red;
`

const Footer = () => (
  <FooterWrapper>
    <FooterLeft>
      <p>Made with love from AshCo Enterprises</p>
    </FooterLeft>
    <FooterRight>
      <ul>
        <li>Say Hi! - </li>
        <li>
          <a href="https://github.com/ashco" target="_blank">
            <ContactIcon src={githubIcon} alt="Github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ashtonchristie/" target="_blank">
            <ContactIcon src={linkedInIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AshCo_Io" target="_blank">
            <ContactIcon src={twitterIcon} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/14z2YxB2hESDel8_Ek3oySUdyQRvpTNF5/view" target="_blank">
            <ContactIcon src={resumeIcon} alt="Resume" />
          </a>
        </li>
        <li />
      </ul>
    </FooterRight>
  </FooterWrapper>
);

export default Footer;
