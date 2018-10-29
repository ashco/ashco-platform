import styled from 'styled-components';
import { media } from '../../config/media';

import { DefaultContainer } from '../helpers';

export const PortfolioContainer = styled(DefaultContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: 1020px;
  margin-top: 0;
  ${media.laptop`
    margin: 2rem auto;
  `};
  ${media.hd`
    max-width: 1320px;
  `};
`;
