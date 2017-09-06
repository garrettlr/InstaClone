import { ADD_DATA_AJAX, ADD_COMMENT, LIKE } from '../actions/feedActions';
import addLike from './feedFunctions/addLikes';
import addComment from './feedFunctions/addComment';
import addPosts from './feedFunctions/addPosts';
const feedDefault = [
  {
    poster: 'glevy__',
    source: 'https://scontent-lax3-2.cdninstagram.com/t51.2885-19/s320x320/13388521_1100683993327133_825464093_a.jpg',
    postImg: 'https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/13413424_1003508109727031_73332017_n.jpg',
    comments: [],
    likes: 2,
    liked: false,
  },
]

const feed = (state = feedDefault, action) => {
  switch (action.type) {
    case ADD_DATA_AJAX:
      return addPosts(state, action.payload);
    case ADD_COMMENT:
      return addComment(state, action.payload);
    case LIKE:
      return addLike(state, action.payload);
    default:
      return state;
  }
}

export default feed;
