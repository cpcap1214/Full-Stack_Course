const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

const Header = (props) => {
  // console.log(course.course)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  //console.log(props[0])
  return (
    <div>
      <Part course={props.course.parts[0]}></Part>
      <Part course={props.course.parts[1]}></Part>
      <Part course={props.course.parts[2]}></Part>
    </div>
  )
}

const Total = (props) => {  
  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
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