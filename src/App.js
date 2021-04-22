// Задание:
// 1. Отображение списка комментариев: автор, текст, дата и время.
// 2. Добавление нового комментария (поля для ввода: имя автора, текст).
// 3. Удаление комментария (кнопка удаления рядом с каждым комментарием).
// 4. Сохранение состояния приложения в localStorage в формате JSON (при 
// перезагрузке страницы все добавленные комментарии должны подтягиваться оттуда).

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

class App extends Component {
  constructor() {
    super();

    this.state = {
      comments: [],
    };

    // this.deleteRenderedComment = this.deleteRenderedComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClickAndCheckInputs = this.handleBtnClickAndCheckInputs.bind(this);
  }

  componentDidMount() {
    const storageComments = JSON.parse(localStorage.getItem('storageComments'));
    const stateComments = this.state.comments;

    if (storageComments === null) return;

    storageComments.forEach(comment => stateComments.push(comment));

    this.forceUpdate();
  }

  handleChange() {
    const name = document.querySelector('.comment__name-input').value;
    const text = document.querySelector('.comment__textarea').value;
    const date = new Date();
    // const id = this.state.comments.length.toString();

    const newCommentItem = {
      name,
      text,
      date,
      // id
    }

    this.setState({ ...this.state, comments: [...this.state.comments, newCommentItem] });

    localStorage.setItem('storageComments', JSON.stringify([...this.state.comments, newCommentItem]));

    // console.log('new comment', newCommentItem);
    // console.log(this.state.comments);
  }


  clearInputs() {
    document.querySelector('.comment__name-input').value = '';
    document.querySelector('.comment__textarea').value = '';
  }

  // deleteRenderedComment(ev) {
  //   const commentDelBtn = ev.target;

  //   commentDelBtn.parentElement.remove();
  // }

  deleteComment(ev) {
    // const storage = JSON.parse(localStorage.getItem('storageComments'));

    // storage.splice(ev, 1)

    // console.log('stor', storage);
    // console.log(this.state.comments)

    this.setState({ comments: [...this.state.comments].splice(ev, 1) });

    this.forceUpdate();
  }

  handleBtnClickAndCheckInputs() {
    if (
      document.querySelector('.comment__name-input').value.trim() === '' ||
      document.querySelector('.comment__textarea').value.trim() === ''
    ) {
      return alert('Enter values!');
    }

    this.handleChange();
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
            // deleteRenderedComment={this.deleteRenderedComment}
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
