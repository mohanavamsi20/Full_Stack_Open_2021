import React from 'react'

const Header =(props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content= (props) =>{
  return (
    <div>
      {/* Exercise 1.1,1.2,1.3
      <Part part={props.part} exercise={props.exercise}/> */}
      <Part name={props.parts[0].name} exercise={props.parts[0].exercise}/>
      <Part name={props.parts[1].name} exercise={props.parts[1].exercise}/>
      <Part name={props.parts[2].name} exercise={props.parts[2].exercise}/>
    </div>
  )
}
const Part =(props) =>{
  return (
    <div>
      {/* Exercise 1.1,1.2,1.3
      <p>{props.part} {props.exercise}</p> */}
      <p>{props.name} {props.exercise}</p>
    </div>
  )
}

const Total = (props) =>{
  return (
    <div>
      {/* Exercise 1.1,1.2,1.3
      <p>Number of exercises {props.e1+props.e2+props.e3}</p> */}
      <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
    </div>
  )
}
const App = () => {
  // Exercise 1.1,1.2
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const course = {
    name: 'Half Stack application development',
    // Exercise 1.3
    // const part1 = {
    //   name: 'Fundamentals of React',
    //   exercises: 10
    // }
    // const part2 = {
    //   name: 'Using props to pass data',
    //   exercises: 7
    // }
    // const part3 = {
    //   name: 'State of a component',
    //   exercises: 14
    // }
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
      {/* Exercise 1.1,1.2
      <Header course={course}/>
      <Content part={part1} exercise={exercises1}/>
      <Content part={part2} exercise={exercises2}/>
      <Content part={part3} exercise={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/> */}
      
      {/* Exercise 1.3
      <Content part={part1.name} exercise={part1.exercises}/>
      <Content part={part2.name} exercise={part2.exercises}/>
      <Content part={part3.name} exercise={part3.exercises}/>
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/> */}

      {/* Exercise 1.4
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
      <Content parts={parts}/>
      <Total parts={parts}/> */}


      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App