const Header = (props) => <h2>{props.course}</h2>

const Content = ({ parts }) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part}/>)}
  </div>
)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = (props) => <p><b>Total of {props.total} exercises</b></p>

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <div key={course.id}>
          <Header course={course.name}/>
          <Content parts={course.parts}/>
          <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)}/>
        </div>
      )}
    </div>
  )
}

export default Course