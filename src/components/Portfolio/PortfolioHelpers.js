import styled from 'styled-components';

export const PortfolioListingWrapper = styled.article`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 2rem 0;
  border-radius: ${props => props.theme.portfolioRadius};
  img {
    display: block;
    transition: 0.5s ease;
    border-radius: ${props => props.theme.portfolioRadius};
  }
  &:hover {
    img {
      opacity: 0.3;
    }
    div {
      opacity: 1;
    }
    transition: 0.5s ease;
    box-shadow: 0px 0px 100px -25px ${props => props.theme.colorPrimary};
  }
`;

export const PortfolioHoverArea = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
