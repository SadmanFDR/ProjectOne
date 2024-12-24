import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";


const MobileNav = () => {

  const [show , setshow] = useState(false)

  return (
    <>
    
    <div className='for_dextep_menu'>

<div className="mobile_main_nav">
      <div className="container">
         <div className="mobile_sad_nav">
          <div className="mobile_logo">
          <Link to={'#'}>
            <img src="Img/logo.png" alt="Tree" />
          </Link>
          <FaBars onClick={()=>setshow(!show)} className='three_icon'/>

          </div>
          <hr className='line'/>
          {
            show?
            <div className="responsive_menu">
               <ul className="mobile_menu">
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'#'}>Contact</Link></li>
            <li><Link to={'#'}>Help</Link></li>
          </ul>
          <div className="mobile_menuButton">
            <button>Start Free Trial</button>
            <button>Premium Packs</button>
          </div>
            </div>
            : ""
          }
         
         </div>
      </div>
    </div>

    </div>
    
    </>
  )
}

export default MobileNav