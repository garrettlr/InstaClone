import { createSelector } from 'reselect';

const getSearchFilter = state => state.searchTerm;

const getFeed = state => state.feed;

export const getSearchFilter = createSelector(
  [getSearchFilter, feed], (searchFilter, feed) => {
    switch(searchFilter) {
      case '':
        return feed;
      default:
        return feed.filter(post => post.poster.indexOf(searchFilter) !== -1);
    }
  }
);
