import React, { Component } from 'react';
import styled from 'styled-components';

import {
  MainContainer,
  ContentWrapper,
  MainTitle,
} from '../components/helpers';

const TextWrapper = styled.div`
  margin: 2em 0;
`;

const FormWrapper = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  > p {
    font-size: 1.1rem;
  }
  label {
    color: ${props => props.theme.colorText};
    padding-bottom: 0.5rem;
  }
  button {
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: ${props => props.theme.colorBackground};
    border-radius: ${props => props.theme.contactRadius};
    color: ${props => props.theme.colorText};
    font-size: 1.1rem;
    border: 2px solid ${props => props.theme.colorPrimary};
  }
`;

const FormInputWrapper = styled.p`
  display: flex;
  flex-direction: column;
  input,
  textarea {
    border: solid 2px ${props => props.theme.colorPrimary};
    background-color: ${props => props.theme.colorBackground};
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 4px;
    font-size: 16px;
    color: ${props => props.theme.colorText};
    border-radius: ${props => props.theme.contactRadius};
  }
  textarea {
    height: 8rem;
    resize: none;
  }
`;

const ContactPage = () => (
  <MainContainer>
    <ContentWrapper width="600px">
      <TextWrapper>
        <MainTitle>Wanna chat?</MainTitle>
        <p>Fill out this form and I'll get back to you soon as life lets me.</p>
      </TextWrapper>
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
