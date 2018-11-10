import styled from 'styled-components';
import { media } from '../../config/media';

import { DefaultContainer } from '../helpers';

const PortfolioContainer = styled(DefaultContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto 1rem auto;
  ${media.laptop`
    margin: 2rem auto;
  `};
  ${media.hd`
    max-width: 1380px;
  `};
`;

export default PortfolioContainer;
