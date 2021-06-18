import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
//import { initializeAnecdotes } from './reducers/anecdoteReducer'
//import anecdoteService from './services/anecdotes'
import store from './store'


/* console.log(store.getState())

anecdoteService.getAll().then(anecdotes =>
  anecdotes.forEach(anecdote => {
    store.dispatch({ type: 'NEW_ANECDOTE', data: anecdote })
  })
)

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(initializeAnecdotes(anecdotes))
) */

//store.subscribe(() => console.log(store.getState()))
//store.dispatch(createAnecdote('combineReducers forms one reducer from many simple reducers'))

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('root')
  )
}

render()
store.subscribe(render)