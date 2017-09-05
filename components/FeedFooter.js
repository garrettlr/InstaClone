import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';


export default (props) => {
  const { likes, comments, like, postNo } = props;
  return (
    <div className={styles.bottom}>
      <div className={styles.buttonbox}>
        <i
          className={"fa fa-heart-o fa-2x unliked heart"}
          aria-hidden={"true"}
          onClick={()=>like(postNo)}
          >
        </i>
        <i
          className={"fa fa-comment-o fa-2x"}
          aria-hidden={"true"}>

        </i>
      </div>
      <div className={styles.likesbox}>
        <p className={styles.likes}>
          <span className ={styles.noLikes}>{likes}</span>
          <span className ={styles.endtext}> likes</span>
        </p>
      </div>
      <div className={styles.commentsbox}>
        <hr className={styles['half-rule']}></hr>
        <div className={styles.addcomment}>
          <input className={styles.newcomment} placeholder={"Add a comment..."} />
        </div>
      </div>
    </div>
  );
}
