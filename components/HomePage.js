import React, { Component } from 'react';
import {
  Link,
  Redirect,
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
    if (isAuthenticated) return (<Redirect to="/feed" />)
  }

  displayFailed = failedAuth => {
    return failedAuth? <p>You Must Sign in to view your feed</p> : null;
  }

  render() {
    const { login, checkUser } = this.props;
    const { isAuthenticated, failedAuth } = login;
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
          {this.displayFailed(failedAuth)}
        </div>
      </div>
    );
  }
}
