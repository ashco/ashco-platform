import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { DefaultContainer } from '../components/helpers';

class IndexPage extends PureComponent {
  render() {
    return (
      <MainContainer>
        <Helmet
          title="Welcome"
          meta={[
            {
              name: 'description',
              content:
                "Welcome to AshCo's internet bungalow. Sometimes I build things, sometimes I think things. Experience it all here!",
            },
          ]}
        />
      </MainContainer>
    );
  }
}

const MainContainer = styled(DefaultContainer)``;

export default IndexPage;
