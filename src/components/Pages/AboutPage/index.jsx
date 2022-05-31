import React from 'react';
import PropTypes from 'prop-types';

import Layout from '@components/Layout';
import PostContents from '@components/PostContents';
import Profile from '@containers/Profile';
import Seo from '@containers/Seo';

function AboutPage({ title, description, contents }) {
  return (
    <Layout>
      <Seo title={title} description={description} />
      <Profile />
      <PostContents html={contents} lg />
    </Layout>
  );
}

AboutPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  contents: PropTypes.string,
};
AboutPage.defaultProps = {
  title: '',
  description: '',
  contents: '',
};

export default AboutPage;
