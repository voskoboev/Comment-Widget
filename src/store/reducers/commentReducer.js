import { ADD_COMMENT, DELETE_COMMENT } from '../actions/actionTypes'

const initialState = {
  comments: JSON.parse(localStorage.getItem('storageComments'))
}

// function deleteListComment(deletingComment) {
//   const filteredComments = [...this.props.comments].filter(comment => {
//     return comment.id !== deletingComment
//   })

//   localStorage.setItem('storageComments', JSON.stringify(filteredComments))

// this.setState({ comments: filteredComments })
// }

export const commentReducer = (prevState = initialState, action) => {
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

  // localStorage.setItem('storageComments', JSON.stringify([...this.props.comments, newCommentItem]))

  switch (action.type) {
    case ADD_COMMENT:
      return {
        comments: [
          ...prevState,
          {
            name: newCommentItem.name,
            text: newCommentItem.text,
            date: newCommentItem.date,
            id: newCommentItem.id
          }
        ]
      }
    // case DELETE_COMMENT:
    //   return {
    //     comments: [...prevState]
    //   }
    default:
      return prevState
  }
}