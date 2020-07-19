import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

function Category(props) {
  return (
    <Link to={props.link} className="ml-2 first:ml-0 inline-block py-1 px-3 rounded bg-blue-100 text-blue-500 text-sm font-medium tracking-widest" activeClassName="border border-blue-500 bg-transparent">{`${props.text}`}</Link>
  );
}

Category.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};
Category.defaultProps = {
};

export default Category;
