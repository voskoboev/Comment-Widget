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
      name: null,
      text: null,
      date: null,
      id: null
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.setTimeAndDate = this.setTimeAndDate.bind(this);
    this.setId = this.setId.bind(this);
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

  handleNameChange(ev) {
    const inputValue = document.querySelector('.comment__name-input').value;

    this.setState({
      name: inputValue

      // name: ev.target.value
    });
  }

  handleTextChange(ev) { 
    const textAreaValue = document.querySelector('.comment__textarea').value;

    this.setState({
      text: textAreaValue

      // text: ev.target.value
    });
  }

  setTimeAndDate() {
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth() + 1;
    const days = date.getDate();
    const hours = date.getHours();
    const completeHours = (hours.toString().length === 1 ? '0' + hours.toString() : hours);
    const minutes = date.getMinutes();
    const completeMinutes = (minutes.toString().length === 1 ? '0' + minutes.toString() : minutes);
    const timeAndDate = `${completeHours}:${completeMinutes} ${days}.${months}.${years}`;

    this.setState({
      date: timeAndDate
    });

    console.log(this.state.date);
  }

  setId() {
    this.setState({
      id: this.state.comments.length.toString()
    });
    
    console.log(this.state.id);
  }
  
  addCommentToStateBuffer() {
    const commentObj = {
      name: this.state.name,
      text: this.state.text,
      date: this.state.date,
      id: this.state.id
    }
    
    this.state.comments.push(commentObj);
    
    console.log(this.state.comments);
  }
  
  saveCommentToLocalStorage() {
    localStorage.setItem('comments', JSON.stringify(this.state.comments)); 
  }

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
      this.clearInputs();
      
      return alert('Enter values!');
    }

    this.handleNameChange();
    this.handleTextChange();

    this.setTimeAndDate();
    this.setId();
    this.addCommentToStateBuffer();
    this.saveCommentToLocalStorage();
    this.clearInputs();
  }

  render() {    
    return (
      <div>
        <ul
          className="comment__list"
        >
          <Comment 
            state={this.state} 
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
