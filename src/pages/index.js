import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import PostLink from '@components/PostLink';
import CategoryList from '@containers/CategoryList';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  
  const Posts = edges.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <Layout>
      <SEO title="Home" />
      <CategoryList />
      {Posts}
    </Layout>
  );
};

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
