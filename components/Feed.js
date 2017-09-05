import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';
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
        <div className={styles.masthead}>
          <div className={`${styles.postcontainer} ${bootstrap.container}`}>
            <div className = {`${bootstrap.row} ${styles.postbox}`}>
              <div className={`${bootstrap['col-md-9']} ${styles.feedbox}`}>
                <div className={"header"}>
                  <img className={styles.poster} src = 'https://scontent-lax3-2.cdninstagram.com/t51.2885-19/s320x320/13388521_1100683993327133_825464093_a.jpg' />
                  <p className={styles.postername}>glevy__</p>
                </div>

                <div className={styles.imgbox}>
                  <img className = {bootstrap['img-responsive']} src = 'https://scontent-lax3-2.cdninstagram.com/t51.2885-15/e35/13413424_1003508109727031_73332017_n.jpg' />
                </div>
                <div className={styles.bottom}>
                  <div className={styles.buttonbox}>
                    <i className={"fa fa-heart-o fa-2x unliked heart"} aria-hidden={"true"}></i>
                    <i className={"fa fa-comment-o fa-2x"} aria-hidden={"true"}></i>
                  </div>
                  <div className={styles.likesbox}>
                      <p className={styles.likes}><span className ={styles.noLikes}>0</span> <span className ={styles.endtext}> likes</span></p>
                  </div>
                  <div className={styles.commentsbox}>

                    <hr className ={styles['half-rule']}></hr>
                    <div className={styles.addcomment}>
                      <input className={styles.newcomment} placeholder={"Add a comment..."} />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
