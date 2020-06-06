import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

const Category = (props) => <Link to={props.link} className="ml-2 first:ml-0 inline-block py-1 px-3 rounded bg-blue-100 text-blue-500 text-sm font-medium tracking-widest" activeClassName="border border-blue-500 bg-transparent">{`${props.text}`}</Link>;

function CategoryList(props) {
  return (
    <div className="flex">
      {props.categories.map(({ text, link }) => (
        <Category link={link} text={text} />
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array,
};
CategoryList.defaultProps = {
  categories: [],
};

export default CategoryList;