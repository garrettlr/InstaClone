import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Feed from '../components/Feed';

import * as FeedActions from '../actions/feedActions';

function mapStateToProps(state) {
  return {
    feed: state.feed,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FeedActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
