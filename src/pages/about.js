import React from 'react';
import { graphql } from 'gatsby';

import AboutPage from '@components/Pages/AboutPage';

function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    html,
    frontmatter: { title, description },
  } = edges[0].node;

  return <AboutPage title={title} description={description} contents={html} />;
}

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { about: { eq: true } } }
      limit: 1
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
