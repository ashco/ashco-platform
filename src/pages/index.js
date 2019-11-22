import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { DefaultContainer } from '../components/helpers';

class IndexPage extends PureComponent {
  render() {
    return <MainContainer>
      <Helmet title="Welcome" meta={[{ name: 'description', content: "Welcome to AKC.DEV, Ashton K. Christie's internet bungalo. I build things and sometimes have thoughts. Experience them for yourself here!" }]} />
    </MainContainer>;
  }
}

const MainContainer = styled(DefaultContainer)``;

export default IndexPage;
