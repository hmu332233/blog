import React from 'react';
import PropTypes from 'prop-types';

import Seo from '@containers/Seo';
import Layout from '@components/Layout';
import Utterances from '@components/Utterances';
import PostHeader from '@components/PostHeader';
import PostContents from '@components/PostContents';
import Profile from '@containers/Profile';
import PostNavigator from '@components/PostNavigator';
import PostToc from '@components/PostToc';

function PostPage(props) {
  return (
    <Layout>
      <Seo title={props.title} description={props.description} />
      <PostHeader
        title={props.title}
        date={props.date}
        category={props.category}
      />
      <PostToc.Positioner>
        <PostToc.List links={props.links} />
      </PostToc.Positioner>
      <PostContents html={props.contents} />
      <Profile />
      <PostNavigator previous={props.previous} next={props.next} />
      {props.utterances && <Utterances repo={props.utterances} />}
    </Layout>
  );
}

PostPage.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  seoDescription: PropTypes.string,
  utterances: PropTypes.string,
};
PostPage.defaultProps = {};

export default PostPage;
