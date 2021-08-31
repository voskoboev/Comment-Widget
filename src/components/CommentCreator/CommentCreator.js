import React from 'react'
import './CommentCreator.scss'

const CommentCreator = ({ props }) => {

  const handleBtnClickAndCheckInputs = () => {
    const nameInput = document.querySelector('.comment__name-input'),
      textarea = document.querySelector('.comment__textarea')

    if (!nameInput.value || !textarea.value) return alert('Enter values!')

    props.addListComment()

    console.log(props);

    nameInput.value = ''
    textarea.value = ''
  }

  return (
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
        onClick={() => handleBtnClickAndCheckInputs()}
      >
        Add comment
      </button>
    </>
  )
}

export default CommentCreator
