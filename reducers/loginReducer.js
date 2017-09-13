// @flow
import {
  CHECK_USER,
  GET_USER,
  GET_PASS,
} from '../actions/loginActions';

import validUser from './authFunctions/validUser';
import getUser from './authFunctions/getUser';
import getPass from './authFunctions/getPass';

const authDefault = {
  isAuthenticated: false,
  failedAuth: false,
  currentUsername: '',
  currentPassword: '',
  users: [
    {
      username: 'glevy__',
      password: 'password',
    },
    {
      username: 'timmy',
      password: 'password',
    },
    {
      username: 'billy',
      password: 'password',
    },
  ],
};


const login = (state = authDefault, action) => {
  switch (action.type) {
    case CHECK_USER:
      return validUser(state);
    case GET_USER:
      console.log(action);
      return getUser(state, action.payload);
    case GET_PASS:
      return getPass(state, action.payload);
    default:
      return state;
  }
};

export default login;
