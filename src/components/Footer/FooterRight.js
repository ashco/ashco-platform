import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import GithubIcon from '../Icons/Github';
import LinkedInIcon from '../Icons/LinkedIn';
import TwitterIcon from '../Icons/Twitter';
import ResumeIcon from '../Icons/Resume';

class FooterRight extends Component {
  componentWillMount() {
    if (this.props.isMobile) {
      this.props.handleFooterRight(false);
    }
  }

  render() {
    const { showFooterRight, isMobile } = this.props;
    return (
      <FooterRightWrapper className={!showFooterRight && isMobile && 'hidden'}>
        <ul>
          <li>
            <a
              href="https://github.com/ashco"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashtonchristie/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AshCo_Io"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/14z2YxB2hESDel8_Ek3oySUdyQRvpTNF5/view"
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ResumeIcon />
            </a>
          </li>
        </ul>
      </FooterRightWrapper>
    );
  }
}

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
