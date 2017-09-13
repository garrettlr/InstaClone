// @flow
// should maybe be a selector. this is fine for now though.
const validUser = (state, { username, password }) => {
  const userMatch = state.users.filter( user => user.username === username );
  if (!userMatch[0]) return state;
  const passwordMatch = userMatch.filter( user => user.password === password);
  if (!passwordMatch[0]) return state;

  return {
    ...state,
    isAuthenticated: true,
  };
}

export default validUser;
