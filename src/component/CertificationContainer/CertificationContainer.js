import React from 'react'
import { Element } from 'react-scroll'
import "./CertificationContainer.css"

import azure from "../../assest/az.png"
import japane from "../../assest/jp.jpg"

const CertificationContainer = () => {
  return (
    <Element  name='certifications'>
   
     <div className='head'>
     <h1>I has successfully completed the requirements to be recognized as a certified</h1>
     </div>



      <div className='all'>
       

      <div className='CertificationContainer'>
    <div className='Certification' >
    <img  src={azure} alt=""   />
    </div>
    <div className='certificationTitle'>
      <h1>AZ900</h1>
    </div>
    <div className='certificationBody'>
      <p>Certified with Az900 Cloud<br/>Microsoft-Oct2021</p>
    </div>
    </div>
   
    <div className='CertificationContainer1' >
    <div className='Certification1' >
    <img  src={japane} alt=""   />
    </div>
    <div className='certificationTitle1'>
      <h1>Japanese Certificate</h1>
    </div>
    <div className='certificationBody1'>
      <p>Passed Basic and intermediate levels in japanese Language Proficiency Test JLPT</p>
    </div>
    </div>
    </div>
     
    {/* <div class="card">


</div> */}

 

    {/* </div> */}
    </Element>
  )
}

export default CertificationContainer



// <h1>
// Certifications
// </h1>
// <p>I has successfully completed the requirements to be recognized as a certified</p>
// <h3>Passed Basic and intermediate levels in japanese Language Proficiency Test JLPT</h3>

/* <div className='Certificate2'>
<img src={japane} alt="" align="right" width="450" height="350"/>
  </div> */
    {/* <div>
            <p className='certificate_text1'>Certified with Az900 Cloud<br/>Microsoft-Oct2021</p>
        </div> */}
