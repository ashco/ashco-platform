// See: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')


// create blog post pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  // create promise to get slugs
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      // create new page for each slug found
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          // can use this fnc to create pages outside of promises
          path: node.slug,
          component: path.resolve('./src/components/Posts/PostPage.js'),
          context: {
            // variable you assign to graphql to pass
            slug: node.slug,
          },
        })
      })
    })
    resolve()
  })
}
