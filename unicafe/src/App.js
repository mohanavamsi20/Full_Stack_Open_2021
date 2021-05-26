import React, { useState } from 'react'

const Display = props => (
  <div>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.all}</p>
    <p>average {props.average}</p>
    <p>positive {props.positive} %</p>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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
  const all=good+bad+neutral
  const average=(good*1+neutral*0+bad*-1)/all
  const positive=((good/all)*100)
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setTogood(good + 1)} text="good" />
      <Button handleClick={() => setToneutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setTobad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      <Display good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App