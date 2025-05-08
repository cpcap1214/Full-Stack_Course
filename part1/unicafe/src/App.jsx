import { useState } from 'react'

const RatingButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  const calculateAverage = () => all ? (good * 1 + bad * -1) / (good + neutral + bad) : 0
  const calculatePositive = () => all ? good / all : 0
  return (
    <div>
      <h1>statistics</h1>
      <div>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
      </div>
      <div>
        <div>all {all}</div>
        <div>average {calculateAverage()}</div>
        <div>positive {calculatePositive()} %</div>
      </div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(good + neutral + bad);

  const addGood = () => {
    setGood(good + 1)
    const updatedGood = good + 1
    setAll(updatedGood + neutral + bad)
  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1
    setAll(good + updatedNeutral + bad)
  }
  const addBad = () => {
    setBad(bad + 1)
    const updatedBad = bad + 1
    setAll(good + neutral + updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{display: 'flex'}}>
        <RatingButton text={"good"} onClick={addGood}></RatingButton>
        <RatingButton text={"neutral"} onClick={addNeutral}></RatingButton>
        <RatingButton text={"bad"} onClick={addBad}></RatingButton>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}></Statistics>
    </div>
  )
}

export default App
