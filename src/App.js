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

    // this.setTimeAndDate = this.setTimeAndDate.bind(this);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClickAndCheckInputs = this.handleBtnClickAndCheckInputs.bind(this);
  }

  componentDidMount() {
    const storageComments = JSON.parse(localStorage.getItem('comments'));
    const stateComments = this.state.comments;

    if (storageComments === null) return;

    storageComments.forEach(comment => stateComments.push(comment));

    // this.forceUpdate();
    this.setState(this.state);
  }

  handleChange() {
    const stateComments = this.state.comments;
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
    
    stateComments.push(newCommentItem);

    localStorage.setItem('newCommentItem', JSON.stringify(this.state.comments));

    console.log('new comment', newCommentItem);
    console.log(this.state.comments);
  }

  // setTimeAndDate() {
  //   const date = new Date();
  //   const years = date.getFullYear();
  //   const months = date.getMonth() + 1;
  //   const days = date.getDate();
  //   const hours = date.getHours();
  //   const completeHours = (hours.toString().length === 1 ? '0' + hours.toString() : hours);
  //   const minutes = date.getMinutes();
  //   const completeMinutes = (minutes.toString().length === 1 ? '0' + minutes.toString() : minutes);
  //   const timeAndDate = `${completeHours}:${completeMinutes} ${days}.${months}.${years}`;

  //   this.setState({
  //     date: timeAndDate
  //   });

  //   console.log(this.state.date);
  // }

  clearInputs() {
    document.querySelector('.comment__name-input').value = '';
    document.querySelector('.comment__textarea').value = '';
  }

  deleteComment(ev) {
    const commentDelBtn = ev.target;

    commentDelBtn.parentElement.remove();
  }

  handleBtnClickAndCheckInputs() {
    if (
      document.querySelector('.comment__name-input').value.trim() === '' ||
      document.querySelector('.comment__textarea').value.trim() === ''
    ) {
      return alert('Enter values!');
    }

    // this.setTimeAndDate();
    
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
