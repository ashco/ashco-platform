// See: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path');

// BLOG
exports.createPages = async function ({ graphql, actions }) {
  const { createPage, createRedirect } = actions;

  // SITE REDIRECTS
  createRedirect({
    fromPath: 'https://ashchristie.netlify.com',
    toPath: 'https://www.ashchristie.dev',
    isPermanent: true,
  });

  // return new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulPortfolioProject {
  //         edges {
  //           node {
  //             slug
  //           }
  //         }
  //       }
  //       allContentfulBlogPost {
  //         edges {
  //           node {
  //             slug
  //           }
  //         }
  //       }
  //     }
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
  `).then(result => {
    // PORTFOLIO
    result.data.allContentfulPortfolioProject.edges.forEach(({ node }) => {
      createPage({
        // can use this fnc to create pages outside of promises
        path: `projects/${node.slug}`,
        component: path.resolve(
          './src/components/Portfolio/PortfolioPageSelected.js'
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
