// @flow

export const CHECK_USER = 'CHECK_USER';
export const CHECK_AUTH = 'CHECK_AUTH';


export function checkUser(payload) {
  return {
    type: CHECK_USER,
    payload,
  };
}

const checkAuth = () => ({ type: CHECK_AUTH });
export default checkAuth;
