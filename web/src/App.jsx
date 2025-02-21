import { useState } from 'react'
import './index.css'
import './components/ProfileMain'
import ProfileMain from './components/ProfileMain'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ProfileMain />
      </Router>
    </>
  )
}
export default App
