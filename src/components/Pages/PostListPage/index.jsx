import React from 'react';
import PropTypes from 'prop-types';

import Seo from '@containers/Seo';

import Layout from '@components/Layout';
import PostLink from '@components/PostLink';
import CategoryList from '@containers/CategoryList';

function PostListPage(props) {
  return (
    <Layout>
      <Seo title={props.title} description={props.seoDescription} />
      <CategoryList />
      {props.posts.map((post) => (
        <PostLink
          key={post.id}
          title={post.title}
          contents={post.contents}
          category={post.category}
          link={post.link}
        />
      ))}
    </Layout>
  );
}

PostListPage.propTypes = {
  title: PropTypes.string,
  seoDescription: PropTypes.string,
  posts: PropTypes.array,
};
PostListPage.defaultProps = {
  title: 'Home',
  posts: [],
};

export default PostListPage;
