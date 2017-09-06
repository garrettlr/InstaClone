import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import styles from './HomePage.scss';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsername(event) {
    if (event.target.value.trim().length > 0) {
      this.setState({
        username: event.target.value
      });
    }
  }

  handlePassword(event) {
    if (event.target.value.trim().length > 0) {
      this.setState({
        password: event.target.value
      });
    }
  }

  handleLogin(event) {
    console.log(this.state);
  }

  render() {
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
          <div id={styles.loginButton} onClick={this.handleLogin}>
            <Link to="/feed">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}
