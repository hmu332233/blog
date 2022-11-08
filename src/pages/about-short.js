import React from 'react';
import { graphql } from 'gatsby';

import AboutShortPage from '@components/Pages/AboutShortPage';

function IndexPage({
  data: {
    site: {
      siteMetadata: { utterances },
    },
    allMarkdownRemark: { edges },
  },
}) {
  const {
    html,
    frontmatter: { title, description },
  } = edges[0].node;

  return (
    <AboutShortPage
      title={title}
      description={description}
      contents={html}
      utterances={utterances}
    />
  );
}

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        utterances
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { aboutShort: { eq: true } } }
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
