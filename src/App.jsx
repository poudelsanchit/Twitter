import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Tweeets from './components/Tweets'
import Trends from './components/Trends'

function App() {

  return (
    <>
      <div className='container'>
        <Menu />
        <Tweeets />
        <Trends />
      </div >
    </>
  )
}

export default App
