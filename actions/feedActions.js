
export const ADD_DATA_AJAX = 'ADD_DATA_AJAX';
export const INCREASE_POSTS = 'INCREASE_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const LIKE = 'LIKE';

export function addDataAjax(src) {
  ///this will be thunked;
  return null;
}

export function increasePosts() {
  return {
    type: INCREASE_POSTS,
  };
}

export function AddComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function like(postNo) {
  return {
    type: LIKE,
    payload: postNo
  };
}
