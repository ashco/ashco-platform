import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0.5rem;
`;

const FooterLeft = styled.div``;

const FooterRight = styled.div`
  ul {
    display: flex;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterLeft>
      <p>Made with love from AshCo Enterprises</p>
    </FooterLeft>
    <FooterRight>
      <ul>
        <li>Say Hi! - </li>
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
      </ul>
    </FooterRight>
  </FooterWrapper>
);

export default Footer;
