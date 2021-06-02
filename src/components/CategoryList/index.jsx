import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Category from '@components/Category';

function CategoryList(props) {
  return (
    <div className={classNames('flex', props.className)}>
      {props.categories.map(({ text, link }) => (
        <Category key={link} link={link} text={text} />
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.array,
};
CategoryList.defaultProps = {
  categories: [],
};

export default CategoryList;
