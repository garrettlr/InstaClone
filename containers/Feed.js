// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Feed from '../components/Feed';

import * as FeedActions from '../actions/feedActions';

function mapStateToProps(state: {}) {
  return {
    feed: state.feed,
  };
}

function mapDispatchToProps(dispatch: () => void) {
  return bindActionCreators(FeedActions : {}, dispatch: () => void);
}

export default connect(mapStateToProps: () => void, mapDispatchToProps: ()=> void)(Feed);
