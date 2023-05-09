import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
