
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';
import Header from './Header';
import FeedBox from './FeedBox';

export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const feed = this.props.feed.slice(0);
    const posts = feed.map((post, i) => {
      const { poster, source, postImg, comments, likes } = post;
      const { like, addComment } = this.props;
      return (
        <FeedBox
          key={i}
          postNo={i}
          poster={poster}
          source={source}
          postImg={postImg}
          comments={comments}
          likes={likes}
          like={like}
          addComment={addComment}
        />
      );
    });

    return (
      <div className={styles.container}>
        <Header />

        <div className={styles.masthead}>
          <div className={`${styles.postcontainer} ${bootstrap.container}`}>
              {posts}
          </div>
        </div>

      </div>
    );
  }
}
