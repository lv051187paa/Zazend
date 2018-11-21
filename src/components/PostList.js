import React from "react";
import PostItem from "./PostItem";
import Error from "./Error";

import "./postlist.scss";

const PostList = props => {
  return (
    <div className="list">
      {!props.errorLoad ? props.posts.map(post => {
        return <PostItem loadPostDetail={props.loadPostDetail} key={post.id} post={post}/>;
      }) : 
      <Error textError={props.textError}/>
      }
    </div>
  );
};

export default PostList;
