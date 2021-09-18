import React from 'react'
import './CommentCreator.scss'

const CommentCreator = ( props ) => {

  console.log('comment creator props', props);
  
  function createComment() {
    const name = document.querySelector('.comment__name-input').value,
      text = document.querySelector('.comment__textarea').value,
      date = new Date(),
      id = ''
      // id = this.props.getState().length.toString()

    this.props.addListComment(name, text, date, id)

    // const newCommentItem = {
    //   name,
    //   text,
    //   date,
    //   id
    // }

    // localStorage.setItem('storageComments', JSON.stringify([...this.props.comments, newCommentItem]))
  }

  const handleBtnClickAndCheckInputs = () => {
    const nameInput = document.querySelector('.comment__name-input'),
      textarea = document.querySelector('.comment__textarea')

    if (!nameInput.value || !textarea.value) return alert('Enter values!')

    createComment()

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
