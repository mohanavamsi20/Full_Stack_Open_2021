import React, { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistic = ({text,value}) => {
  return(
    <React.Fragment>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </React.Fragment>
  )
}
const Statistics = ({good, neutral, bad}) => {
  const all=good+bad+neutral
  const average=(good*1+neutral*0+bad*-1)/all
  const positive=((good/all)*100)
  return(
  <React.Fragment>
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive} %</td>
        </tr>
      </tbody>
    </table>
    </React.Fragment>
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
  const total = good + neutral + bad
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