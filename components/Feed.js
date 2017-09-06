
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
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleComment(event, postNo) {
    if (event.key === 'Enter' && event.target.value.trim().length > 0){
      const payload = {
        postNo,
        poster: 'glevy__',
        comment: event.target.value,
      }
      this.props.AddComment(payload);
      event.target.value = null;
    }
  }

  handleScroll(event) {
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;
    const clientHeight = event.currentTarget.clientHeight;
    if (scrollHeight - scrollTop === clientHeight) {
      // ajax call.
      this.props.addDataAjax();
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
            onScroll={(event)=>this.handleScroll(event)}
          >
              {posts}
          </div>
        </div>

      </div>
    );
  }
}
