import { SEARCH_ROBOTS } from './search.types';

export const searchUser = (searchText) => ({
  type: SEARCH_ROBOTS,
  payload: searchText,
});
