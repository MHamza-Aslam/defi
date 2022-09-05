import React, { useState } from 'react'
import Data from './Api'
const Navbar = () => {
    const [nav]=useState(Data.navbar)
    const [navbar1,setnavbar1]=useState(false)
    const handleNav=()=>{
      setnavbar1(!navbar1)
    }
  return (
     
    <div className='w-full h-[90px] bg-black'>
<div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full '>
<div>
    <h1 className='text-[#00d8ff]'>{nav.logo}</h1>
</div>
<div className='hidden md:flex'>
<ul className='flex items-center text-white'>
     {nav.list.map((e,i)=>{
        return(
            <li key={i}>{e}</li>    
        )
     })}
    <button className='ml-4 '>Use Defi</button>
     </ul>
</div>
<div onClick={handleNav} className="block text-white md:hidden">{navbar1 ? nav.icon2 : nav.icon}</div>
<div className={navbar1 ? "absolute w-full text-white bg-black top-[90px] left-0 flex justify-center text-center": "absolute left-[-100%]"}>
  <ul>
  {nav.list.map((e,i)=>{
        return(
            <li className='text-2xl' key={i}>{e}</li>    
        )
     })}
    <button className='m-8 '>Use Defi</button>

  </ul>
</div>
</div>
    </div>
  )
}

export default Navbar;