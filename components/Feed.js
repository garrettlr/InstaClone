
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Feed.scss';
import bootstrap from './bootstrap/bootstrap.css';
import Header from './Header';
import FeedBox from './FeedBox';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.handleComment = this.handleComment.bind(this);
  }

  handleComment(event, postNo) {
    if (event.key === 'Enter'){
      this.props.addCommentThunk(postNo, event.target.value);
      event.target.value = null;
    }
  }

  render() {
    const feed = this.props.feed;

    const posts = feed.map((post, i) => {
      const { poster, source, postImg, comments, likes, liked } = post;
      const { like } = this.props;
      return (
        <FeedBox
          key={i}
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

    return (
      <div className={styles.container}>
        <Header />

        <div className={styles.masthead}>
          <div
            className={`${styles.postcontainer} ${bootstrap.container}`}
            onScroll={(event)=>this.props.scroll(event.target)}
          >
              {posts}
          </div>
        </div>

      </div>
    );
  }
}
