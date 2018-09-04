import React, { Component } from 'react';

export class PortfolioPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <p>{data.contentfulPortfolioProject.title}</p>
        <p>{data.contentfulPortfolioProject.githubLink}</p>
        <p>{data.contentfulPortfolioProject.liveSiteLink}</p>
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
