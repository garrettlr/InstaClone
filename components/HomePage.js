import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.scss';
console.log('styles: ', styles);


export default class HomePage extends Component {
  constructor (props) {
    super (props);

  };

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.login}>
          <div id={styles.titlebox}>
            <img id={styles.title} src = "instagram-1.svg" />
          </div>
          <input
            className={styles.input}
            placeholder="Username"
            type="text"
            >
            </input>
          <input
            className={styles.input}
            placeholder="Password"
            type="password"
            >
            </input>
          <div id={styles.loginButton}>
            <Link to="/feed">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}
