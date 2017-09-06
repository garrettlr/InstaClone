import React from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';


export default (props) => {
  const { poster, source } = props;

  return (
    <div className={'header'}>
      <img className={styles.poster} src={source} />
      <p className={styles.postername}>{poster}</p>
    </div>
  );
};
