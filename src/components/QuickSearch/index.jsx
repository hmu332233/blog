import React from 'react';
// import PropTypes from 'prop-types';

import { KBarPortal, KBarProvider, KBarPositioner, KBarAnimator } from 'kbar';
import Results from './Results';

import { navigate } from 'gatsby';

/*
{
  section: '',
  subtitle: '',
  id: '',
  name: '',
  shortcut: [],
  keywords: '',
  icon: <span />,
  perform: () => {},
  priority,
}
*/

const actions = [
  {
    // section: '',
    // subtitle: '',
    id: 'About',
    name: 'About',
    shortcut: [],
    keywords: '',
    icon: <span />,
    perform: () => navigate('/about'),
    // priority,
  },
  {
    // section: '',
    // subtitle: '',
    id: 'Posts',
    name: 'Posts',
    shortcut: [],
    keywords: '',
    icon: <span />,
    perform: () => navigate('/'),
    // priority,
  },
  {
    // section: '',
    // subtitle: '',
    id: 'Contribute',
    name: 'Contribute',
    shortcut: [],
    keywords: '',
    icon: <span />,
    perform: () => navigate('/contribute'),
    // priority,
  },
];

// kbar options
// See, https://github.com/timc1/kbar/blob/main/src/types.ts#L37
const kbarOptions = {
  disableScrollbarManagement: true,
};

function QuickSearch() {
  return (
    <KBarProvider actions={actions} options={kbarOptions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <Results />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  );
}

QuickSearch.propTypes = {};
QuickSearch.defaultProps = {};

export default QuickSearch;
