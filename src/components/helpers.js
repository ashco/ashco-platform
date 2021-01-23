import styled from 'styled-components';
import { media } from '../config/media';

export const DefaultContainer = styled.div`
  pointer-events: auto;
  display: grid;
  justify-items: center;
  height: 100%;
  margin: auto;
  gap: 1.5rem;
  ${media.tablet`
    box-shadow: 0px 0px 60px -25px inset ${({ theme }) => theme.colorPrimary};
  `};
`;

export const HeaderTextContainer = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 90%;
  > * {
    text-align: center;
    :last-child {
      margin-bottom: 0;
    }
  }
  h2 {
    line-height: 1em;
    font-weight: 600;
    font-size: 5.9vw;
    color: ${({ theme }) => theme.colorPrimary};
    border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
    padding: 0 1.5rem 0.75rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.15em;
  }
  ${media.tablet`
    h2 {
      font-size: 2rem;
    }
  `};
  ${media.laptop`
    width: 80%;
    h2 {
      border-bottom-width: 5px;
      font-size: 2.5rem;
    }
  `};
  ${media.desktop`
    p {
      font-size: 1.35rem;
    }
    h2 {
      font-size: 2.8rem;
    }
  `};
`;
