import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Components/Navber/Navber'
import MobileNav from '../Components/MobileNav/MobileNav'
import SecendAbout from '../Pages/SecendAbout'
import Footer from '../Components/Footer/Footer'

const LayoutTwo = () => {
  return (
    <>
    
    <MobileNav/>
    <Navber/>
    <SecendAbout/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default LayoutTwo