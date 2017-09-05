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
      <div>
        <div className={`${styles.login}`}>
          <input
            className={`${styles.input}`}
            placeholder="Username"
            type="text"
            >
            </input>
          <input
            className={`${styles.input}`}
            placeholder="Password"
            type="password"
            >
            </input>

        </div>
      </div>
    );
  }
}
