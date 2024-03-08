import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Plants from "./components/Plants"
import Home from './components/Home'
import Navbar from "./components/Navbar"
import image from './assets/hero.jpg'

function App(){
  React.useEffect(() => {
    fetch(`/api/plants?token=${import.meta.env.VITE_API_KEY}`)
      .then(resp => resp.json())
      .then(data => console.log(data))
  })

  return (
    <Router>
      <Navbar />
      <img src={image} alt="test image" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
      </Routes>
    </Router>
  )
}

export default App