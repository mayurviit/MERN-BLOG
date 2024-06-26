import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Header from './components/Header'
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import CreatePost from './pages/CreatePost'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/signin'element={<Signin/>}/>
        <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
            <Route path='/create-post' element={<CreatePost/>}/>
        </Route>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
