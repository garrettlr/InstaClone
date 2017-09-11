// @flow
import React from 'react';
import styles from './Feed.scss';

export default (props) => {
  const { commentor, comment } = props;
  return (
    <p className={styles.comment}>
      <span className={styles.commentor}>{commentor}</span>
      {comment}
    </p>
  );
};
