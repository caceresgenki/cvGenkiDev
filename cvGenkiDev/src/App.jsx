import NavBar from '../src/Components/Components/NavBar'
import About from '../src/Components/Components/About'
import Education from '../src/Components/Components/Education'
import Experience from '../src/Components/Components/Experience'
import Hero from '../src/Components/Components/Hero'
import Skills from '../src/Components/Components/Skills'
import KeyboardManager from '../src/Components/Components/KeyboardManager'

function App() {
 return   (
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      {/* <Projects /> */}
      <Skills />
    </main>
    <KeyboardManager />
  </>
 )
}

export default App
