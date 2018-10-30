import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { navigate } from 'gatsby';

import { DefaultContainer } from '../components/helpers';
import MailSent from '../components/Icons/MailSent';
import { media } from '../config/media';

class Thanks extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      countDown: 5,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ countDown: this.state.countDown - 1 });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.countDown === 0) {
      navigate('/');
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <ThanksContainer>
        <MailSent />
        <h2>You da best!</h2>
        <p>Redirecting in.. {this.state.countDown}</p>
      </ThanksContainer>
    );
  }
}

const growUpAnimation = keyframes`
  0% {
    transform: translate3d(0,0,0) scale(1);
  }
  100% {
    transform: translate3d(0, -70px, 0) scale(1.25);
  }
`;

const ThanksContainer = styled(DefaultContainer)`
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
    transform: translate3d(0, -70px, 0) scale(1.25);
    animation: ${growUpAnimation} 5s ease-out;
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
