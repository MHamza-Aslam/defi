import React, { useContext } from 'react'
import {NameData} from "../index"
function Footer() {
    const myValue=useContext(NameData)
  return (
    <div className='py-16 text-center text-white bg-black'>
<div className='max-w-[1240px] mx-auto px-4 grid lg:grid-cols-5 grid-cols-2'>
    <div>
        <h3 className='text-xl font-bold border-b-4 border-[#00d8ff] inline-block mt-4'>Products</h3>
        <ul>
            <li>App</li>
            <li>Token Lists</li>
            <li>Analytics</li>
            <li>{myValue}</li>
        </ul>
    </div>
    <div>
        <h3 className='text-xl font-bold border-b-4 border-[#00d8ff] inline-block mt-4'>Products</h3>
        <ul>
            <li>App</li>
            <li>Token Lists</li>
            <li>Analytics</li>
            <li>Defi</li>
        </ul>
    </div>
    <div>
        <h3 className='text-xl font-bold border-b-4 border-[#00d8ff] inline-block mt-4'>Products</h3>
        <ul>
            <li>App</li>
            <li>Token Lists</li>
            <li>Analytics</li>
            <li>Defi</li>
        </ul>
    </div>
    <div>
        <h3 className='text-xl font-bold border-b-4 border-[#00d8ff] inline-block mt-4'>Products</h3>
        <ul>
            <li>App</li>
            <li>Token Lists</li>
            <li>Analytics</li>
            <li>Defi</li>
        </ul>
    </div>
    <div>
        <h3 className='text-xl font-bold border-b-4 border-[#00d8ff] inline-block mt-4'>Products</h3>
        <ul>
            <li>App</li>
            <li>Token Lists</li>
            <li>Analytics</li>
            <li>Defi</li>
        </ul>
    </div>
</div>
    </div>
  )
}

export default Footer