// @flow
import React, { Component } from 'react';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';
import Header from './Header';
import FeedBox from './FeedBox';

export default class Feed extends Component {
  props: {
    feed: [],
    like: () => void,
    addCommentThunk: () => void,
    scroll: () => void,
  }

  /* eslint-disable no-param-reassign */
  handleComment = (event, postNo) => {
    if (event.key === 'Enter') {
      this.props.addCommentThunk(postNo, event.target.value);
      event.target.value = null;
    }
  }
  /* eslint-enable */

  render() {
    const { feed, scroll, like } = this.props;
    const localScroll = event => scroll(event.target);
    /* eslint-disable react/no-array-index-key */
    // no solid choice for unique keys except index, due to data shape.
    // acceptable for this simple demo case only.
    const posts = feed.map((post, i) => {
      const { poster, source, postImg, comments, likes, liked } = post;
      return (
        <FeedBox
          key={source + i}
          postNo={i}
          poster={poster}
          source={source}
          postImg={postImg}
          comments={comments}
          likes={likes}
          liked={liked}
          like={like}
          handleComment={this.handleComment}
        />
      );
    });
    /* eslint-enable */
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.masthead}>
          <div
            className={`${styles.postcontainer} ${bootstrap.container}`}
            onScroll={localScroll}
          >
            {posts}
          </div>
        </div>
      </div>
    );
  }
}
