import React from 'react';
import { graphql } from 'gatsby';

import SEO from '@containers/Seo';

import Layout from '@components/Layout';
import PostLink from '@components/PostLink';
import CategoryList from '@containers/CategoryList';

const PostList = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <Layout>
      <SEO title="Home" />
      <CategoryList />
      {Posts}
    </Layout>
  );
};

export default PostList;

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: $category } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
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
