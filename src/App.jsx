import { useState } from 'react'
import './App.css'
import Navbar from '../src/layout/Navbar'
import HomePage from '../src/pages/home/HomePage'
import AboutMe from './pages/home/AboutMe'
import FeaturedProjects from './pages/home/FeaturedProjects'
import Activities from './pages/home/Activities'

function App() {

  return (
    <>
      <Navbar />
      <HomePage></HomePage>
      <AboutMe/>
      <FeaturedProjects/>
      <Activities/>

    </>
  )
}

export default App
