import React from 'react';
import styled from 'styled-components';
import { media } from '../../config/media';

import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { useSpring, animated } from 'react-spring';

import GithubIcon from '../Icons/Github';
import LinkedInIcon from '../Icons/LinkedIn';
import ResumeIcon from '../Icons/Resume';

const ContactLinks = ({ contactInfo, isAnimating }) => {
  const introSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 4000,
  });

  return (
    <ContactLinksContainer style={isAnimating ? introSpring : {}}>
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
};

const ContactLinksContainer = styled(animated.ul)`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-content: space-evenly;
  a {
    display: inline;
    &:hover {
      border-bottom: 4px solid ${({ theme }) => theme.colorPrimary}cc;
    }
  }
  ${media.tablet`
    order: 3;
    justify-content: center;
  `}
`;

export default ContactLinks;
