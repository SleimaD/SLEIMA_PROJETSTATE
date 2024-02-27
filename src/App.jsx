import { useState, useEffect } from 'react'
import './App.css'
import MultistepContainer from './components/MultistepContainer/MultistepContainer'

function App() {

  return (
    <div className='App w-full h-[100vh] flex justify-center items-center min-w-fit'>
        <MultistepContainer/>
    </div>
  )
}

export default App
