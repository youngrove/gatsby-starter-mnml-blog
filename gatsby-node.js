// For get util from .ts file
require("ts-node").register({
  transpileOnly: true,
});

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { toUrl } = require("./src/utils/converter");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }
  const posts = result.data.allMdx.edges;
  const tags = new Set();

  const blogPostTemplate = path.resolve(`./src/templates/blogPostTemplate.tsx`);
  if (posts.length > 0) {
    posts.forEach((post) => {
      post.node.frontmatter.tags.forEach((tag) => tags.add(tag));
      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
        },
      });
    });
  }

  const tagListTemplate = path.resolve(`./src/templates/tagListTemplate.tsx`);
  if (tags.size > 0) {
    tags.forEach((tag) => {
      const link = `/tags/${toUrl(tag)}`;
      createPage({
        path: link,
        component: tagListTemplate,
        context: {
          tag: tag,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: `slug`, node, value });
  }
};
