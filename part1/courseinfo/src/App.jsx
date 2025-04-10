const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
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