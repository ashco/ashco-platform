import React, { Component } from 'react';
import styled from 'styled-components';

import {
  MainContainer,
  ContentWrapper,
  PageTitle,
} from '../components/helpers';

const FormWrapper = styled.form`
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: #c5c5c5;
    border-radius: 2px;
    color: #222;
    font-size: 1rem;
  }
`;

const FormInputWrapper = styled.p`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    border: solid 2px #b1b1b1;
    background-color: #262626;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 4px;
    font-size: 16px;
    color: #eee;
  }
  textarea {
    height: 8rem;
  }
`;

const ContactPage = () => (
  <MainContainer>
    <ContentWrapper>
      <FormWrapper
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
    </ContentWrapper>
  </MainContainer>
);

export default ContactPage;
