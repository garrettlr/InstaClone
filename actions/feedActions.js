import thunk from 'redux-thunk';


export const ADD_DATA_AJAX = 'ADD_DATA_AJAX';
export const INCREASE_POSTS = 'INCREASE_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const LIKE = 'LIKE';
const url = 'https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json'

function getPosts(url, dispatch) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400){
      const urls = JSON.parse(xhr.responseText);
      const verifiedUrls = urls.map(url => verifyPosts(url));

      Promise.all(verifiedUrls).then( cleanUrls => {
        const urls = cleanUrls.filter(url => url.length > 0);
        dispatch(addData(urls));
      });
    }
  }
  xhr.send();
}

// returns valid urls or empty strings to be filtered out.
function verifyPosts(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(url);
      } else {
        resolve('');
      }
    }

    xhr.onerror = () => resolve('');
    xhr.send();
  });

}

function addData(payload) {
  return {
    type: ADD_DATA_AJAX,
    payload,
  }
}

export function addDataAjax() {
  return dispatch => {
    getPosts(url, dispatch);
  }
}

export function increasePosts() {
  return {
    type: INCREASE_POSTS,
  };
}

export function AddComment(payload) {
  return {
    type: ADD_COMMENT,
    payload,
  };
}

export function like(postNo) {
  return {
    type: LIKE,
    payload: postNo
  };
}
