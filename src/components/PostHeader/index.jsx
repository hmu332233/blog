import React from 'react';
import PropTypes from 'prop-types';

function PostHeader(props) {
  return (
    <div className="clearfix mb-10">
      <span className="inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">{props.category}</span>
      <h2 className="sm:text-3xl text-2xl title-font font-black text-gray-900 mt-4 mb-4">{props.title}</h2>
      <span className="mt-1 text-gray-500 text-sm float-right">{props.date}</span>
    </div>
  );
}

PostHeader.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};
PostHeader.defaultProps = {};

export default PostHeader;
