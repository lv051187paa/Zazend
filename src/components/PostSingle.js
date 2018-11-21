import React from 'react';
import Comment from './Comment';

const postSingle = props => {
    return(
        <div className="single">
      
        <div className="single__image">
          <img src="/img/1920x1280.png" alt="main" />
        </div>
        <div className="single__body">
          <h2 className="single__title">{props.post.title}</h2>
          <p className="single__author">
          Author <span>{props.post.author ? props.post.author.name : null}</span>
          </p>
          <p className="single__text">{props.post.body}</p>
        </div>
        <div className="single__comments">
            <p className="single__comments-header">Comments</p>
            {props.post.comments ? 
                props.post.comments.map(comment => {
                    return (
                        <Comment key={comment.id} comment={comment}/>
                    )
                })
                : null}
        </div>
      </div>
    )
}

export default postSingle;