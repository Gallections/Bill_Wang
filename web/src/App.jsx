import { useState } from 'react'
import './index.css'
import './components/ProfileMain'
import ProfileMain from './components/ProfileMain'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Router basename="/Bill_Wang">
        <ProfileMain />
      </Router>
    </>
  )
}
export default App
