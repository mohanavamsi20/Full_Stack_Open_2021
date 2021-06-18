import React from 'react'
import { connect } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'
import SearchFilter from './SearchFilter'

const AnecdoteList = (props) => {
    /* const { anecdotes, search } = store.getState()
    console.log(anecdotes, search) */

    props.anecdotes.sort(function(a,b)
          {return (a.votes-b.votes)*-1}
        )

    const handleClick = (id, content) => {
        props.voteForAnecdote(id)
        /* props.showNotification(`you voted '${content}'`)
        setTimeout(() => {
            props.hideNotification()
          }, 5000) */

        props.showNotification(`you voted '${content}'`, 5000)  
    }

    return (
        <div>
            <SearchFilter />
            {props.visibleAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => handleClick(anecdote.id, anecdote.content)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

//export default AnecdoteList

const anecdotesToShow = ({ anecdotes, search }) => {
    if (search === '') {
        return anecdotes
      } else {
          return anecdotes.filter(a => a.content.toString().toLowerCase().includes(search.toString().toLowerCase()) === true)
      }

}

const mapStateToProps = (state) => {
    return {
      visibleAnecdotes: anecdotesToShow(state),
      anecdotes: state.anecdotes
    }
  }

const mapDispatchToProps = {
    voteForAnecdote,
    showNotification
}
  

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdotes