import styled from 'styled-components';
import { DefaultContainer } from '../helpers';

export const PortfolioContainer = styled(DefaultContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 960px;
`;

export const PortfolioItemWrapper = styled.article`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 2rem 0;
  border-radius: ${props => props.theme.portfolioRadius};
  /* ANIMATION */
  box-shadow: none;
  border-bottom: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  img {
    display: block;
    border-radius: ${props => props.theme.portfolioRadius};
  }
  &:hover {
    box-shadow: ${props => props.theme.colorPrimary}40 0px 8px 20px;
    background: transparent;
    transform: translateY(-3px);
    img {
      opacity: 0.3;
    }
    div {
      opacity: 1;
    }
  }
`;

export const PortfolioItemHoverArea = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
