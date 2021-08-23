import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import { commentReducer } from './store/reducers/commentReducer'

const initialState = {
  comments: [],
}

const store = createStore(commentReducer, initialState)

ReactDOM.render(
  <App store={store} />,
  document.querySelector('#root')
)
