import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

function PostLink(props) {
  return (
    <Link className="block mt-5 first:mt-0" to={props.link}>
      <div className="p-5 -m-5 flex flex-col items-start hover:bg-blue-100 hover:bg-opacity-50 transition duration-300 ease-linear">
        <span className="inline-block py-1 px-3 rounded bg-blue-100 text-blue-500 text-sm font-medium tracking-widest">{props.category}</span>
        <h2 className="sm:text-3xl text-2xl title-font font-black text-gray-900 mt-4 mb-4">{props.title}</h2>
        <p className="leading-relaxed">{props.contents}</p>
      </div>
    </Link>
  );
}

PostLink.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  category: PropTypes.string,
  link: PropTypes.string,
};
PostLink.defaultProps = {};

export default PostLink;
