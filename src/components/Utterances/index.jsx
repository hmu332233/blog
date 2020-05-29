import React, { createRef, useEffect } from 'react';

function Utterances(props) {
  const ref = createRef();
  useEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'hmu332233/utterances.blog',
      'issue-term': 'pathname',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: true,
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    ref.current.appendChild(utterances);
  }, []);

  return <div ref={ref} />;
}

Utterances.propTypes = {};

export default Utterances;
