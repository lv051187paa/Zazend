import React, { Component } from "react";
import { connect } from "react-redux";
import { loadingSinglePost } from "../actions/index";
import PostSingle from './PostSingle';
import Error from './Error';
import Preloader from "./Preloader";

import "./postDetails.scss";

class PostDetails extends Component {
  componentDidMount() {
    this.props.load(this.props.match.params.id);
  }
  render() {
    const { post, loadError, loading, textError } = this.props.singlePostController;
    console.log(this.props.singlePostController);
    return (
      loading ? <Preloader /> :
      loadError ? <Error textError={textError}/> : <PostSingle post={post}/>
    );
  }
}

const mapStateToProps = state => ({
  singlePostController: state.singlePost
});

const mapDispatchToProps = dispatch => ({
  load: postId => dispatch(loadingSinglePost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
