import styled from 'styled-components';
import { media } from '../config/media';

export const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.colorBackground};
  border: 3px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 3px;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 500;
  ${media.desktop`
    font-size: 1.4rem;
  `};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    box-shadow: ${({ theme }) => theme.colorPrimary}40 0px 8px 20px;
    transform: translateY(-2px);
    background-color: ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.colorBackground};
  }
`;

export const ButtonDisabled = styled(Button)`
  cursor: auto;
  border-color: #888888cc;
  color: #888888cc;
  &:hover {
    box-shadow: none;
    transform: none;
    background-color: ${({ theme }) => theme.colorBackground};
    color: #888888cc;
  }
`;
