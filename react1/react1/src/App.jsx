import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Header from './Components/Header.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from './Components/Counter.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header />
    {/* <Counter /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    
    </Routes>
    </BrowserRouter>
   
      
    </>
  )
}

export default App
