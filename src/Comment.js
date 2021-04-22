import React from 'react';

const Comment = props => {
  const comments = props.comments;

  // console.log({props});

  const result = comments.map((comment, index) => {
    return (
      <li
        className="comment__list-item"
        key={index}
      >
        <div
          className="comment__list-item-name">
          {comment.name}
        </div>
        <p
          className="comment__list-item-text">
          {comment.text}
        </p>
        <time
          className="comment__list-item-time"
        >
          {new Date(comment.date).toLocaleDateString()}, {new Date(comment.date).toLocaleTimeString()}
        </time>
        <button
          className="comment__list-item-delete-btn"
          onClick={() => {
            props.deleteComment(index);
            // props.deleteRenderedComment();

          }}
        >
          Delete
        </button>
      </li>
    )
  })

  return result;
}

export default Comment;