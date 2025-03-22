import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Showroom from './components/Showroom'
import Login from './components/Login'
import  Signup from './components/signup'

const App = () => {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <Showroom/>
      <Footer/>
      <Login/>
     
      
      <Signup/>
    </div>
  )
}

export default App
