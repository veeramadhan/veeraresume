import React from 'react'
import {Element} from "react-scroll"
import SkillsContainer from '../SkillsContainer/SkillsContainer'
import TopContent from '../TopContent/TopContent'
import "./TopContainer.css"

const TopContainer = () => {
  return (
 <Element name='about' className='TopContainer'>
 <TopContent/>
 </Element>
 
  )
}

export default TopContainer