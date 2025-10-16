import { useState } from 'react'
import './index.css'
import './components/ProfileMain'
import ProfileMain from './components/ProfileMain'
import {HashRouter as Router} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <ProfileMain />
      </Router> 
    </>
  )
}
export default App
