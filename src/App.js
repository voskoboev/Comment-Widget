import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import CommentList from './components/CommentList/CommentList'
import CommentCreator from './components/CommentCreator/CommentCreator'
import { addListComment, deleteListComment } from './store/actions/commentAction'

const App = props => {
  const { comments, addListComment, deleteListComment } = props

  return (
    <div>
      <CommentList
        comments={comments}
        deleteComment={deleteListComment}
      />
      <CommentCreator
        addListComment={addListComment}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    comments: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addListComment: (name, text, date, id) => dispatch(addListComment(name, text, date, id)),
    deleteListComment: (deletingComment) => dispatch(deleteListComment(deletingComment))
  }
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       comments: [],
//     }

//     this.deleteComment = this.deleteComment.bind(this)
//   }

//   componentDidMount() {
//     const storageComments = JSON.parse(localStorage.getItem('storageComments'))
//     const stateComments = this.state.comments

//     if (storageComments === null) return

//     storageComments.forEach(comment => stateComments.push(comment))

//     this.forceUpdate()
//   }

  // addComment() {
  //   const name = document.querySelector('.comment__name-input').value,
  //     text = document.querySelector('.comment__textarea').value,
  //     date = new Date(),
  //     id = this.state.comments.length.toString()

  //   const newCommentItem = {
  //     name,
  //     text,
  //     date,
  //     id
  //   }

  //   localStorage.setItem('storageComments', JSON.stringify([...this.state.comments, newCommentItem]))

  //   this.setState({ ...this.state, comments: [...this.state.comments, newCommentItem] })
  // }

  // deleteComment(deletingComment) {
  //   const filteredComments = [...this.state.comments].filter(comment => {
  //     return comment.id !== deletingComment
  //   })

  //   localStorage.setItem('storageComments', JSON.stringify(filteredComments))

  //   this.setState({ comments: filteredComments })
  // }

//   handleBtnClickAndCheckInputs() {
//     const nameInput = document.querySelector('.comment__name-input'),
//       textarea = document.querySelector('.comment__textarea')

//     if (!nameInput.value || !textarea.value) return alert('Enter values!')

//     this.addComment()

//     nameInput.value = ''
//     textarea.value = ''
//   }

//   render() {
//     return (
//       <div>
//         <CommentList
//           comments={this.state.comments}
//           deleteComment={this.deleteComment}
//         />
//         <CommentCreator
//           handleBtnClick={() => this.handleBtnClickAndCheckInputs()}
//         />
//       </div>
//     )
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App)
