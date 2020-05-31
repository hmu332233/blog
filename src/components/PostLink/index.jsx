import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Link } from 'gatsby';
function PostLink({ post }) {
  return (
    <div class="py-8 flex flex-wrap md:flex-no-wrap">
      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span class="tracking-widest font-medium title-font text-gray-900 uppercase">{post.frontmatter.category}</span>
        <span class="mt-1 text-gray-500 text-sm">{post.frontmatter.date}</span>
      </div>
      <div class="md:flex-grow">
        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2 mt-0">{post.frontmatter.title}</h2>
        <p class="leading-relaxed">{post.excerpt}</p>
        <Link class="text-blue-500 inline-flex items-center mt-4" to={post.frontmatter.slug}>
          Learn More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

PostLink.propTypes = {};
PostLink.defaultProps = {};

export default PostLink;
