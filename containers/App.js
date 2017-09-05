import React, { Component } from 'react';
import type { Children } from 'react';
import styles from '../components/app.scss';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}
