import React from 'react'
import NavBar from '../src/Components/NavBar'
import About from '../src/Components/About'
import Education from '../src/Components/Education'
import Experience from '../src/Components/Experience'
import Hero from '../src/Components/Hero'
import Projects from '../src/Components/Projects'
import Skills from '../src/Components/Skills'
import KeyboardManager from '../src/Components/KeyboardManager'

function App() {
 return   (
  <>
    <NavBar />
    <Hero />
    <About />
    <Experience />
    <Education />
    <Projects />
    <Skills />
    <KeyboardManager />
  </>
 )
}

export default App
