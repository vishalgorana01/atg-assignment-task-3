import React, {useRef, useEffect} from 'react'
import {useIntersection} from '../CustomHook'

// images
import first from '../../assets/images/veme-app-ui-design.png'
import second from '../../assets/images/veme-blockchain-app-developed.png'



function Blockchain() {
    const triggerRef = useRef(null);
    const isVisible = useIntersection(triggerRef, "-50px");



    useEffect(() => {
        if (isVisible) {
            // callbackFn(); // Trigger a function when the div is visible on view port
        }
    }, [isVisible]);

    return (
        <span className={`relative snap-center flex items-center justify-center w-full min-h-screen bg-[#1D0363] overflow-y-hidden`}
        ref={triggerRef}>
            <img src={first} alt="loading error" className={`absolute -top-72 right-5 h-[36rem] w-[24rem] ease-in-out ${isVisible ? 'translate-y-0 duration-300 opacity-100' : '-translate-y-full duration-0 opacity-0'}`} />
            <img src={second} alt="loading error" className={`absolute -bottom-72 left-5 h-[36rem] w-[24rem] ease-in-out ${isVisible ? 'translate-y-0 duration-300 opacity-100' : 'translate-y-full duration-0 opacity-0'}`} />
        </span>
    )
}

export default Blockchain