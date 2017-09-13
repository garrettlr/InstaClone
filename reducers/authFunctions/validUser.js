// @flow
// should maybe be a selector. this is fine for now though.
const validUser = (state) => {
  const username = state.currentUsername;
  const password = state.currentPassword;

  const userMatch = state.users.filter( user => user.username === username );
  if (!userMatch[0]) return { ...state, failedAuth: true };
  const passwordMatch = userMatch.filter( user => user.password === password)[0];
  if (!passwordMatch)  return { ...state, failedAuth: true };

  return {
    ...state,
    isAuthenticated: true,
  };
}

export default validUser;
