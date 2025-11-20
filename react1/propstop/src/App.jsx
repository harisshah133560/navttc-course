import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Components/Student.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Student Name="Haris"/>
    <Student Name="Ali"/>
    <Student Name="Ahmed"/>
    <Student Age="20"/>
    <Student Age="22"/>
    <Student Age="24"/>
    <Student isStudent={true}/>
    <Student isStudent={false}/>
    

    </>
  )
}

export default App
