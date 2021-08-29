export { ADD_COMMENT, DELETE_COMMENT } from '../actions/actionTypes'

const initialState = {
  comments: []
}

export const commentReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comments: [
          ...prevState,
          {
            name: action.name,
            text: action.text,
            date: action.date,
            id: action.id
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