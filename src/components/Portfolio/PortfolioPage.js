import React, { Component } from 'react';

export class PortfolioPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <p>{data.contentfulPortfolioPost.title}</p>
        <p>{data.contentfulPortfolioPost.githubLink}</p>
        <p>{data.contentfulPortfolioPost.liveLink}</p>
      </div>
    );
  }
}

export default PortfolioPage;

export const query = graphql`
  query PortfolioQuery($slug: String!) {
    # slug is the context that is being passed through via gatsby-node.js
    contentfulPortfolioPost(slug: { eq: $slug }) {
      id
      title
      slug
      githubLink
      liveLink
    }
  }
`;
