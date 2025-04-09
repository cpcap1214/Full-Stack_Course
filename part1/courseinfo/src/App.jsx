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

const Header = (course) => {
  // console.log(course.course)
  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Content = (part1, exercises1, part2, exercises2, part3, exercises3) => {
  // console.log(part1)
  return (
    <div>
      <p>
        {part1.part1} {part1.exercises1}
      </p>
      <p>
        {part1.part2} {part1.exercises2}
      </p>
      <p>
        {part1.part3} {part1.exercises3}
      </p>
    </div>
  )
}

const Total = (exercises1, exercises2, exercises3) => {
  console.log(exercises1)
  return (
    <p>Number of exercises {exercises1.exercises1 + exercises1.exercises2 + exercises1.exercises3}</p>
  )
}

export default App