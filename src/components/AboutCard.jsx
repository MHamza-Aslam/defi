import React, { useState } from 'react'
import Data from './Api'
function AboutCard() {
    const [card]=useState(Data.About[0]);
    // console.log(card.icon3,"test card");
  return (
    <div className='grid gap-4 lg:grid-cols-4 sm:grid-cols-2'>
        
        <div className='flex flex-col px-8 py-12 text-left border rounded-2xl'>
            <div>
            <div className="bg-[#00d8ff] inline-flex p-2 rounded-full"> 
           {card.icon3}
           </div>
            <h3 className='py-4 text-3xl font-bold'>{card.head3}</h3>
            <p>{card.para3}</p>  
            </div>
         
        </div>
        <div className='flex flex-col px-8 py-12 text-left border rounded-2xl'>
        <div>
            <div className="bg-[#00d8ff] inline-flex p-2 rounded-full"> 
           {card.icon4}
           </div>
            <h3 className='py-4 text-3xl font-bold'>{card.head3}</h3>
            <p>{card.para3}</p>  
            </div>
        </div>
        <div className='flex flex-col px-8 py-12 text-left border rounded-2xl'>
        <div>
            <div className="bg-[#00d8ff] inline-flex p-2 rounded-full"> 
           {card.icon5}
           </div>
            <h3 className='py-4 text-3xl font-bold'>{card.head3}</h3>
            <p>{card.para3}</p>  
            </div>
        </div>
        <div className='flex flex-col px-8 py-12 text-left border rounded-2xl'>
        <div>
            <div className="bg-[#00d8ff] inline-flex p-2 rounded-full"> 
           {card.icon6}
           </div>
            <h3 className='py-4 text-3xl font-bold'>{card.head3}</h3>
            <p>{card.para3}</p>  
            </div>
        </div>
    </div>
  )
}

export default AboutCard