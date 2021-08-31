import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import CommentList from './components/CommentList/CommentList'
import CommentCreator from './components/CommentCreator/CommentCreator'
import { addComment, deleteComment } from './store/actions/commentActions'

class App extends Component {

  // componentDidMount() {
    // const storageComments = JSON.parse(localStorage.getItem('storageComments'))
    // const stateComments = this.props.comments

    // if (storageComments === null) return

    // storageComments.forEach(comment => stateComments.push(comment))

    // this.forceUpdate()
  // }

  render() {
    return (
      <div>
        <CommentList
          comments={this.props.comments}
          deleteComment={this.props.deleteListComment}
        />
        <CommentCreator
          // handleBtnClick={this.props.handleBtnClickAndCheckInputs}
        />
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addListComment: () => dispatch(addComment()),
    // deleteListComment: (deletingComment) => dispatch(deleteComment(deletingComment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
