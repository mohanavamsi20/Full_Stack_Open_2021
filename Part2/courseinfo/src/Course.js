import React from 'react'

const Header = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
        </div>
    )
}

const Content = (props) => {
    return(
        <div>
            {props.parts.map(p => <Part key={p.id} name={p.name} exercises={p.exercises}/>)}
        </div>
    )
}

const Part = (props) => {
    return(
        <div>
            <p>{props.name} {props.exercises}</p>
        </div>
    )
}

const Total = (props) =>{
    const total=props.parts.reduce((sum,p)=>sum+=p.exercises,0);
    return (
      <div>
        <h4>Number of exercises {total}</h4>
      </div>
    )
  }

function Course({course}) {
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course;