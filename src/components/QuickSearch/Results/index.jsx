import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { matchSorter } from 'match-sorter';
import { VisualState, useKBar, KBarSearch } from 'kbar';
import _groupBy from 'lodash/groupBy';

function useMatches(term, actions) {
  return useMemo(() => {
    const filteredMatches =
      term.trim() === ''
        ? actions
        : matchSorter(actions, term.trim(), {
            keys: ['keywords', 'name'],
            sorter: (rankedItems) =>
              rankedItems.sort((a, b) => (a.priority > b.priority ? -1 : 1)),
          });

    const groupedMatches = _groupBy(filteredMatches, 'section');
    return { matches: Object.values(groupedMatches).flat(), groupedMatches };
  }, [term, actions]);
}

function Results({ className }) {
  const { search, currentRootActionId, actions, query } = useKBar((state) => ({
    search: state.searchQuery,
    currentRootActionId: state.currentRootActionId,
    actions: state.actions,
  }));

  const actionsList = useMemo(() => {
    if (!currentRootActionId) {
      return Object.values(actions);
    }

    return actions[currentRootActionId].children;
  }, [actions, currentRootActionId]);

  const { matches, groupedMatches } = useMatches(search, actionsList);
  const [activeIndex, setActiveIndex] = useState(0);

  // 검색시 active index 초기화
  useEffect(() => {
    setActiveIndex(0);
  }, [actionsList, currentRootActionId, search]);

  const select = useCallback(() => {
    const action = matches[activeIndex];

    if (!action) {
      return;
    }

    if (action.perform) {
      action.perform(); // 검색 동작 수행
      query.toggle(); // 검색창 닫기
      return;
    }

    if (action.children) {
      query.setCurrentRootAction(action.id);
      return;
    }
  }, [matches, activeIndex, query]);

  useEffect(() => {
    function handleKeyDown(event) {
      event.stopPropagation();
      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault();
          setActiveIndex((index) => {
            if (index >= matches.length - 1) {
              return 0;
            }
            return index + 1;
          });
          break;
        }
        case 'ArrowUp': {
          event.preventDefault();
          setActiveIndex((index) => {
            if (index === 0) {
              return matches.length - 1;
            }
            return index - 1;
          });
          break;
        }
        case 'Enter': {
          event.preventDefault();
          select();
          break;
        }
        default:
          break;
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [matches.length, select]);

  return (
    <div class="relative bg-white border rounded-lg shadow shadow-2xl w-96 overflow-hidden">
      <KBarSearch
        className="border-0 text-gray-900 text-sm focus-visible:outline-0 block w-full px-4 p-2.5"
        type="text"
      />
      <div class="w-full text-sm font-medium text-gray-900 border-t bg-white">
        {Object.keys(groupedMatches).map((section, sectionIndex) => (
          <div key={`${section}_${sectionIndex}`}>
            {section && section !== 'undefined' && (
              <div className="px-4 py-2 border-t text-sm text-gray-400">
                {section}
              </div>
            )}
            {groupedMatches[section].map((action) => (
              <a
                key={action.id}
                class={cn(
                  'block py-2 px-4 w-full border-t first:border-t-0 border-gray-200 cursor-pointer text-md',
                  matches[activeIndex]?.id === action.id &&
                    'bg-blue-500 text-white',
                )}
                onClick={select}
                onMouseEnter={() =>
                  setActiveIndex(matches.findIndex((m) => m.id === action.id))
                }
              >
                {action.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string,
};

export default Results;
