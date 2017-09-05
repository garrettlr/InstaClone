
const addLike = (state, payload) => {
  const newState = state.slice(0);
  const newPost = {...newState[payload]};
  newPost.liked = !newPost.liked;
  newPost.likes = newPost.liked? newPost.likes += 1 : newPost.likes -= 1 ;
  newState[payload] = newPost;
  return newState;
}

export default addLike;
