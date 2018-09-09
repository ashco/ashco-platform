import React from 'react';
import styled from 'styled-components';

const PortfolioWrapper = styled.section`
  background-color: #444;
`;

const PortfolioMain = ({ projects }) => (
  <PortfolioWrapper>
    <h2>Portfolio</h2>
    {console.log(projects)}
  </PortfolioWrapper>
);

export default PortfolioMain;
