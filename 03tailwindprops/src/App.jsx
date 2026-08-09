import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username:"Ayush",
    age:22
  }
  let newArr=[1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>
      Hello Tailwind!
    </h1>
    <Card username="hello" btnText="click me" />
    <Card username="Yoo"/>
    </>
  )
}

export default App

