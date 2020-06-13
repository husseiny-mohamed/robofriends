const { GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILED } = require('./robots.types');

export const getRobots = () => (dispatch) => {
  dispatch({ type: GET_ROBOTS_PENDING });

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => dispatch({ type: GET_ROBOTS_SUCCESS, payload: users }))
    .catch((error) => dispatch({ type: GET_ROBOTS_FAILED, payload: error }));
};
