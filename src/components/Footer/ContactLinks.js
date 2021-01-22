import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import { OutboundLink } from 'gatsby-plugin-google-analytics';

import FadeWrapper from '../Animation/Fade';
import GithubIcon from '../Icons/Github';
import LinkedInIcon from '../Icons/LinkedIn';
import ResumeIcon from '../Icons/Resume';

class ContactLinks extends PureComponent {
  render() {
    const { showFooter, contactInfo, isHome, isIntroDone } = this.props;

    return (
      // <ContactLinksWrapper>
      //   <FadeWrapper visible={showFooter} homeTimeout={isHome && !isIntroDone}>
      <ContactLinksContainer>
        <li>
          <OutboundLink
            href={contactInfo.githubUrl}
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
            href={contactInfo.linkedInUrl}
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
            href={contactInfo.resumeUrl}
            title="Resume"
            aria-label="Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ResumeIcon />
          </OutboundLink>
        </li>
      </ContactLinksContainer>
    );
  }
}

const ContactLinksContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    display: inline;
    &:hover {
      border-bottom: 4px solid ${({ theme }) => theme.colorPrimary}cc;
    }
  }
  ${media.tablet`
    order: 3;
  `}
`;

export default ContactLinks;
