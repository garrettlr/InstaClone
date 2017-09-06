
const addPosts = (state, payload) => {
  const newPosts = payload.map((post) => ({
    comments: [],
    liked: false,
    likes: 0,
    postImg: post,
    poster: 'someUser',
    source: '/profilepic.png',
  }));
  const newState = [...state.slice(0), ...newPosts];

  return newState;
};


export default addPosts;
