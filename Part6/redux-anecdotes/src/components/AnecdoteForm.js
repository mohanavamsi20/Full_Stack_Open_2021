import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
//import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        //const newAnecdote = await anecdoteService.createNew(content)
        props.createAnecdote(content)
        
        //props.createAnecdote(content)
        
        props.showNotification(`you created '${content}'`, 5000)
        /* setTimeout(() => {
            props.hideNotification()
          }, 5000) */
      }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">create</button>
        </form>
    )
}

export default connect(null, { createAnecdote, showNotification })(AnecdoteForm)