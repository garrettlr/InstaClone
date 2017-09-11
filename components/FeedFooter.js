//@flow
import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';
import Comment from './Comment';

type Props = {
  likes: number,
  comments: [],
  like: () => void,
  postNo: number,
  handleComment: () => void,
  liked: boolean,
}

export default (props: Props) => {
  const { likes, comments, like, postNo, handleComment, liked } = props;
  const commentsJSX = comments.map((comment) => (<Comment
    key={`${comment.comment} ${comment.commentor}`}
    commentor={comment.commentor}
    comment={comment.comment}
  />));

  const likedClass = liked ? `fa fa-heart fa-2x ${styles.liked} ${styles.heart}` : `fa fa-heart-o fa-2x ${styles.unliked} ${styles['heart-o']}`;

  // set focus on comment input when bubble is clicked
  let commentInput = null;
  const handleClick = () => {
    commentInput.focus();
  };
  return (
    <div className={styles.bottom}>
      <div className={styles.buttonbox}>
        <i
          className={likedClass}
          aria-hidden={'true'}
          onClick={() => like(postNo)}
        />
        <i
          className={`fa fa-comment-o fa-2x ${styles.comment}`}
          aria-hidden={'true'}
          onClick={handleClick}

        />
      </div>
      <div className={styles.likesbox}>
        <p className={styles.likes}>
          <span className={styles.noLikes}>{likes}</span>
          <span className={styles.endtext}> likes</span>
        </p>
      </div>
      <div className={styles.commentsbox}>
        {commentsJSX}
        <hr className={styles['half-rule']} />
        <div className={styles.addcomment}>
          <input
            className={styles.newcomment}
            placeholder={'Add a comment...'}
            onKeyPress={(event) => handleComment(event, postNo)}
            ref={(input) => { commentInput = input; }}
          />
        </div>
      </div>
    </div>
  );
};
