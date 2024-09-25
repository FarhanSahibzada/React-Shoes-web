import React from 'react'
import Navber from './components/navber/navber'
import Fotter from './components/Fotter/Fotter'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navber/>
    <Outlet />
    <Fotter/>
    </>
  )
}

export default Layout