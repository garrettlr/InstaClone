//@flow
import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';

type Props = {
  poster: string,
  source: string,
}

export default (props: Props) => {
  const { poster, source } = props;

  return (
    <div className={'header'}>
      <img className={styles.poster} src={source} />
      <p className={styles.postername}>{poster}</p>
    </div>
  );
};
