import { ADD_DATA_AJAX, INCREASE_POSTS, ADD_COMMENT, LIKE } from '../actions/feedActions';
import addLike from './feedFunctions';
const feedDefault = [
  {
    poster: 'glevy__',
    source: 'https://scontent-lax3-2.cdninstagram.com/t51.2885-19/s320x320/13388521_1100683993327133_825464093_a.jpg',
    postImg: 'https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/13413424_1003508109727031_73332017_n.jpg',
    comments: [],
    likes: 2,
  },
  {
    poster: 'glevy__x',
    source: 'https://scontent-lax3-2.cdninstagram.com/t51.2885-19/s320x320/13388521_1100683993327133_825464093_a.jpg',
    postImg: 'https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/13413424_1003508109727031_73332017_n.jpg',
    comments: [],
    likes: 2,
  }
]

const feed = (state = feedDefault, action) => {
  switch (action.type) {
    case ADD_DATA_AJAX:
      return state;
    case INCREASE_POSTS:
      return state;
    case ADD_COMMENT:
      return state;
    case LIKE:
      return addLike(state, action.payload);
    default:
      return state;
  }
}

export default feed;
