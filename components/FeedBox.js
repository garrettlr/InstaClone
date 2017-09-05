import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';
import FeedHeader from './FeedHeader';
import FeedFooter from './FeedFooter';

export default (props) => {
  const { poster, source, postImg, comments, likes, like, liked, handleComment, postNo } = props;
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
          liked={liked}
          comments={comments}
          handleComment={handleComment}
        />
    </div>
    </div>

  );
}


//36-62;
