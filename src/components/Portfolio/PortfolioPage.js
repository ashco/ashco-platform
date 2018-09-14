import React, { Component } from 'react';

import PortfolioSelect from './PortfolioSelect';
import PortfolioListing from './PortfolioListing';
import { PageTitle } from '../helpers';
export class PortfolioPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    console.log(data);
    return (
      <div>
        <PageTitle text={data.contentfulPortfolioProject.title} />
        <PortfolioSelect project={data.contentfulPortfolioProject} />
      </div>
    );
  }
}

export default PortfolioPage;

export const query = graphql`
  query PortfolioQuery($slug: String!) {
    # slug is the context that is being passed through via gatsby-node.js
    contentfulPortfolioProject(slug: { eq: $slug }) {
      id
      title
      slug
      githubLink
      liveSiteLink
    }
  }
`;
