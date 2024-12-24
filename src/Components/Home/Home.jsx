import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    
    <div className="sadman_content">
      <div className="container">
        {/* ==================================          banner one */}
        <div className="banner_con">
          <div className="main_con">
            <div className="text_con">
              <h2>
              Think positive <br />
              about our Climate
              </h2>
              <hr />
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Morbi eget maecenas eget sit et rhoncus. <br /> Sit consectetur.
              </p>
              <div className="email_part">
                <input type="email" placeholder='name@company.com' />
                <Link to={'#'}>Sign up</Link>
              </div>
            </div>
            <div className="banner_img">
              <img src="Img/banner.png" alt="banner" />
            </div>
          </div>
        </div>

        {/* ============================      banner two */}
        <div className="fraim_banner">
           <div className="for_flex_inhere">
          <h2>Plant a tree</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget maecenas eget sit et rhoncus. Sit consectetur.</p>
          <button>Plant a tree</button>
          <img src="Img/fraimOne.png" alt="fraim" />
           </div>
        </div>

      </div>
    </div>

    {/* =================================       banner three */}
     
    <div className="sadman_banner_three">
      <div className="container">
        <div className="main_natural_three">
      

         <div className="for_fun flex flex-row-reverse">
         <div className="chayon_nat">
            <div className="for_text">
              <h2>Another title </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget maecenas eget sit et rhoncus. Sit consectetur.</p>
              <img src="Img/fraimTwo.png" alt="hllo" />
            </div>
          </div>
         </div>
         <div className="chayon_nat ">
            <div className="for_text">
              <h2>Another title </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget maecenas eget sit et rhoncus. Sit consectetur.</p>
              <button>Plant a tree</button>

              <img src="Img/Group.png" alt="hllo" />
            </div>
            </div>
        </div>
      </div>
    </div>
      


    </>
  )
}

export default Home