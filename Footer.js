import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="Footer">
        &copy; 2023 Your Hostel App. All rights reserved.
        
        <section className='logo'> 
        <p className='copyright'>
         <img src='hostelogo.png' className='logo' alt='logo'/>
         <span className='details'>About Us <br/> <br/><a href=''>www.hostelApp.mak.ac.ug</a><br/><a href=''>how it works</a></span>
        <span className='details'>Contact Us<br/> <br/><a href=''>@hostelApp</a><br/><a href=''>support</a></span>
        </p>
        </section>
        
        
      </div>
    </footer>
  )
}

export default Footer