import React, { useState } from 'react'
import Data from './Api'
const Hero = () => {
    // console.log(Data.Hero,"test");
    const [hero]=useState(Data.Hero)
    // console.log(hero,"test hero");
  return (
    <div className='w-full h-[90vh] top-[90px] '>
    <video className='absolute object-cover w-full h-full -z-10' src={hero[0].vide01} autoPlay loop muted/> 
<div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
<h1 className='text-white'>{hero[0].head1}</h1> 
<h1 className='py-2 text-white'><span className='blue'> Trading</span>Protocol</h1>
<p className='py-4 text-xl'>{hero[0].para1}</p>
<div className="">
<button className='m-2'>Use Defi</button>
<button className='m-2'>FAQ</button>
</div>
</div>
<div className="">
    <p className='text-2xl font-bold text-center text-white'>{hero[0].para2}</p>
</div>
    </div>
  )
}

export default Hero