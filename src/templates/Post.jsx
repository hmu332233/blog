import React from 'react';
import { graphql } from 'gatsby';

import PostPage from '@components/Pages/PostPage';

function Post(props) {
  const { data } = props;
  const { markdownRemark, excerpt } = data;
  const {
    frontmatter: { title, date, category },
    html,
    headings,
  } = markdownRemark;

  const { previous, next } = props.pageContext;
  return (
    <PostPage
      title={title}
      contents={html}
      date={date}
      category={category}
      seoDescription={excerpt}
      links={headings}
      previous={previous}
      next={next}
    />
  );
}

export default Post;

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        category
      }
      headings {
        id
        value
      }
    }
  }
`;
