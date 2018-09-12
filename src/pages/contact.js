import React, { Component } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
`;

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class ContactPage extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <div>
          <FormWrapper>
            <FormInputWrapper>
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="email">Your email</label>
              <input type="email" name="email" id="email" />
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="message">Your message</label>
              <textarea type="text" name="message" id="message" />
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
