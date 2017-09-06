import React, { Component } from 'react';
import styles from './Feed.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <header className={`${styles.headerBar}`}>
        <div className={styles.headerLogos}>
          <img src='logo.jpg' className={styles.logo} />
          <img className={`${styles.insta}`} src='instagram-1.svg' />
        </div>

        <div className={styles.searchBar}>
          <input id ={styles.searchField} placeholder="Search"/>
          <i className={`${styles.glass} fa fa-search`} aria-hidden="false"></i>
        </div>

        <div className={styles.icons}>
          <ul className={styles.iconslist}>
            <li className={styles.pic}> <img className={styles.pic} src ='https://scontent-lax3-2.cdninstagram.com/t51.2885-19/s320x320/13388521_1100683993327133_825464093_a.jpg'/></li>
            <li className={styles.uname}><p className ={styles.userName}> glevy__</p></li>
          </ul>
        </div>
      </header>
    );

  }
}
