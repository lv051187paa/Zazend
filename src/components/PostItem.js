import React from "react";
import { Link } from "react-router-dom";

import "./postItem.scss";

const PostItem = props => {
  return (
    <div className="post">
      <div className="post__thumb">
        <img src="/img/300.png" alt="post thumb" />
      </div>
      <div className="post__text">
        <h3 className="post__title"><Link to={`/posts/${props.post.id}`}>{props.post.title}</Link></h3>
        <p className="post__body">
          {props.post.body.length > 100
            ? `${props.post.body.substr(0, 100)}...`
            : props.post.body}
        </p>
      </div>
    </div>
  );
};

export default PostItem;
