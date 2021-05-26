import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const all=good+bad+neutral
  const average=(good*1+neutral*0+bad*-1)/all
  const positive=((good/all)*100)
  return(
  <div>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {positive} %</p>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setTogood= newGood => {
    setGood(newGood)
  }
  const setToneutral= newNeutral => {
    setNeutral(newNeutral)
  }
  const setTobad= newBad => {
    setBad(newBad)
  }
  const total = good + neutral + bad;
  if(total === 0){
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setTogood(good + 1)} text="good" />
        <Button handleClick={() => setToneutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setTobad(bad + 1)} text="bad" />
  
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else{
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setTogood(good + 1)} text="good" />
        <Button handleClick={() => setToneutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setTobad(bad + 1)} text="bad" />
  
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }
}

export default App