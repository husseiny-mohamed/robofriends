import { combineReducers } from 'redux';
import { searchRobots } from './search/search.reducer';

const rootReducer = combineReducers({
  search: searchRobots
});

export default rootReducer;
