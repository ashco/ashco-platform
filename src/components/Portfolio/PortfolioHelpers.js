import styled from 'styled-components';

export const PortfolioListingWrapper = styled.article`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 2rem 0;
  border-radius: ${props => props.theme.portfolioRadius};
  img {
    display: block;
    /* transition: 250ms ease; */
    border-radius: ${props => props.theme.portfolioRadius};
  }
  &:hover {
    img {
      opacity: 0.3;
    }
    div {
      opacity: 1;
    }
    /* transition: 0.5s ease; */
    /* box-shadow: 0px 0px 100px -25px ${props => props.theme.colorPrimary}; */

    box-shadow: ${props => props.theme.colorPrimary}40 0px 8px 20px;
    background: transparent;
    transform: translateY(-3px);
  }

  box-shadow: none;
  border-bottom: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

`;

export const PortfolioHoverArea = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
