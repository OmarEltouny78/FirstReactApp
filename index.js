import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
return(
	<h1>
	Name of course {props.name}
	</h1>
	)
}
const Part = (props) =>{
	return(
		<p>course part {props.part} exercise {props.exercise}</p>
		)
}
const Content = (props) =>{
	const part1 = 'Fundamentals of React'
  	const exercises1 = 9
  	const part2 = 'Using props to pass data'
  	const exercises2 = 7
  	const part3 = 'State of a component'
  	const exercises3 = 14
	return(
	<div>
		<Part part= {part1} exercise={exercises1}/>
		<Part part= {part2} exercise={exercises2}/>
		<Part part= {part3} exercise={exercises3}/>
		</div>
		)
}
const Total = (props) =>{
	return(
	<p> Number of exercises  {props.exercises1 + props.exercises2 + props.exercises3} </p>
	)	
	

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 9
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
        <Content/>
        <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))