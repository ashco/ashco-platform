import React, { Component } from 'react';
import { PageTitle } from '../helpers';

export class BlogPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div>
        <span>{data.contentfulBlogPost.date}</span>
        <PageTitle text={data.contentfulBlogPost.title} />
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        />
      </div>
    );
  }
}

export default BlogPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    # slug is the context that is being passed through via gatsby-node.js
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`;
