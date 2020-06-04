import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import SEO from '@components/Seo';
import Utterances from '@components/Utterances';
import PostContents from '@components/PostContents';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, excerpt } = data; // data.markdownRemark holds your post data
  const { frontmatter: { title, date }, html } = markdownRemark;
  console.log(excerpt)
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
      />
      <div>
        <h1>{title}</h1>
        <h2>{date}</h2>
      </div>
      <PostContents html={html} />
      <Utterances />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
