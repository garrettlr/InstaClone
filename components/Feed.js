import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';
import Header from './Header';
import FeedBox from './FeedBox';
export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
        />
        <div className={styles.masthead}>
          <div className={`${styles.postcontainer} ${bootstrap.container}`}>
            <div className = {`${bootstrap.row} ${styles.postbox}`}>
              <FeedBox
              />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
