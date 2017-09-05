import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';
import FeedHeader from './FeedHeader';
import FeedFooter from './FeedFooter';

export default (props) => {
  const { poster, source, postImg, comments, likes, like, addComment, postNo } = props;
  return (
    <div className={`${bootstrap.row} ${styles.postbox}`}>
      <div className={`${styles.feedbox} ${bootstrap['col-sm-6']}`}>

        <FeedHeader
          poster={poster}
          source={source}
        />

        <div className={styles.imgbox}>
          <img className = {bootstrap['img-responsive']} src={postImg} />
        </div>

        <FeedFooter
          likes={likes}
          postNo={postNo}
          like={like}
          comments={comments}
        />
    </div>
    </div>

  );
}


//36-62;
