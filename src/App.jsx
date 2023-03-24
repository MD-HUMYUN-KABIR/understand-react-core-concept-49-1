
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/watch/Watch'

function App() {


  return (
    <div className="App">
      <Device name="uphone" price="13000"></Device>
      <Device name="samsung" price="12000"></Device>
      <Watch></Watch>
      <h1>Vite + React</h1>
      <div className="card">
       
      </div>
    </div>
  )
}

export default App


/* 
react.dev
jsx.editor
babel js playground
*/