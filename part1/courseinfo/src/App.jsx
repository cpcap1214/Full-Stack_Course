const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

const Header = (props) => {
  // console.log(course.course)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  // console.log(part1)
  return (
    <div>
      <Part course={props.part1} courseExercise={props.exercises1}></Part>
      <Part course={props.part2} courseExercise={props.exercises2}></Part>
      <Part course={props.part3} courseExercise={props.exercises3}></Part>
    </div>
  )
}

const Total = (props) => {  
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.course} {props.courseExercise}
    </p>
  )
}

export default App