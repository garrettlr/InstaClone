import ADD_DATA_AJAX from '../actions/feedActions';
import INCREASE_POSTS from '../actions/feedActions';
import ADD_COMMENT from '../actions/feedActions';
import LIKE from '../actions/feedActions';

const feed = [
  {
    poster: 'glevy__',
    source: 'https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/13413424_1003508109727031_73332017_n.jpg',
    postImg: 'https://scontent-lax3-2.cdninstagram.com/t51.2885-19/s320x320/13388521_1100683993327133_825464093_a.jpg',
    comments: [],
    likes: 2,
  }
]

const feedReducer = (state = feed, action) => {
  switch (action.type) {
    case ADD_DATA_AJAX:
      return state;
    case INCREASE_POSTS:
      return state;
    case ADD_COMMENT:
      return state;
    case LIKE:
      return state;
    default:
      return state;
  }
}

export default feedReducer;
