import { useState } from 'react'

const RatingButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{display: 'flex'}}>
        <RatingButton text={"good"} onClick={() => setGood(good + 1)}></RatingButton>
        <RatingButton text={"neutral"} onClick={() => setNeutral(neutral + 1)}></RatingButton>
        <RatingButton text={"bad"} onClick={() => setBad(bad + 1)}></RatingButton>
      </div>
      <h1>statistics</h1>
      <div>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
      </div>
    </div>
  )
}

export default App