// @flow
import React from 'react';
import styles from './Feed.scss';

type Props = {
  poster: string,
  source: string,
}

const FeedHeader = ({ poster, source }: Props) => {
  return (
    <div className={'header'}>
      <img className={styles.poster} src={source} alt={'user\'s profile pic'} />
      <p className={styles.postername}>{poster}</p>
    </div>
  );
};

export default FeedHeader;
