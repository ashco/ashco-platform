import React from 'react';
import styled from 'styled-components';

import { PageLink } from '../helpers';

const ContactWrapper = styled.section`
  /* background-color: #666; */
  border: 1px solid ${props => props.theme.colorPrimary};
  /* min-height: 12vh; */
`;

const ContactSection = () => (
  <ContactWrapper>
    <h2>Contact</h2>
    <PageLink to="/contact" text="Contact me =>" />
  </ContactWrapper>
);

export default ContactSection;
