import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import SEO from '@components/Seo';

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
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
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
