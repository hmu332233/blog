import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const attributes = {
  src: 'https://utteranc.es/client.js',
  'issue-term': 'pathname',
  theme: 'github-light',
  crossorigin: 'anonymous',
  async: true,
};

function Utterances({ repo }) {
  const ref = createRef();
  useEffect(() => {
    const utterances = document.createElement('script');
    Object.entries({ ...attributes, repo }).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    ref.current.appendChild(utterances);
  }, []);

  return <div ref={ref} />;
}

Utterances.propTypes = {
  repo: PropTypes.string.isRequired,
};
Utterances.defaultProps = {};

export default Utterances;
