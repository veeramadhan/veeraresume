import React from 'react'
import { Link } from "react-scroll"
import"./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <h1>Develop<span>ers</span></h1>
            </div>
            <div className='header_right'>
                <Link to="about" smooth={true} duration={500}>
                    <h4>
                        About Me
                    </h4>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                    <h4>
                        Skils
                    </h4>
                </Link>
                <Link to="certifications" smooth={true} duration={500}>
                    <h4>
                        Certifications
                    </h4>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <h4>
                        Contact
                    </h4>
                </Link>
                <h4 className='header_rightbutton'>join with me</h4>

            </div>
        </div>
    )
}

export default Header