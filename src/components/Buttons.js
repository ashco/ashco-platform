import styled from 'styled-components';
import { media } from '../config/media';

export const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.colorBackground};
  border: 4px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 3px;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 500;
  ${media.desktop`
    font-size: 1.4rem;
  `};
  &:hover {
    background-color: ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.colorBackground};
  }
`;


export const ButtonDisabled = styled(Button)`
  cursor: auto;
  border-color: #88888890;
  color: #88888870;
  &:hover {
    border-color: #88888890;
    color: #88888870;
    background-color: ${({ theme }) => theme.colorBackground};
  }
`;
