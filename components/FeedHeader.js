//@flow
import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';

type Props = {
  poster: string,
  source: string,
}

const FeedHeader = (props: Props) => {
  const { poster, source } = props;

  return (
    <div className={'header'}>
      <img className={styles.poster} src={source} />
      <p className={styles.postername}>{poster}</p>
    </div>
  );
};

export default FeedHeader;
