import React, { useState } from 'react'

// images
import progress from '../assets/images/svg with paths.svg'

// custom css
import '../assets/css/global.css'


function Content() {
    const [bgColor, setBgColor] = useState('#5A109A')

    const scroll = () => {
        console.log("up")
    }

    return (
        <div className={`flex z-10 fixed top-0 left-0 items-center justify-center w-1/2 min-h-screen max-h-screen`} style={{ backgroundColor: bgColor }}
        onScroll={() => scroll()}>
            <img src={progress} alt="loading error" className='absolute top-10 -right-32 rounded-full h-96 w-96' style={{backgroundColor: bgColor}} />
        </div>
    )
}

export default Content