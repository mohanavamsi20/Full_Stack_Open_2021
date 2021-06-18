import React, { useEffect } from 'react'
import { connect } from 'react-redux'
//import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes()
  },[])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification /> 
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

//export default App
export default connect(null, { initializeAnecdotes })(App)
