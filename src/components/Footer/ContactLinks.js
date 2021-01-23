import React, { PureComponent } from 'react';
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
  // const fadeIn = useSpring({
  // opacity: 1,
  // from: { opacity: 0 },
  // });

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
  /* align-items: center; */
  justify-content: center;
  a {
    display: inline;
    &:hover {
      border-bottom: 4px solid ${({ theme }) => theme.colorPrimary}cc;
    }
  }
  /* svg {
    width: 75%;
  } */
  ${media.tablet`
    order: 3;
  `}
`;

export default ContactLinks;
