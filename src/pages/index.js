import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import PostLink from '@components/PostLink';
import Utterances from '@components/Utterances';

const IndexPage = ({
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
      <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8">{Posts}</div>
        </div>
      </section>
      <Utterances />
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
            date(formatString: "YYYY-MM-DD")
            slug
            title
          }
        }
      }
    }
  }
`;
