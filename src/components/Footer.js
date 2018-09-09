import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      margin: 1rem;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <ul>
      <li>Say Hi! - </li>
      <li>Github</li>
      <li>LinkedIn</li>
      <li>Twitter</li>
    </ul>
  </FooterWrapper>
);

export default Footer;
