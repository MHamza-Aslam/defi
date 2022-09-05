import React, { useState } from 'react'
import Data from './Api'
function Subscribe() {
    const [sub]=useState(Data.Subscribe);
    // console.log(sub,"test");
  return (
    <div className='w-full px-4 py-16 text-center text-white bg-black'>
<h1>{sub[0].head10}</h1>
<div className='py-4'>
    <input className='p-3 mr-4 rounded-3xl' type="Email" placeholder='Please enter your Email' />
    <button>Sign Up</button>
</div>
<div className='flex items-center justify-center py-2'>
    <input type="checkbox" className='mr-2'/>
    <p>{sub[0].para10}</p>
</div>
    </div>
  )
}

export default Subscribe