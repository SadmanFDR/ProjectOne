import React from 'react'
import MobileNav from '../Components/MobileNav/MobileNav'
import { Outlet } from 'react-router-dom'
import Navber from '../Components/Navber/Navber'
import Footer from '../Components/Footer/Footer'
import FirstHome from '../Pages/FirstHome'

const LayoutOne = () => {
  return (
    <>
   <Navber/>
    <MobileNav/>
    <FirstHome/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutOne