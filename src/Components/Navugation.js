import React from 'react'
import {FaHome,FaClipboardList,FaPhoneAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Navugation = () => {
  return (
    <div className='nav'>
     <Link to="/"><nav><FaHome/>Home</nav></Link> 
     <Link to="/about">  <nav><FaClipboardList/>About</nav></Link> 
        <Link to="/contact"><nav><FaPhoneAlt/>Contact</nav></Link>
    </div>
  )
}

export default Navugation