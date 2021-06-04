import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { Link } from 'gatsby';

const defaultClassName =
  'ml-2 first:ml-0 inline-block py-1 px-3 rounded border border-blue-500 text-blue-500 text-sm font-medium tracking-widest opacity-50 hover:opacity-100';
const activeClassName = 'opacity-100';

const Div = (props) => <div className={props.className}>{props.children}</div>;

function Category(props) {
  const Element = props.link ? Link : Div;
  return (
    <Element
      to={props.link}
      className={classNames(defaultClassName, props.active && activeClassName)}
      activeClassName={activeClassName}
    >{`${props.text}`}</Element>
  );
}

Category.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
};
Category.defaultProps = {
  active: false,
};

export default Category;
