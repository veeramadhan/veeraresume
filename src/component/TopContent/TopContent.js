
import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
  return (
    <div  className='TopContent'>
        <div className='TopContent_Container'>
            <h1>
                Mr.L.Veeramanikandan
            </h1>
            <p>Front End Developer Using ReactJS</p>
       
        <a href='www.google.com'>
            <button className='download_button'>Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500} >
            <button className='work_button'>My Work
            </button>
            </Link>
            </div>
    </div>
  )
}

export default TopContent