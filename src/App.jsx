import { useState } from 'react'
import './App.css'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {

  

  const [school, setSchool] = useState('');

  return (
    <>
      <div id="main">
        <h1>CV Application</h1>
        <div>
          <General />
          <Education />
          <Experience />
        </div>
      </div>
    </>
  )
}

export default App
