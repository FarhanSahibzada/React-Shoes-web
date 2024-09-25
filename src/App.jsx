import React from 'react'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navber from './components/navber/navber'
import Layout from './layout'
import Home from './components/Home/Home'
import Contact from './components/contact/contact'
import About from './components/About/About'
import Card from './components/card/card'

function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "About", element: <About /> },
        { path: "card", element: < Card/> }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
