import { combineReducers } from 'redux';
import { searchRobotsReducer } from './search/search.reducer';
import { robotsReducer } from './robots/robots.reducer';

const rootReducer = combineReducers({
  search: searchRobotsReducer,
  robots: robotsReducer,
});

export default rootReducer;
