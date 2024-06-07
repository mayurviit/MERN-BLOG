import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/Signin'element={<Signin/>}/>
        <Route path='/singup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
