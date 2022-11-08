import React from 'react';
import { graphql } from 'gatsby';

import Page from '@components/Pages/GuestBookPage';

function GuestBookPage({ data }) {
  const {
    site: {
      siteMetadata: { utterances },
    },
  } = data;
  return <Page utterances={utterances} />;
}

export default GuestBookPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        utterances
      }
    }
  }
`;
