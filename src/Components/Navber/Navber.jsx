import React from 'react'
import './Navber.css'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='for_mobile_menu'>

<div className="main_nav">
      <div className="container">
         <div className="sad_nav">
          <div className="logo">
          <Link to={'#'}>
            <img src="Img/logo.png" alt="Tree" />
          </Link>
          </div>
          <ul className="menu">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'#'}>Contact</Link></li>
            <li><Link to={'#'}>Help</Link></li>
          </ul>
          <div className="menuButton">
            <button>Start Free Trial</button>
            <button>Premium Packs</button>
          </div>
         </div>
      </div>
    </div>

    </div>
  )
}

export default Navber