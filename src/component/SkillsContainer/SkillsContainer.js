import React from 'react'
import { Element } from 'react-scroll'
import skilling from "/Users/USER/Desktop/first App/my_app/src/assest/skilling.jpeg"
import { LinearProgress } from '@mui/material'
import "./SkillsContainer.css"


const SkillsContainer = () => {
  return (
        <Element name="skills" className='SkillsContainer'>
           
         
            <div className='SkillsContainer_text'>
                <h2> SkillSet</h2>
                <div className='SkillContainer_SkillSet'>
                    <h1>Reactjs</h1>
                    <div className='SkillContainer_slider SkillContainer_slider1'>
                        <LinearProgress variant='determinate' value={65}/>
                         </div>
                          </div>
                          <div className='SkillContainer_SkillSet'>
                    <h1>NodeJS</h1>
                    <div className='SkillContainer_slider SkillContainer_slider2'>
                        <LinearProgress variant='determinate' value={40}/>
                         </div>
                          </div>
                          <div className='SkillContainer_SkillSet'>
                    <h1>MongoDB</h1>
                    <div className='SkillContainer_slider SkillContainer_slider3'>
                        <LinearProgress variant='determinate' value={30}/>
                         </div>
                          </div>
                          <div className='SkillContainer_SkillSet'>
                    <h1>Azure Cloud</h1>
                    <div className='SkillContainer_slider SkillContainer_slider4'>
                        <LinearProgress variant='determinate' value={60}/>
                         </div>
                          </div>
                         


                       
                          </div>
                         
           
        </Element>


  )
}

export default SkillsContainer


// <div className='SkillsContainer_image'>
// <img src={skilling} alt=""/>
// </div>
