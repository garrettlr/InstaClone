// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './HomePage.scss';


export default class HomePage extends Component {
  props: {
    getUser: () => void,
    getPass: () => void,
    checkUser: () => void,
    login: {},
  }
  handleUsername = event => {
    const username = event.target.value + event.key;
    this.props.getUser(username);
  }

  handlePassword = event => {
    const password = event.target.value + event.key;
    this.props.getPass(password);
  }

  handleAuth = isAuthenticated => {
    if (isAuthenticated) return (<Redirect to="/feed" />);
  }

  render() {
    const { login, checkUser } = this.props;
    const { isAuthenticated, failedAuth } = login;
    const failure = (<p className={styles.error}>You Must Sign in to view your feed</p>);
    return (
      <div className={styles.main}>
        <div className={styles.login}>
          <div id={styles.titlebox}>
            <img
              id={styles.title}
              src="instagram-1.svg"
              alt="logo"
            />
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
          <div
            id={styles.loginButton}
            onClick={() => checkUser()}
            role="button"
            tabIndex="-1"
          >
            Login
          </div>
          {this.handleAuth(isAuthenticated)}
          {failedAuth ? failure : null}
        </div>
      </div>
    );
  }
}
