import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadingPosts,
  loadingSinglePost,
  nextPage,
  prevPage
} from "../actions/index";
import PostList from "./PostList";
import Pagination from "./Pagination";
import Preloader from "./Preloader";

import "./home.scss";
class Home extends Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div className="list-wrapper">
        {this.props.postsControler.loading ? (
          <Preloader />
        ) : (
          <PostList
            getPostDetail={this.props.postsControler.loadPostDetail}
            posts={this.props.postsControler.currentPosts}
            errorLoad={this.props.postsControler.loadError}
            textError={this.props.postsControler.textError}
          />
        )}
        {this.props.postsControler.totalPages > 1 ? (
          <Pagination
            currentPage={this.props.postsControler.currentPage}
            nextPage={this.props.nextPage}
            prevPage={this.props.prevPage}
            totalPages={this.props.postsControler.totalPages}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postsControler: state.postList
  };
};

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadingPosts()),
  loadPostDetail: postId => dispatch(loadingSinglePost(postId)),
  nextPage: page => dispatch(nextPage(page)),
  prevPage: page => dispatch(prevPage(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
