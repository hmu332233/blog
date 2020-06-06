exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }

      categories: allMarkdownRemark {
        group(field: frontmatter___category) {
          category: fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // post page
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve(`./src/templates/Post.jsx`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  // category page
  result.data.categories.group.forEach(({ category }) => {
    createPage({
      path: `/category/${category}`,
      component: require.resolve(`./src/templates/PostList.jsx`),
      context: {
        category,
      },
    });
  });
};
