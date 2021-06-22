import React from 'react';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import PostContents from '@components/PostContents';
import Profile from '@containers/Profile';

function AboutPage({ contents }) {
  return (
    <Layout>
      <PostContents html={contents} />
      <Profile />
    </Layout>
  );
}

AboutPage.propTypes = {
  html: PropTypes.string,
};
AboutPage.defaultProps = {};

export default AboutPage;
