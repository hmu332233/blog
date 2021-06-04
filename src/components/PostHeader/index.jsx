import React from 'react';
import PropTypes from 'prop-types';

import Category from '@components/Category';

function PostHeader(props) {
  return (
    <div className="clearfix mb-10">
      <Category
        text={props.category}
        link={`/category/${props.category}`}
        active
      />
      <h2 className="sm:text-3xl text-2xl title-font font-black text-gray-900 mt-4 mb-4">
        {props.title}
      </h2>
      <span className="mt-1 text-gray-500 text-sm float-right">
        {props.date}
      </span>
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
