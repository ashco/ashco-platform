// See: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path');

// BLOG
exports.createPages = async function ({ graphql, actions }) {
  const { createPage, createRedirect } = actions;

  // SITE REDIRECTS
  createRedirect({
    fromPath: 'https://ashchristie.netlify.com',
    toPath: 'https://www.ashco.io',
    isPermanent: true,
  });

  await graphql(`
    {
      allContentfulPortfolioProject {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    // PORTFOLIO
    result.data.allContentfulPortfolioProject.edges.forEach(({ node }) => {
      createPage({
        // can use this fnc to create pages outside of promises
        path: `projects/${node.slug}`,
        component: path.resolve(
          './src/components/Project/ProjectPageSelected.js'
        ),
        context: {
          slug: node.slug,
        },
      });
    });
    // BLOG
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve('./src/components/Blog/BlogPage.js'),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
