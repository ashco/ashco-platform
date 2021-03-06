import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { DefaultContainer, HeaderTextContainer } from '../components/helpers';

import { media } from '../config/media';
import { Button, ButtonDisabled } from '../components/Buttons';

class ContactPage extends PureComponent {
  state = {
    name: '',
    email: '',
    message: '',
    disabled: true,
  };

  handleChange = (event) => {
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
        <Helmet
          title="Contact"
          meta={[
            {
              name: 'description',
              content:
                "Contact for to get in touch with me. It's almost the same as knocking on my door and giving me a high-five.",
            },
          ]}
        />
        <ContactHeaderTextContainer>
          <h2>Want to connect?</h2>
          <p>Fill out this form and I'll get back to you soon as I can.</p>
        </ContactHeaderTextContainer>
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
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor="email">Your email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor="message">Your message:</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </FormInputWrapper>
          <div className="btn-row">
            {this.state.disabled ? (
              <ButtonDisabled disabled type="submit">
                Send
              </ButtonDisabled>
            ) : (
              <Button type="submit">Send</Button>
            )}
          </div>
        </FormWrapper>
      </ContactContainer>
    );
  }
}

const ContactContainer = styled(DefaultContainer)`
  max-width: 660px;
  width: 90%;
  justify-items: center;
`;

const ContactHeaderTextContainer = styled(HeaderTextContainer)`
  /* padding-bottom: 1rem; */
  ${media.laptop`
    padding-bottom: 1rem;
  `};
`;

const FormWrapper = styled.form`
  width: 100%;
  display: grid;
  gap: 0.75rem;
  /* display: flex;
  flex-direction: column; */
  > p {
    font-size: 1.1rem;
  }
  label {
    color: ${({ theme }) => theme.colorText};
    padding-bottom: 0.5rem;
  }
  .btn-row {
    display: flex;
    justify-content: center;
    button {
      width: 100%;
    }
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

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    border: 3px solid ${({ theme }) => theme.colorPrimary};
    background-color: ${({ theme }) => theme.colorBackground};
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 4px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colorText};
    border-radius: 3px;
  }
  textarea {
    height: 12rem;
    resize: none;
    font-family: inherit;
    font-size: inherit;
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

export default ContactPage;
