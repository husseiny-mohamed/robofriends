import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export { store };
