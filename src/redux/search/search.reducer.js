import { SEARCH_ROBOTS } from './search.types';

const INITIAL_STATE = {
  searchText: '',
};
export const searchRobots = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_ROBOTS:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};
