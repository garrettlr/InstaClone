// @flow
export const CHECK_USER = 'CHECK_USER';
export const GET_USER = 'GET_USER';
export const GET_PASS = 'GET_PASS';

const checkUser = () => ({ type: CHECK_USER });

const getUser = payload => ({
  type: GET_USER,
  payload,
});

const getPass = payload => ({
  type: GET_PASS,
  payload,
});

export function createUsername(event) {
  return dispatch => {
    const username = event.target.value + event.key;
    dispatch(getUser(username));
  };
}

export function createPassword(event) {
  return dispatch => {
    const password = event.target.value + event.key;
    dispatch(getPass(password));
  };
}

export default checkUser;
