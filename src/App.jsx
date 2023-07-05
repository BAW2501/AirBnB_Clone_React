import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
import Card from './Components/Card'


function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Hero /> */}
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136} 
        />
    </React.Fragment>
  )
}

export default App
