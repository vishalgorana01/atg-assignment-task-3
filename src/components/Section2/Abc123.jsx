import React, { useEffect, useRef } from 'react'
import { useInViewport } from 'react-in-viewport';
import { useIntersection } from '../CustomHook'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images
import first from '../../assets/images/nexgtv-entertainment-mobile-app-development.png'
import second from '../../assets/images/nexgtv-mobile-app-ui-design.png'
gsap.registerPlugin(ScrollTrigger);

function Abc123() {
    const triggerRef = useRef(null);

    const ref1 = useRef(null)

    gsap.to(ref1.current, {
        scrollTrigger:{
            trigger: ref1.current,
            start: '20px 80%',
            end: '+=300',
            toggleActions: "restart pause none pause"
        },
        y: 150,
    })

    const isVisible = useIntersection(triggerRef, "-50px");

    useEffect(() => {
        if (isVisible) {
            // callbackFn(); // Trigger a function when the div is visible on view port
        }
    }, [isVisible]);

    return (
        <span className={`snap-center flex relative items-center justify-center w-full min-h-screen overflow-y-hidden bg-[#CECBD1]`}
            ref={triggerRef}>
            <img src={first} alt="loading error" className={`h-[28rem] w-[18rem] ref1 ${isVisible ? 'translate-y-0 duration-300 opacity-100' : 'translate-y-full duration-0 opacity-0'}`} ref={ref1} />
            <img src={second} alt="loading error" className={`h-[28rem] w-[18rem] ${isVisible ? 'translate-y-0 duration-500 opacity-100' : 'translate-y-full duration-0 opacity-0'}`} />
        </span>
    )
}

export default Abc123