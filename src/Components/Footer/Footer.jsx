import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
    
    <footer>
      <div className="container">
        <div className="main_footer">
          <div className="footer_logo">
             <img src="Img/logo.png" alt="Tree" />
          </div>
          <div className="footer_main_menu">
            <div className="Sad_footer">
              <h3>Product</h3>
              <Link to={'#'}>Individuals</Link>
              <Link to={'#'}>Team</Link>
              <Link to={'#'}>Enterprise</Link>
              <Link to={'#'}>Pricing</Link>
              <Link to={'#'}>Technology</Link>
              <Link to={'#'}>Security </Link>
              <Link to={'#'}>Integrations</Link>
            </div>
            <div className="Sad_footer">
              <h3>Company</h3>
              <Link to={'#'}>About</Link>
              <Link to={'#'}>Careers </Link>
              <Link to={'#'}>Login </Link>
              <Link to={'#'}>Sign Up</Link>
              <Link to={'#'}>News</Link>
            </div>
            <div className="Sad_footer">
              <h3>Resources</h3>
              <Link to={'#'}>How-tos</Link>
              <Link to={'#'}>Case studies</Link>
              <Link to={'#'}>Help</Link>
            </div>
            <div className="Sad_footer">
              <h3>Headquarters</h3>
              <p>Your company 
              address, Street,
              & name</p>
            </div>
            <div className="Sad_footer">
              <h3>North America</h3>
              <p>Your company 
              address, Street,
              & name</p>
            </div>
            <div className="Sad_footer">
              <h3>Connect</h3>
              <div className="icons">
              <IoLogoTwitter />
              <FaFacebookF />
              <FaLinkedinIn />
              </div>
            </div>
            <div className="Sad_footer">
              <h3>Apps</h3>
              <img src="Img/playStore.png" alt="PlayStore" />
              <img src="Img/appleStore.png" alt="AppleStore" />
            </div>
          </div>
          <hr />
          <div className="footer_end">
              <div className="tow_item">
                <div className="more_space">
                 <p>Copyright 2022 Dan Williams™</p>
                 <p>Privacy Policy </p>
                </div>
                <div className="low_space">
                  <p>Terms of Use</p>
                  <p>DMCA and Copyright Abuse Policy</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer