import React from 'react'
import './About.css'

const About = () => {
  return (

    <>
    
    <div className="sadman_about">
      <div className="container">
        <div className="main_about">
          <div className="about_text">
            <h2>Our story</h2>
            <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing.
            <br /><br />
            In that time, we’ve grown our network to include over 500 multinational businesses in 175 markets worldwide. The Under2 Coalition, for which we are the Secretariat, is made up of over 260 governments globally, representing 1.75 billion people and 50% of the global economy.</p>
           <button>Join the cause</button>
          </div>
          <div className="about_img">
            <img src="Img/Grroup.png" alt="Group" />
          </div>
        </div>
      </div>
    </div>

    </>

  )
}

export default About