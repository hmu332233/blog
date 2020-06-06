import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

import { Link } from 'gatsby';

const Category = (props) => <Link to={props.link} className="ml-2 first:ml-0 inline-block py-1 px-3 rounded bg-blue-100 text-blue-500 text-sm font-medium tracking-widest" activeClassName="border border-blue-500">{`${props.text} (${props.count})`}</Link>;

function CategoryList(props) {
  return (
    <div className="flex">
      {props.categories.map((category) => (
        <Category link={`/category/${category}`} text={category} count={0} />
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
