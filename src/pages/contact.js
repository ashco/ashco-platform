import React, { Component } from 'react';
import styled from 'styled-components';

import { PageTitle } from '../components/helpers';

const FormWrapper = styled.form`
  form {
    width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
`;

const FormInputWrapper = styled.p`
  display: flex;
  flex-direction: column;
`;

const ContactPage = () => (
  <div>
    <PageTitle text="Contact" />
    <FormWrapper>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
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
      </form>
    </FormWrapper>
  </div>
);

export default ContactPage;
