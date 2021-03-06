import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import * as loginActions from '../actions/loginActions';

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
