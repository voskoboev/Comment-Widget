import React from 'react'
import './CommentList.scss'
import Comment from '../Comment/Comment'

const CommentList = props => (
  <ul className="comment__list" >
    {
      props.comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={props.deleteComment}
        />
      ))
    }
  </ul>
)

export default CommentList
