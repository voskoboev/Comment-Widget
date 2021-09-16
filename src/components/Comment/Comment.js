import React from 'react'
import './Comment.scss'

const Comment = props => {
  const { id, name, text, date } = props.comment

  return (
    <li className="comment__list-item">
      <div className="comment__list-item--name">
        {name}
      </div>
      <p className="comment__list-item--text">
        {text}
      </p>
      <div className="comment__list-item-wrapper">
        <div className="comment__list-item--time">
          {new Date(date).toLocaleDateString()},
          {new Date(date).toLocaleTimeString()}
        </div>
        <button
          className="comment__list-item--delete-btn"
          onClick={() => props.deleteComment(id)}
        >
          Delete
        </button>

      </div>
    </li>
  )
}

export default Comment
