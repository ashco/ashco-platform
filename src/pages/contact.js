import React, { Component } from 'react';
import styled from 'styled-components';
import { sizes, media } from '../config/config';

import { DefaultContainer } from '../components/helpers';

// const ContactPage = () => {
class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    disabled: true,
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleValidation() {
    const { name, email, message } = this.state;
    const formFilled = name !== '' && email !== '' && message !== '';

    if (formFilled && this.state.disabled === true) {
      this.setState({
        disabled: false,
      });
    } else if (!formFilled && this.state.disabled === false) {
      this.setState({
        disabled: true,
      });
    }
  }

  componentDidUpdate() {
    this.handleValidation();
  }

  render() {
    return (
      <ContactContainer>
        <HeaderTextContainer>
          <h2>Wanna chat?</h2>
          <p>
            Fill out this form and I'll get back to you soon as life lets me.
          </p>
        </HeaderTextContainer>
        <FormWrapper
          onSubmit={this.validateForm}
          name="contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <FormInputWrapper>
            <label htmlFor="name">Your name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor="email">Your email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor="message">Your message:</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </FormInputWrapper>
          <div>
            <Button type="submit" disabled={this.state.disabled}>
              Send
            </Button>
          </div>
        </FormWrapper>
      </ContactContainer>
    );
  }
}

const ContactContainer = styled(DefaultContainer)`
  max-width: 660px;
  width: 90%;
  @media (min-width: 750px) {
    margin: 3rem auto;
  }
`;

const HeaderTextContainer = styled.div`
  margin-bottom: 0.75rem;
  h2 {
    margin-bottom: 0.35em;
    font-size: 2.2rem;
    line-height: 1em;
    font-weight: 600;
  }
  p {
    font-size: 1.1rem;
  }
  ${media.desktop`
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  `};
  ${media.desktop`
    h2 {
      font-size: 2.9rem;
    }
    p {
      font-size: 1.4rem;
    }
  `};
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  > p {
    font-size: 1.1rem;
  }
  label {
    color: ${props => props.theme.colorText};
    padding-bottom: 0.5rem;
  }
  ${media.desktop`
    > p {
      font-size: 1.2rem;
    }
  `};
  ${media.hd`
    > p {
      font-size: 1.4rem;
    }
  `};
`;

const FormInputWrapper = styled.p`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    border: solid 3px ${props => props.theme.colorPrimary}90;
    background-color: ${props => props.theme.colorBackground};
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 4px;
    font-size: 1.1rem;
    color: ${props => props.theme.colorText};
    border-radius: 3px;
  }
  textarea {
    height: 12rem;
    resize: none;
  }
  ${media.desktop`
    input, textarea {
      font-size: 1.2rem;
    }
  `};
  ${media.hd`
    input, textarea {
      font-size: 1.4rem;
    }
  `};
`;

const Button = styled.button`
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  background-color: ${props => props.theme.colorBackground};
  border-radius: 3px;
  color: ${props => (props.disabled ? '#88888890' : props.theme.colorText)};
  font-size: 1.1rem;
  border: 3px solid
    ${props => (props.disabled ? '#888888' : props.theme.colorPrimary)}90;
  ${media.desktop`
    font-size: 1.2rem;
  `};
  ${media.hd`
    font-size: 1.4rem;
  `};
`;

export default ContactPage;
