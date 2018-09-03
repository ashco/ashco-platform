import React, { Component } from 'react'

export class PostPage extends Component {
  render() {
    const { data } = this.props
    if (!data) return null
    return (
      <div>
        <span>{data.contentfulBlogPost.date}</span>
        <h1>{data.contentfulBlogPost.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogPost.body.childMarkdownRemark.html }} />
      </div>
    )
  }
}

export default PostPage

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    # slug is the context that is being passed through via gatsby-node.js
    contentfulBlogPost(slug: {eq:$slug}) {
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
`
