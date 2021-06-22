import React from 'react';
import { graphql } from 'gatsby';

import AboutPage from '@components/Pages/AboutPage';

function IndexPage(props) {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props;


  return <AboutPage contents={edges[0].node.html} />;
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
        }
      }
    }
  }
`;
