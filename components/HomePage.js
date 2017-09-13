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

  handleUsername = event => this.props.createUsername(event);

  handlePassword = event => this.props.createPassword(event);

  handleClick = () => this.props.checkUser();

  render() {

    const { login, checkUser } = this.props;
    const { isAuthenticated, failedAuth } = login;
    const failure = (<p className={styles.error}>Invalid username or password</p>);
    const auth = (<Redirect to="/feed" />);

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
            onClick={this.handleClick}
            role="button"
            tabIndex="-1"
          >
            Login
          </div>
          {isAuthenticated ? auth : null}
          {failedAuth ? failure : null}
        </div>
      </div>
    );
  }
}
