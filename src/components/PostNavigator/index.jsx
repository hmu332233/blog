import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import classNames from 'classnames';

const LinkButton = (props) => {
  return (
    <Link
      to={props.to}
      className={classNames(
        'py-1 px-3 rounded border border-blue-500 text-blue-500 text-sm font-medium tracking-widest opacity-50 hover:opacity-100 opacity-100',
        props.className,
      )}
    >
      {props.children}
    </Link>
  );
};

function PostNavigator(props) {
  return (
    <div className="flex mt-4 mb-4">
      {props.previous && (
        <LinkButton to={props.previous.slug}>
          ← {props.previous.title}
        </LinkButton>
      )}
      {props.next && (
        <LinkButton to={props.next.slug} className="ml-auto">
          {props.next.title} →
        </LinkButton>
      )}
    </div>
  );
}

PostNavigator.propTypes = {
  previous: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }),
  next: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }),
};
PostNavigator.defaultProps = {};

export default PostNavigator;
