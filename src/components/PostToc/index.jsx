import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { optimizeScroll } from '@utils/event';

function Positioner(props) {
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

function List(props) {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  useEffect(() => {
    const linkTops = props.links.map((link) => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const element = document.getElementById(link.id);
      return element.getBoundingClientRect().top + scrollTop;
    });

    const onScroll = optimizeScroll(() => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const currentLinkIndex = linkTops.findIndex(
        (linkTop) => linkTop > scrollTop - 5,
      );

      if (currentLinkIndex > -1) {
        setActiveLinkIndex(currentLinkIndex);
      } else {
        setActiveLinkIndex(props.links.length - 1);
      }
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [props.links]);

  return (
    <div
      className={classNames(props.className, 'w-40 hidden lg:flex lg:flex-col')}
    >
      {props.links.map((link, index) => (
        <a
          key={link.id}
          className={classNames(
            'text-gray-500 hover:text-gray-900',
            activeLinkIndex === index && 'font-bold text-gray-900',
          )}
          href={`#${link.id}`}
        >
          {link.value}
        </a>
      ))}
    </div>
  );
}

List.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};
List.defaultProps = {
  links: [],
};

const PostToc = {
  Positioner,
  List,
};

export default PostToc;
