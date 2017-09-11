// @flow
import React from 'react';
import styles from './Feed.scss';

type Props = {
  commentor: string,
  comment: string,
}
const Comment = (props: Props) => {
  const { commentor, comment } = props;
  return (
    <p className={styles.comment}>
      <span className={styles.commentor}>{commentor}</span>
      {comment}
    </p>
  );
};

export default Comment;
