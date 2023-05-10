import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/menu/Menu'
import Tweeets from './components/tweets/Tweets'
import Trends from './components/trends/Trends'

function App() {

  return (
    <>
      <Menu />
      <Tweeets />
      <Trends />
    </>
  )
}

export default App
