import React, { useState } from 'react'

const App = () => {

  const newAnecdote = () =>{
    let randomInt = Math.floor((Math.random() * 6) + 0);
    setSelected(randomInt);
  }
  
  const [points,setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 , 4: 0, 5: 0 })
  
  const vote = () =>{
    setPoints({ ...points ,[selected]:points[selected]+1})
  }

  let maxVotes=points[0];
let position=0;
for(let i=1;i<6;i++){
  if(points[i]>maxVotes){
    maxVotes=points[i];
    position=i
  }
}

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  console.log('random number is ',selected)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>
      <p>has {points[selected]} vote(s)</p>
      <button onClick={vote}>Vote</button>
      <button onClick={newAnecdote}>next anecdote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      {anecdotes[position]}
      <p>has {points[position]} vote(s)</p>
    </div>
  )
}

export default App