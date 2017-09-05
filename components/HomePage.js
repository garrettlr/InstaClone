import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.scss';

export default class HomePage extends Component {
  constructor (props) {
    super (props);

  };

  render() {
    return (
      <div>
        <div className={styles.login}>
          <input
            classname={styles.uname}
            placeholder="Username"
            type="text"
            >
            </input>
          <input
            classname={styles.pword}
            placeholder="Password"
            type="password"
            >
            </input>

        </div>
      </div>
    );
  }
}
