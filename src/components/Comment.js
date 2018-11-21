import React from "react";

import './comments.scss';

const Comment = props => (
  <div className="comment">
    <h4 className="comment__author">{props.comment.name}</h4>
    <h5 className="comment__email">{props.comment.email}</h5>
    <p className="comment__body">{props.comment.body}</p>
  </div>
);

export default Comment;
