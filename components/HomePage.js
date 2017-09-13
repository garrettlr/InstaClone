import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  Link,
  Redirect,
  // withRouter
} from 'react-router-dom';
import styles from './HomePage.scss';


export default class HomePage extends Component {
  handleUsername = event => {
    const username = event.target.value + event.key;
    this.props.getUser(username);
  }

  handlePassword = event => {
    const password = event.target.value + event.key;
    this.props.getPass(password);
  }

  handleAuth = isAuthenticated => {
    if (isAuthenticated) return (<Redirect to="/feed">
      <div id={styles.loginButton}>
        Login
      </div>
    </Redirect>);

    return (<Link to="/">
      <p>You Must Sign in to view your feed</p>
    </Link>);
  }

  render() {
    const { login, checkUser } = this.props;
    console.log(this.props);
    const { isAuthenticated } = login;
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
          <div id={styles.loginButton} onClick={()=>checkUser()}>
            Login
          </div>
          {this.handleAuth(isAuthenticated)}
        </div>
      </div>
    );
  }
}
