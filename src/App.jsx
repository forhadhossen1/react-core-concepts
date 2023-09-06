import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './Todo'
import Actor from './Actor'
import Singers from './Singers'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['sakib', 'salman shah', 'siam', 'dipjol']

  const singers = [
    {name: 'Dr. Mahfuz', age: 84},
    {name: 'Prithom', age: 44},
    {name: 'Rubel', age: 34},
    {name: 'Eva-Rahman', age: 54},
    
  ]

  return (
    <>

      <h1>Vite + React</h1>

      {/* {
        singers.map(singer => <Singers singer ={singer}></Singers>)
      } */}



      {/* <Actor name={'Bappa Raj'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}




      {/* <Todo
       task = 'Learn React' isDone = {true}></Todo>
      <Todo
       task = 'Explor core concepts' isDone ={false}></Todo> */}

      
      {/* <Device name = 'Laptop' price = '44'></Device>
      <Device name = 'Mobile' price = '17'></Device>
      <Device name = 'Webcame' price = '3'></Device>
      <Device name = 'Watch' price = '5'></Device>

      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Developer> </Developer>
      <Student sub = 'English' semister = 'six' scor = '4'></Student>
      <Student sub = 'Math' semister = 'second' scor = '2'></Student>
      <Student></Student> */}
    </>
  )
}

function Device (props){
  // console.log(props);
  return <h2>This Device: {props.name} Price: {props.price} </h2>
}

function Person() {
  const age = 23;
  const money = 11;
  const person = { name: 'motbul', age: 55, sub: 'english' };
  return <h3> My age {age}. My name is a {person.name}. My depretment subject {person.sub}</h3>
}

function Developer() {
  return (
    <div className='developer'>
      <h2>How to become a developer</h2>
      <p>Learn HTML</p>
      <p>css</p>
      <p>JS</p>
    </div>
  )
}

const {sub, semister, scor} = {sub: 'English', semister: 'six', scor: '4'}

function Student({sub = 'Bangla', semister = 1, scor = 0}){
  const studentStyle = {
    border: '4px solid red',
    marginTop: '6px',
    borderRadius: '8px'
  }
  return (
    <div style={studentStyle}>
      <h3>Depertment OF Power</h3>
      <p>Subject Name: {sub}</p>
      <p>Semister: {semister}</p>
      <p>Score: {scor}</p>
      <p></p>
    </div>
  )
}

export default App
