import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import { commentReducer } from './store/reducers/commentReducer'

// const initialState = {
//   comments: [],
// }

const store = createStore(commentReducer)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.querySelector('#root'))
