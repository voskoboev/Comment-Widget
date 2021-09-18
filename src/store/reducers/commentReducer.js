import { ADD_COMMENT, DELETE_COMMENT } from '../actions/actionTypes'

const initialState = {
  // comments: JSON.parse(localStorage.getItem('storageComments'))
  comments: []
}

// function deleteListComment(deletingComment) {
//   const filteredComments = [...this.props.comments].filter(comment => {
//     return comment.id !== deletingComment
//   })

//   localStorage.setItem('storageComments', JSON.stringify(filteredComments))

// this.setState({ comments: filteredComments })
// }

export const commentReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comments: [
          ...prevState,
          {
            name: action.payload.name,
            text: action.payload.text,
            date: action.payload.date,
            id: action.payload.id
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