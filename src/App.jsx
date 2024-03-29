import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

export default App