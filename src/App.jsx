import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
  )
}

export default App
