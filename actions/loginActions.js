// @flow
export const CHECK_USER = 'CHECK_USER';
export const GET_USER = 'GET_USER';
export const GET_PASS = 'GET_PASS';

const getUser = (payload: string) => ({
  type: GET_USER,
  payload,
});

const getPass = (payload: string) => ({
  type: GET_PASS,
  payload,
});

export function checkUser() {
  return { type: CHECK_USER };
}

export function createUsername(event: eventType) {
  return dispatch => {
    const username = event.target.value + event.key;
    dispatch(getUser(username: string));
  };
}

export function createPassword(event: eventType) {
  return dispatch => {
    const password = event.target.value + event.key;
    dispatch(getPass(password: string));
  };
}

type eventType = {
  target: {
    value: string,
  },
  key: string,
};
