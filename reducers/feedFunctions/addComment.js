const addComment = (state, payload) => {
  const newState = state.slice(0);
  const newPost = { ...newState[payload.postNo] };
  const newComments = newPost.comments.slice(0);
  const newComment = {
    comment: payload.comment,
    commentor: payload.poster,
  }
  newComments.push(newComment);
  newPost.comments = newComments;
  newState[payload.postNo] = newPost;
  return newState;
}


export default addComment;
