import React from 'react';
import PropTypes from 'prop-types';

import SEO from '@containers/Seo';
import Layout from '@components/Layout';
import Utterances from '@components/Utterances';
import PostHeader from '@components/PostHeader';
import PostContents from '@components/PostContents';
import Profile from '@containers/Profile';

function PostPage(props) {
  return (
    <Layout>
      <SEO title={props.title} description={props.description} />
      <PostHeader title={props.title} date={props.date} category={props.category} />
      <PostContents html={props.contents} />
      <Profile />
      <Utterances />
    </Layout>
  );
}

PostPage.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  seoDescription: PropTypes.string,
};
PostPage.defaultProps = {};

export default PostPage;
