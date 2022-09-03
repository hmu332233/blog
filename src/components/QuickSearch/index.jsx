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

// TODO: 컴포넌트 정리하고, Container에서 카테고리와 페이지 정보 받아서 action 그리도록 변경하기
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
  {
    section: 'Post Category',
    // subtitle: '',
    id: 'develop',
    name: 'Develop',
    shortcut: [],
    keywords: '',
    icon: <span />,
    perform: () => navigate('/category/develop'),
    // priority,
  },
  {
    section: 'Post Category',
    // subtitle: '',
    id: 'retrospect',
    name: 'Retrospect',
    shortcut: [],
    keywords: '',
    icon: <span />,
    perform: () => navigate('/category/retrospect'),
    // priority,
  },
  {
    section: 'Info',
    // subtitle: '',
    id: 'github',
    name: 'Github',
    shortcut: [],
    keywords: '',
    icon: <span />,
    perform: () => window.open('https://github.com/hmu332233', '_blank'),
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
