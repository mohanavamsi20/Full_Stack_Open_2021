import anecdoteService from '../services/anecdotes'

/* const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject) */

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'NEW_ANECDOTE':
      console.log('NEW_ANECDOTE:: ', action.data)
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      console.log('INIT_ANECDOTES:: ', action.data)
      return action.data
    case 'VOTE':
      console.log('VOTE:: ', action.data)
      const oldState = state.filter(anecdote => anecdote.id !== action.data.id)
      return [...oldState, action.data ]
    default:
      return state
}  
}

/* export const voteForAnecdote = (id) => { // highlight-line
  return {
    type: 'VOTE',
    data: { id }
  }
} */

export const voteForAnecdote = (id) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const votedAnecdote = anecdotes.find(a => a.id === id)
    const changedAnecdote = {...votedAnecdote, votes: votedAnecdote.votes + 1}
    //console.log('changed anecdote', changedAnecdote)
    const vote =  await anecdoteService.update(id, changedAnecdote)
    //console.log('response data!', vote )
    dispatch({
      type: 'VOTE',
      data: vote
    })
  }
}



/* export const createAnecdote = (content) => { // highlight-line
  return {
    type: 'NEW_ANECDOTE',
    data : content 
  }
} */

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

/* export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
} */

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default reducer