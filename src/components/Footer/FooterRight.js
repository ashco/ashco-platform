import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import { OutboundLink } from 'gatsby-plugin-google-analytics';

import FadeWrapper from '../Animation/Fade';
import GithubIcon from '../Icons/Github';
import LinkedInIcon from '../Icons/LinkedIn';
import TwitterIcon from '../Icons/Twitter';
import ResumeIcon from '../Icons/Resume';

class FooterRight extends PureComponent {
  constructor(props) {
    super(props);
    if (this.props.isMobile) {
      this.props.handleFooterRight(false);
    }
  }

  render() {
    const { showFooterRight } = this.props;

    return (
      <FooterRightWrapper>
        <FadeWrapper visible={showFooterRight}>
          <ul>
            <li>
              <OutboundLink
                href="https://github.com/ashco"
                title="Github"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.linkedin.com/in/ashtonchristie/"
                title="Linkedinn"
                aria-label="Linkedinn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://twitter.com/AshCo_Io"
                title="Twitta"
                aria-label="Twitta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://drive.google.com/file/d/14z2YxB2hESDel8_Ek3oySUdyQRvpTNF5/view"
                title="Resume"
                aria-label="Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ResumeIcon />
              </OutboundLink>
            </li>
          </ul>
        </FadeWrapper>
      </FooterRightWrapper>
    );
  }
}

const FooterRightWrapper = styled.div`
  flex: 100;
  display: flex;
  justify-content: flex-end;
  margin: 0 1.5rem 1.5rem 1.5rem;
  svg {
    height: 3rem;
  }
  ul {
    display: flex;
    li {
      margin: 0 0.75rem;
      &&&&& {
        a {
          display: inline;
          &:hover {
            border-bottom: 4px solid ${({ theme }) => theme.colorPrimary}cc;
          }
        }
      }
    }
  }
  ${media.tablet`
    margin-right: 0;
    svg {
      height: 3rem;
    }
  `};
`;

export default FooterRight;
