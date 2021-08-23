import { ADD_COMMENT, DELETE_COMMENT } from "./actionTypes"

export function addListComment(name, text, date, id) {
  return {
    type: ADD_COMMENT,
    name: name,
    text: text,
    date: date,
    id: id,
  }
}

export function deleteListComment(deletingComment) {
  return {
    type: DELETE_COMMENT,

  }
}