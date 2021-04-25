import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

class App extends Component {
  constructor() {
    super();

    this.state = {
      comments: [],
    };

    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.handleBtnClickAndCheckInputs = this.handleBtnClickAndCheckInputs.bind(this);
  }

  componentDidMount() {
    const storageComments = JSON.parse(localStorage.getItem('storageComments'));
    const stateComments = this.state.comments;

    if (storageComments === null) return;

    storageComments.forEach(comment => stateComments.push(comment));

    this.forceUpdate();
  }

  addComment() {
    const name = document.querySelector('.comment__name-input').value;
    const text = document.querySelector('.comment__textarea').value;
    const date = new Date();
    const id = this.state.comments.length.toString();

    const newCommentItem = {
      name,
      text,
      date,
      id
    }

    localStorage.setItem('storageComments', JSON.stringify([...this.state.comments, newCommentItem]));

    this.setState({ ...this.state, comments: [...this.state.comments, newCommentItem] });
  }

  deleteComment(deletingComment) {
    const filteredComments = [...this.state.comments].filter(comment => {
      return comment.id !== deletingComment;
    });

    localStorage.setItem('storageComments', JSON.stringify(filteredComments));

    this.setState({ comments: filteredComments })
  }

  clearInputs() {
    document.querySelector('.comment__name-input').value = '';
    document.querySelector('.comment__textarea').value = '';
  }

  handleBtnClickAndCheckInputs() {
    if (
      document.querySelector('.comment__name-input').value.trim() === '' ||
      document.querySelector('.comment__textarea').value.trim() === ''
    ) {
      return alert('Enter values!');
    }

    this.addComment();
    this.clearInputs();
  }

  render() {
    return (
      <div>
        <ul
          className="comment__list"
        >
          <Comment
            comments={this.state.comments}
            deleteComment={this.deleteComment}
          />
        </ul>
        <h1 className="comment_heading"
        >
          Comments App
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
          onClick={this.handleBtnClickAndCheckInputs}
        >
          Add comment
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.comment-wrapper')
);

export default App;
