import { GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILED } from './robots.types';

const INITIAL_STATE = {
  robots: [],
  isPending: true,
  error: null,
};

export const robotsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case GET_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case GET_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
