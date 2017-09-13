// @flow

import { CHECK_USER } from '../actions/loginActions';
import { CHECK_AUTH } from '../actions/loginActions';
import validUser from './authFunctions/validUser';
const authDefault = {
  isAuthenticated: false,
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
  ]
}


const login = (state = authDefault, action) => {
  switch(action.type) {
    case CHECK_USER:
      return validUser(state, action.payload);
    // case CHECK_AUTH:
    //   return isAuthenticated(state, action);
    default:
      return state;
  }
}

export default login;
