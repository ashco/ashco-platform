import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { PageLink } from '../helpers';

const AboutWrapper = styled.section`
  background-color: #333;
  /* min-height: 20vh; */
`;

const AboutSection = () => (
  <AboutWrapper>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto unde,
      incidunt, quasi dolorem corrupti saepe totam voluptate consequuntur
      doloribus assumenda vero doloremque nostrum esse id, ducimus recusandae.
      Tempore, laboriosam exercitationem.
    </p>
    <PageLink to="/about" text="Find out more =>" />
    {/* <LinkContainer>

      <Link to="/about">Find out more =></Link>
    </LinkContainer> */}
  </AboutWrapper>
);

export default AboutSection;
