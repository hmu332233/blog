import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

import classNames from 'classnames';

import { Link } from 'gatsby';

function Header(props) {
  return (
    <header className={classNames('text-gray-700 body-font', styles.Header)}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-black items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <span className="ml-3 text-xl">{props.siteTitle}</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/about">
            About
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};
Header.defaultProps = {};

export default Header;
