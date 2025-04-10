const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />
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
  console.log(props.parts[0])
  return (
    <div>
      <Part course={props.parts[0]}></Part>
      <Part course={props.parts[1]}></Part>
      <Part course={props.parts[2]}></Part>
    </div>
  )
}

const Total = (props) => {  
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.course.name} {props.course.exercises}
    </p>
  )
}

export default App