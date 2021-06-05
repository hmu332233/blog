import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles.module.scss';

import classNames from 'classnames';

function Wrapper(props) {
  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: 'absolute left-full ml-16',
      });
    }
    return child;
  });

  return <div className="sticky top-10">{childrenWithProps}</div>;
}

function Navigator(props) {
  return (
    <div
      className={classNames(styles.Navigator, props.className, 'flex flex-col')}
    >
      {props.links.map((link) => (
        <a
          key={link.id}
          className="text-gray-500 hover:text-gray-900"
          href={`#${link.id}`}
        >
          {link.value}
        </a>
      ))}
    </div>
  );
}

Navigator.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};
Navigator.defaultProps = {
  links: [],
};

const PostContentsNavigator = {
  Wrapper,
  Navigator,
};

export default PostContentsNavigator;
