import React, { useState } from 'react'
import Data from './Api'
function Developers() {
    const [dev]=useState(Data.Developers);
    // console.log(dev,"test");
  return (
    <div className='w-full text-white bg-black '>
<div className='max-w-[1240px] px-4 py-16 md:flex'>
  <div className=''>
    <h1>{dev[0].heading1}</h1>
    <p>Checkout the <span className="blue"> documentation</span>, the <span className="blue"> quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.</p>
    
    </div>
     
        <div className='flex justify-center w-full py-16'>
            <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={dev[0].src} alt="/" />
        </div>
</div>
    </div>
  )
}

export default Developers