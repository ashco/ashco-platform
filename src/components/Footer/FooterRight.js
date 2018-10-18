import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import GithubIcon from '../Icons/Github';
import LinkedInIcon from '../Icons/LinkedIn';
import TwitterIcon from '../Icons/Twitter';
import ResumeIcon from '../Icons/Resume';

const FooterRight = ({ showFooterRight }) => (
  <FooterRightWrapper
    className={showFooterRight ? 'visible-fade' : 'hidden-fade'}
  >
    <ul>
      <li>
        <a
          href="https://github.com/ashco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ashtonchristie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/AshCo_Io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/14z2YxB2hESDel8_Ek3oySUdyQRvpTNF5/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ResumeIcon />
        </a>
      </li>
    </ul>
  </FooterRightWrapper>
);

const FooterRightWrapper = styled.div`
  flex: 100;
  display: flex;
  justify-content: flex-end;
  margin: 0 1.5rem 1.5rem 1.5rem;
  ul {
    display: flex;
    li {
      margin: 0 0.75rem;
      a {
        &:hover {
          border-bottom: 4px solid ${props => props.theme.colorPrimary}cc;
        }
      }
    }
  }
  ${media.tablet`
    margin-right: 0;
  `};
`;

export default FooterRight;
