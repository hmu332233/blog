import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Link } from 'gatsby';

import classNames from 'classnames';

function PostLink({ post, row }) {
  return (
    <Link className="block mt-5 first-child:mt-0" to={post.frontmatter.slug}>
      <div className="p-5 -m-5 flex flex-col items-start hover:bg-blue-100 hover:bg-opacity-50 transition duration-300 ease-linear">
        <span className="inline-block py-1 px-3 rounded bg-blue-100 text-blue-500 text-sm font-medium tracking-widest">{post.frontmatter.category}</span>
        <h2 className="sm:text-3xl text-2xl title-font font-black text-gray-900 mt-4 mb-4">{post.frontmatter.title}</h2>
        <p className="leading-relaxed">{post.excerpt}</p>
      </div>
    </Link>
  );
}

PostLink.propTypes = {
  post: PropTypes.object,
};
PostLink.defaultProps = {};

export default PostLink;
