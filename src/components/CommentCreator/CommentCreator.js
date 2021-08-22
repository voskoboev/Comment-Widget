import React from 'react'
import './CommentCreator.scss'

const CommentCreator = ({ handleBtnClick }) => (
  <>
    <h1 className="comment_heading">
      Comment Widget
    </h1>
    <input
      className="comment__name-input" type="text"
      placeholder="Name"
    />
    <textarea
      className="comment__textarea"
      placeholder="Text"
    >
    </textarea>
    <button
      className="comment__btn"
      onClick={() => handleBtnClick()}
    >
      Add comment
    </button>
  </>
)


export default CommentCreator
