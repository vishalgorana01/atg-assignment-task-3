import React, { useRef, useState } from 'react'
import Abc123 from './Section2/Abc123'
import Blockchain from './Section2/Blockchain'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// custom css
import '../assets/css/global.css'


function Images({activeState}) {
    const colors = ['#CECBD1', '#1D0363']
    const [index, setIndex] = useState(0)

    const divRef = useRef(null)
    const [height, setHeight] = useState(0)

    return (
        <div className={`hideScrollbar bg-[${colors[index]}] flex snap-y snap-mandatory absolute top-0 right-0 flex-col items-start justify-start w-1/2 max-h-screen overflow-scroll overflow-x-hidden` } 
    //    onScrollCapture={(ele) => console.log(ele.currentTarget.scrollTop)}
        ref={divRef}>
            {/* <Abc123 />
            <Blockchain /> */}
            <span className='snap-center flex items-center justify-center w-full min-h-screen bg-red-400'>
            </span>

            <span className='snap-center flex items-center justify-center w-full min-h-screen bg-gray-400'>
            </span>

            <span className='snap-center flex items-center justify-center w-full min-h-screen bg-blue-400'>
            </span>

            <span className='snap-center flex items-center justify-center w-full min-h-screen bg-pink-400'>
            </span>

            <span className='snap-center flex items-center justify-center w-full min-h-screen bg-yellow-400'>
            </span>

            <span className='snap-center flex items-center justify-center w-full min-h-screen bg-purple-400'>
            </span>
        </div>
    )
}

export default Images