import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const PortfolioSelectWrapper = styled.div`
  background-color: #333;
  width: 440px;
`;

const PortfolioSelect = ({ project }) => (
  <PortfolioSelectWrapper>
    <img src={project.image.resize.src} alt={project.image.title} />
  </PortfolioSelectWrapper>
);

export default PortfolioSelect;
