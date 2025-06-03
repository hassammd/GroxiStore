import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Outlet, Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Cart from './Pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Routes>


        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />



        </Route>
      </Routes>

    </>
  )
}

export default App
