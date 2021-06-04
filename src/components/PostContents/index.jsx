import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

import classNames from 'classnames';

function PostContents(props) {
  return (
    <div
      className={classNames(styles.PostContents, 'leading-relaxed')}
      dangerouslySetInnerHTML={{ __html: props.html }}
    />
  );
}

PostContents.propTypes = {
  html: PropTypes.string,
};
PostContents.defaultProps = {
  html: '',
};

export default PostContents;
