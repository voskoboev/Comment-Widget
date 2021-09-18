import { ADD_COMMENT, DELETE_COMMENT } from "./actionTypes"

export function addComment() {
  return {
    type: ADD_COMMENT,
    payload: {
      name,
      text,
      date,
      id,
    }
  }
}

export function deleteComment(deletingComment) {
  return {
    type: DELETE_COMMENT,
    deletingComment
  }
}