import React from 'react';
import styled from 'styled-components';
import Error404 from '../components/Icons/Error404';
import { DefaultContainer } from '../components/helpers';
import { media } from '../config/media';

const NotFoundPage = () => (
  <Error404Container>
    <Error404 />
    <h2>404</h2>
    <p>Oh no, you just fell off the internet...</p>
  </Error404Container>
);

const Error404Container = styled(DefaultContainer)`
  height: 50vh;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 5rem auto;
  h2 {
    font-size: 2.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
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

export default NotFoundPage;
