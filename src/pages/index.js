import React from 'react';
import { graphql } from 'gatsby';

import PostListPage from '@components/Pages/PostListPage';

function IndexPage(props) {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props;
  const posts = edges.map((edge) => ({
    id: edge.node.id,
    title: edge.node.frontmatter.title,
    contents: edge.node.excerpt,
    category: edge.node.frontmatter.category,
    link: edge.node.frontmatter.slug,
  }));

  return <PostListPage posts={posts} />;
}

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(format: PLAIN, pruneLength: 250)
          frontmatter {
            category
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
