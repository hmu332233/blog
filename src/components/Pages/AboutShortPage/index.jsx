import React from 'react';
import PropTypes from 'prop-types';

import PostContents from '@components/PostContents';
import Profile from '@containers/Profile';
import Seo from '@containers/Seo';
import Utterances from '@components/Utterances';

function AboutShortPage({ title, description, contents, utterances }) {
  return (
    <div className="container flex flex-col px-5 py-12 md:py-24 mx-auto max-w-screen-md">
      <Seo title={title} description={description} />
      <Profile />
      <PostContents html={contents} lg />
      <Utterances repo={utterances} />
    </div>
  );
}

AboutShortPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  contents: PropTypes.string,
  utterances: PropTypes.string.isRequired,
};
AboutShortPage.defaultProps = {
  title: '',
  description: '',
  contents: '',
};

export default AboutShortPage;
