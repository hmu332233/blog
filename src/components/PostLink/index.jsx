import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Link } from 'gatsby';

import classNames from 'classnames';

function PostLink({ post, row }) {
  return (
    <Link to={post.frontmatter.slug}>
    <div className={classNames('py-8 flex flex-col border-t-2', row && 'md:flex-row')}>
      <div className={classNames('mb-6 flex-shrink-0 flex flex-col', row && 'md:w-64 md:mb-0')}>
        <span className="tracking-widest font-medium title-font text-gray-900 uppercase">{post.frontmatter.category}</span>
        <span className="mt-1 text-gray-500 text-sm">{post.frontmatter.date}</span>
      </div>
      <div className={classNames(row && 'md:flex-grow')}>
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 mt-0 border-0">{post.frontmatter.title}</h2>
        <p className="leading-relaxed">{post.excerpt}</p>
        
         
        
      </div>

    </div>
    </Link>
  );
}

PostLink.propTypes = {
  post: PropTypes.object,
  row: PropTypes.bool,
};
PostLink.defaultProps = {};

export default PostLink;
