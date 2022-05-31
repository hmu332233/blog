import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

function PostContents(props) {
  return (
    <article
      className={classNames('prose', props.lg && 'md:prose-lg')}
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}

PostContents.propTypes = {
  html: PropTypes.string,
  lg: PropTypes.bool,
};
PostContents.defaultProps = {
  html: '',
};

export default PostContents;
