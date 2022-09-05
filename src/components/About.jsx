import React, { useState } from 'react'
import Data from './Api'
import AboutCard from './AboutCard'
function About() {
    const [about]=useState(Data.About)
    
  return (
    <div className="w-full text-center text-white bg-black">
<div className='max-w-full px-4 py-16 mx-auto '>
     <h1 className='py-4'>{about[0].head2}</h1>
     <p className='py-4 text-xl'>{about[0].para3}</p>
     <div>
        <AboutCard/>
        
     </div>
    </div>
    </div>
    
  )
}

export default About