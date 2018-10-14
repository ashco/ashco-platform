import React from 'react';
import styled from 'styled-components';

import { PageLink } from '../helpers';

const AboutSection = () => (
  <AboutWrapper>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto unde,
      incidunt, quasi dolorem corrupti saepe totam voluptate consequuntur
      doloribus assumenda vero doloremque nostrum esse id, ducimus recusandae.
      Tempore, laboriosam exercitationem.
    </p>
    <PageLink to="/about" text="Find out more =>" />
  </AboutWrapper>
);

const AboutWrapper = styled.section`
  border: 1px solid ${props => props.theme.colorPrimary};
`;

export default AboutSection;
