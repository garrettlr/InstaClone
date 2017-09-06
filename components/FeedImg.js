import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';

export default (props) => {
  const { postImg, like, postNo } = props;
  return (
    <div className={styles.imgbox}>
      <img className={bootstrap['img-responsive']} onDoubleClick={()=>like(postNo)} src={postImg} />
    </div>
  );
};