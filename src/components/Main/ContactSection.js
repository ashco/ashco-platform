import React from 'react';
import styled from 'styled-components';

import { PageLink } from '../helpers';

const ContactSection = () => (
  <ContactWrapper>
    <h2>Contact</h2>
    <PageLink to="/contact" text="Contact me =>" />
  </ContactWrapper>
);

const ContactWrapper = styled.section`
  /* border: 1px solid ${props => props.theme.colorPrimary}; */
`;

export default ContactSection;
