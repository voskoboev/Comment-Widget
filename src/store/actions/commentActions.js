import { ADD_COMMENT, DELETE_COMMENT } from "./actionTypes"

// function addListComment() {
// const name = document.querySelector('.comment__name-input').value,
//   text = document.querySelector('.comment__textarea').value,
//   date = new Date(),
//   id = this.props.comments.length.toString()

// const newCommentItem = {
//   name,
//   text,
//   date,
//   id
// }

// localStorage.setItem('storageComments', JSON.stringify([...this.props.comments, newCommentItem]))

// this.setState({ ...this.props, comments: [...this.props.comments, newCommentItem] })
// }

// function deleteListComment(deletingComment) {
//   const filteredComments = [...this.props.comments].filter(comment => {
//     return comment.id !== deletingComment
//   })

//   localStorage.setItem('storageComments', JSON.stringify(filteredComments))

  // this.setState({ comments: filteredComments })
// }

export function addComment(name, text, date, id) {
  const name = document.querySelector('.comment__name-input').value,
    text = document.querySelector('.comment__textarea').value,
    date = new Date(),
    id = this.props.comments.length.toString()

  const newCommentItem = {
    name,
    text,
    date,
    id
  }

  localStorage.setItem('storageComments', JSON.stringify([...this.props.comments, newCommentItem]))

  return {
    type: ADD_COMMENT,
    name,
    text,
    date,
    id,
  }
}

export function deleteComment(deletingComment) {
  const filteredComments = [...this.props.comments].filter(comment => {
    return comment.id !== deletingComment
  })

  localStorage.setItem('storageComments', JSON.stringify(filteredComments))

  return {
    type: DELETE_COMMENT,
    deletingComment
  }
}