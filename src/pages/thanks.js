import React from 'react';
import styled from 'styled-components';

import { DefaultContainer } from '../components/helpers';
import MailSent from '../components/Icons/MailSent';
import { media } from '../config/media';

const Thanks = () => (
  <ThanksContainer>
    <h2>You da best!</h2>
    <MailSent />
    <p>
      Let me take a look at your message and I'll get back to you as soon as I
      can.
    </p>
  </ThanksContainer>
);

const ThanksContainer = styled(DefaultContainer)`
  width: 80%;
  height: 100%;
  margin: 5rem auto;
  align-items: center;
  h2 {
    font-size: 2.6rem;
    font-weight: 600;
    /* margin-bottom: 1rem; */
  }
  svg {
    height: 10rem;
    margin: 2rem auto 1.5rem auto;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
  }
  ${media.laptop`
    width: 65%;
    h2 {
      font-size: 2.8rem;
    }
    svg {
      height: 12rem;
    }
    p {
      font-size: 1.4rem;
    }
  `};
`;

export default Thanks;
