import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Feed.scss';
import Header from './Header';
export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
        />
      </div>
    );
  }
}
