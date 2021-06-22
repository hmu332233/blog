import React from 'react';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import PostContents from '@components/PostContents';
import Profile from '@containers/Profile';

function AboutPage({ contents }) {
  return (
    <Layout>
      <Profile />
      <PostContents html={contents} />
    </Layout>
  );
}

AboutPage.propTypes = {
  html: PropTypes.string,
};
AboutPage.defaultProps = {};

export default AboutPage;
