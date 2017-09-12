// @flow
import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';

type Props = {
  postImg: string,
  like: () => void,
  postNo: number,
}

const FeedImg = (props: Props) => {
  const { postImg, like, postNo } = props;

  const localLike = () => like(postNo);

  return (
    <div className={styles.imgbox}>
      <img
        className={bootstrap['img-responsive']}
        onDoubleClick={localLike}
        src={postImg}
        alt={'an instagram post'}
      />
    </div>
  );
};

export default FeedImg;
