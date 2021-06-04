exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
          previous {
            frontmatter {
              title
              slug
            }
          }
          next {
            frontmatter {
              title
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
  result.data.allMarkdownRemark.edges.forEach(({ node, previous, next }) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve(`./src/templates/Post.jsx`),
      context: {
        slug: node.frontmatter.slug,
        ...(next && {
          previous: {
            title: next.frontmatter.title,
            slug: next.frontmatter.slug,
          },
        }),
        ...(previous && {
          next: {
            title: previous.frontmatter.title,
            slug: previous.frontmatter.slug,
          },
        }),
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
