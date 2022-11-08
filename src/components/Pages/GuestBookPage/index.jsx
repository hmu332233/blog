import React from 'react';
import PropTypes from 'prop-types';

import Seo from '@containers/Seo';
import Utterances from '@components/Utterances';

function GuestBookPage({ utterances }) {
  return (
    <>
      <Seo title="방명록" description="minung--dev-log 방명록입니다!" />
      <Utterances repo={utterances} />
    </>
  );
}

GuestBookPage.propTypes = {
  utterances: PropTypes.string.isRequired,
};
GuestBookPage.defaultProps = {};

export default GuestBookPage;
