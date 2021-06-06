import React, { useEffect, useState } from 'react';
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
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  useEffect(() => {
    const linkTops = props.links.map(link => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const element = document.getElementById(link.id);
      return element.getBoundingClientRect().top + scrollTop;
    });

    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const currentLinkIndex = linkTops.findIndex(linkTop => linkTop > scrollTop - 5);
      
      if (currentLinkIndex > -1) {
        setActiveLinkIndex(currentLinkIndex)
      } else {
        setActiveLinkIndex(props.links.length - 1);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [props.links]);
  

  return (
    <div
      className={classNames(styles.Navigator, props.className, 'flex flex-col')}
    >
      {props.links.map((link, index) => (
        <a
          key={link.id}
          className={classNames('text-gray-500 hover:text-gray-900', activeLinkIndex === index && 'font-bold text-gray-900')}
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
