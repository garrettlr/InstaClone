import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  Link,
  Redirect,
  // withRouter
} from 'react-router-dom';
import styles from './HomePage.scss';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername = event => {
    if (event.target.value.trim().length > 0) {
      const payload = {
        username: event.target.value,
        password: this.state.password
      }
      this.setState(payload);
      this.props.checkUser(payload);
    }
  }

  handlePassword = event => {
    if (event.target.value.trim().length > 0) {
      const payload = {
        username: this.state.username,
        password: event.target.value,
      }
      this.setState(payload);

      this.props.checkUser(payload);
    }
  }

  handleAuth = isAuthenticated => {
    console.log(isAuthenticated);
    if (isAuthenticated) return (<Redirect to="/feed">
      <div id={styles.loginButton}>
        Login
      </div>
    </Redirect>);

    return (<Link to="/">
      <div id={styles.loginButton}>
        Login
      </div>
    </Link>);
  }

  render() {
    const { checkUser } = this.props;
    return (
      <div className={styles.main}>
        <div className={styles.login}>
          <div id={styles.titlebox}>
            <img id={styles.title} src="instagram-1.svg" />
          </div>
          <input
            className={styles.input}
            placeholder="Username"
            type="text"
            onKeyPress={this.handleUsername}
          />
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            onKeyPress={this.handlePassword}
          />

          {this.handleAuth(this.props.login.isAuthenticated)}

            {/* <Link to="/feed">
              <div id={styles.loginButton}>
                Login
              </div>
            </Link> */}
        </div>
      </div>
    );
  }
}
