import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { DefaultContainer } from '../components/helpers';

class IndexPage extends PureComponent {
  render() {
    return <MainContainer />;
  }
}

const MainContainer = styled(DefaultContainer)``;

export default IndexPage;
