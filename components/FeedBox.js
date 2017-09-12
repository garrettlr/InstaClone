// @flow
import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';
import FeedHeader from './FeedHeader';
import FeedFooter from './FeedFooter';
import FeedImg from './FeedImg';

type Props = {
  poster: string,
  source: string,
  postImg: string,
  comments: [],
  likes: number,
  like: () => void,
  liked: boolean,
  handleComment: () => void,
  postNo: number,
}

const FeedBox = (props: Props) => {
  const { poster, source, postImg, comments, likes, like, liked, handleComment, postNo } = props;
  return (
    <div className={`${bootstrap.row} ${styles.postbox}`}>
      <div className={`${styles.feedbox} ${bootstrap['col-sm-6']}`}>

        <FeedHeader
          poster={poster}
          source={source}
        />

        <FeedImg
          postImg={postImg}
          postNo={postNo}
          like={like}
        />

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
};

export default FeedBox;
