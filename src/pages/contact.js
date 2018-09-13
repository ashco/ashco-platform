import React, { Component } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const FormInputWrapper = styled.p`
  display: flex;
  flex-direction: column;
`;

class ContactPage extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <div>
          <FormWrapper
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don’t fill this out if you're human:</label>
              <input name="bot-field" />
            </p>
            <FormInputWrapper>
              <label htmlFor="name">Your name:</label>
              <input type="text" name="name" />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="email">Your email:</label>
              <input type="email" name="email" />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="message">Your message:</label>
              <textarea name="message" />
            </FormInputWrapper>
            <div>
              <button type="submit">Send</button>
            </div>
          </FormWrapper>
        </div>
      </div>
    );
  }
}

export default ContactPage;
