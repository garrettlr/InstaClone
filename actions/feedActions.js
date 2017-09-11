//@flow
export const ADD_DATA_AJAX = 'ADD_DATA_AJAX';
export const INCREASE_POSTS = 'INCREASE_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const LIKE = 'LIKE';

// url for AJAX
const url = 'https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json';

function getPosts(url: string, dispatch: ()=> void) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      const urls = JSON.parse(xhr.responseText);
      const verifiedUrls = urls.map(url => verifyPosts(url));

      Promise.all(verifiedUrls: []).then(cleanUrls => {
        const urls = cleanUrls.filter(url => url.length > 0);
        dispatch(addData(urls));
      });
    }
  };
  xhr.send();
}

// returns valid urls or empty strings to be filtered out.
function verifyPosts(url: string) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(url);
      } else {
        resolve('');
      }
    };

    xhr.onerror = () => resolve('');
    xhr.send();
  });
}

function addData(payload) {
  return {
    type: ADD_DATA_AJAX,
    payload,
  };
}

export function addDataAjax() {
  return dispatch => getPosts(url, dispatch);
}
// dispatches ajax ac if post container at full scroll
export function scroll(target: {}) {
  return dispatch => {
    const scrollHeight = target.scrollHeight;
    const scrollTop = target.scrollTop;
    const clientHeight = target.clientHeight;

    if (scrollHeight - scrollTop === clientHeight) {
      dispatch(addDataAjax());
    }
  };
}

type payloadType = {
  +type: number,
  +type: string,
  +type: string,
};

export function addComment(payload) {
  return {
    type: ADD_COMMENT,
    payload,
  };
}


// adds a comment if it exists
export function addCommentThunk(postNo: number, comment: string) {
  return dispatch => {
    const cleanComment = comment.trim();
    if (cleanComment.length > 0) {
      const payload = {
        postNo,
        poster: 'glevy__',
        comment: cleanComment,
      };
      dispatch(addComment(payload));
    }
  };
}

export function like(postNo: number = 0) {
  return {
    type: LIKE,
    payload: postNo
  };
}
