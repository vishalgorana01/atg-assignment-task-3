import React, { useState, useRef, useEffect, forwardRef } from 'react'
import Content from './Content'
import Images from './Images'

// react-icons
import { FaArrowUpLong } from "react-icons/fa6";

// images
import progress from '../assets/images/svg with paths.svg'

import first from '../assets/images/nexgtv-entertainment-mobile-app-development.png'
import second from '../assets/images/nexgtv-mobile-app-ui-design.png'
import third from '../assets/images/veme-app-ui-design.png'
import fourth from '../assets/images/veme-blockchain-app-developed.png'
import fifth from '../assets/images/measure-total-body-weight-through-fitness-app.png'
import sixth from '../assets/images/nasa-fitness-tracking-mobile-app.png'
import seventh from '../assets/images/pizza_box.png'
import eight from '../assets/images/dominos-bread.png'
import ninth from '../assets/images/ux-strategy-for-mobile-app-devlopment.png'
import tenth from '../assets/images/domi-img1.png'
import eleventh from '../assets/images/dominos-bread1.png'
import tewelth from '../assets/images/karavan-social-networking-app-screen.png'
import thirteen from '../assets/images/social-networking-app-case-study.png'
import fourteen from '../assets/images/developers-for-social-media-app.png'
import fifteen from '../assets/images/karavan_2.png'
import sixteen from '../assets/images/karavan-social-networking-app-screen-2.png'
import seventeenth from '../assets/images/interior.jpg'
import eighteenth from '../assets/images/erp-app-development-service.png'
import nineteenth from '../assets/images/melltoo-img2.png'
import twenteeth from '../assets/images/melltoo-img1.png'


import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

function Landing() {
    const [index, setIndex] = useState(0)
    const [bgColor, setBgColor] = useState('#5A109A')

    const colors = ['#5A109A', '#4E27CE','#0F113B', '#17263C', '#124AA3', '#022B92', '#01824D']
    const divRef = useRef(null)

    const [count, setCount] = useState(1)

    const headingRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    const heading2Ref = useRef(null)
    const descRef = useRef(null)
    const buttonRef = useRef(null)

    const firstRef = useRef()
    const secondRef = useRef()

    const thirdRef = useRef(null)
    const fourthRef = useRef(null)

    const fifthRef = useRef(null)
    const sixthRef = useRef(null)

    const seventhRef = useRef(null)
    const eightRef = useRef(null)
    const ninthRef = useRef(null)
    const tenthRef = useRef(null)
    const eleventhRef = useRef(null)

    const tewelthRef = useRef(null)
    const thirteenRef = useRef(null)
    const fourteenthRef = useRef(null)
    const fifteenthRef = useRef(null)
    const sixteenthRef = useRef(null)

    const seventeenthRef = useRef(null)
    const eighteenthRef = useRef(null)

    const nineteenthRef = useRef(null)
    const twenteethRef = useRef(null)



    const [active, setActive] = useState({
        active1: true,
        active2: false,
        active3: false,
        active4: false,
        active5: false,
        active6: false,
        active7: false,
    })

    const initialScroll = (value) => {
        if (active.active1) {
            firstRef.current.style.transform = 'translateY(0px)'
            secondRef.current.style.transform = 'translateY(0px)'
        }
    }

    const handleScrollUp = () => {
        if (count > 1 && count <= 7) {
            setCount(count - 1)
            setTimeout(() => {
                setBgColor(colors[count-2])
                headingRef.current.style.transform = `translateY(-${(count - 2) * 2}rem)`;
                titleRef.current.style.transform = `translateY(-${(count - 2) * 4.5}rem)`;
                subtitleRef.current.style.transform = `translateY(-${(count - 2) * 1.75}rem)`;

                heading2Ref.current.style.transform = `translateY(-${(count - 2) * 3}rem)`;
                descRef.current.style.transform = `translateY(-${(count - 2) * 4.5}rem)`;
                buttonRef.current.style.transform = `translateY(-${(count - 2) * 1.75}rem)`;

            }, 200)
        }

        if (active.active2) {
            thirdRef.current.style.transform = 'translateY(-1000px)'
            fourthRef.current.style.transform = 'translateY(1000px)'

            setTimeout(() => {
                setActive({
                    active1: true,
                    active2: false,
                    active3: false,
                    active4: false,
                    active5: false,
                    active6: false,
                    active7: false
                })
                divRef.current.style.backgroundColor = '#cecbd1'

                firstRef.current.style.transform = 'translateY(0px)'
                secondRef.current.style.transform = 'translateY(0px)'
            }, 200)
        }

        if (active.active3) {
            fifthRef.current.style.transform = 'translateY(-1000px)'
            sixthRef.current.style.transform = 'translateY(1000px)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: true,
                    active3: false,
                    active4: false,
                    active5: false,
                    active6: false,
                    active7: false
                })
                divRef.current.style.backgroundColor = '#1d0363'

                thirdRef.current.style.transform = 'translateY(0px)'
                fourthRef.current.style.transform = 'translateY(0px)'
            }, 200)
        }

        if (active.active4) {
            seventhRef.current.style.transform = 'translateX(-1000%)'
            eightRef.current.style.transform = 'translateY(-100%)'
            ninthRef.current.style.transform = 'translateY(-1000px)'
            tenthRef.current.style.transform = 'translateY(100%)'
            eleventhRef.current.style.transform = 'translateX(100%) translateY(100%)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: false,
                    active3: true,
                    active4: false,
                    active5: false,
                    active6: false,
                    active7: false
                })

                divRef.current.style.backgroundColor = '#151649'

                fifthRef.current.style.transform = 'translateY(-0px)'
                sixthRef.current.style.transform = 'translateY(0px)'
            }, 200)
        }

        if (active.active5) {
            tewelthRef.current.style.transform = 'translateY(-100%)'
            thirteenRef.current.style.transform = 'translateY(-100%)'
            fourteenthRef.current.style.transform = 'scale(0)'
            fifteenthRef.current.style.transform = 'translateY(100%)'
            sixteenthRef.current.style.transform = 'translateY(100%)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: false,
                    active3: false,
                    active4: true,
                    active5: false,
                    active6: false,
                    active7: false
                })
                divRef.current.style.backgroundColor = '#0e131c'

                seventhRef.current.style.transform = 'translateX(0px)'
                eightRef.current.style.transform = 'translateY(0px)'
                ninthRef.current.style.transform = 'translateY(0px)'
                tenthRef.current.style.transform = 'translateY(0px)'
                eleventhRef.current.style.transform = 'translateX(0px) translateY(0px)'
            }, 200)
        }

        if (active.active6) {
            seventeenthRef.current.style.transform = 'scale(0)'
            eighteenthRef.current.style.transform = 'translateY(1000px)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: false,
                    active3: false,
                    active4: false,
                    active5: true,
                    active6: false,
                    active7: false
                })

                divRef.current.style.background = `#2ecbdc`

                tewelthRef.current.style.transform = 'translateY(0px)'
                thirteenRef.current.style.transform = 'translateY(0px)'
                fourteenthRef.current.style.transform = 'scale(1)'
                fifteenthRef.current.style.transform = 'translateY(0px)'
                sixteenthRef.current.style.transform = 'translateY(0px)'
            }, 200)
        }

        if (active.active7) {
            nineteenthRef.current.style.transform = 'translateY(100%)'
            twenteethRef.current.style.transform = 'translateY(100%)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: false,
                    active3: false,
                    active4: false,
                    active5: false,
                    active6: true,
                    active7: false
                })

                divRef.current.style.background = `#01B76A`

                seventeenthRef.current.style.transform = 'scale(1)'
                eighteenthRef.current.style.transform = 'translateY(0px)'
            }, 200)
        }
    }

    const handleScrollDown = (value) => {
        if (count >= 0 && count < 7) {
            setCount(count + 1)

            setTimeout(() => {
                setBgColor(colors[count])
                headingRef.current.style.transform = `translateY(-${count * 2}rem)`
                titleRef.current.style.transform = `translateY(-${count * 4.5}rem)`
                subtitleRef.current.style.transform = `translateY(-${count * 1.75}rem)`

                heading2Ref.current.style.transform = `translateY(-${count * 3}rem)`
                descRef.current.style.transform = `translateY(-${count * 4.5}rem)`
                buttonRef.current.style.transform = `translateY(-${count * 1.75}rem)`
            }, 200)
        }

        if (active.active1) {
            firstRef.current.style.transform = 'translateY(1000px)'
            firstRef.current.style.transitionDuration = '0.7s'
            secondRef.current.style.transform = 'translateY(1000px)'
            secondRef.current.style.transitionDuration = '0.5s'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: true,
                    active3: false,
                    active4: false,
                    active5: false,
                    active6: false,
                    active7: false
                })
                divRef.current.style.backgroundColor = '#1D0363'

                thirdRef.current.style.transform = 'translateY(0px)'
                fourthRef.current.style.transform = 'translateY(0px)'

            }, 200)
        }

        if (active.active2) {
            thirdRef.current.style.transform = 'translateY(-1000px)'
            fourthRef.current.style.transform = 'translateY(1000px)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: false,
                    active3: true,
                    active4: false,
                    active5: false,
                    active6: false,
                    active7: false
                })
                divRef.current.style.backgroundColor = '#151649'

                fifthRef.current.style.transform = 'translateY(0px)'
                sixthRef.current.style.transform = 'translateY(0px)'
            }, 200)
        }

        if (active.active3) {
            fifthRef.current.style.transform = 'translateY(-1000px)'
            sixthRef.current.style.transform = 'translateY(1000px)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: false,
                    active3: false,
                    active4: true,
                    active5: false,
                    active6: false,
                    active7: false
                })
                divRef.current.style.backgroundColor = '#0E131C'

                seventhRef.current.style.transform = 'translateX(0px)'
                eightRef.current.style.transform = 'translateY(0px)'
                ninthRef.current.style.transform = 'translateY(0px)'
                tenthRef.current.style.transform = 'translateY(0px)'
                eleventhRef.current.style.transform = 'translateX(0px) translateY(0px)'
            }, 200)
        }

        if (active.active4) {
            seventhRef.current.style.transform = 'translateX(-1000%)'
            eightRef.current.style.transform = 'translateY(-100%)'
            ninthRef.current.style.transform = 'translateY(-1000px)'
            tenthRef.current.style.transform = 'translateY(100%)'
            eleventhRef.current.style.transform = 'translateX(100%) translateY(100%)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: false,
                    active3: false,
                    active4: false,
                    active5: true,
                    active6: false,
                    active7: false
                })
                divRef.current.style.backgroundColor = '#2ECBDC'

                tewelthRef.current.style.transform = 'translateY(0px)'
                thirteenRef.current.style.transform = 'translateY(0px)'
                fourteenthRef.current.style.transform = 'scale(1)'
                fifteenthRef.current.style.transform = 'translateY(0px)'
                sixteenthRef.current.style.transform = 'translateY(0px)'
            }, 200)
        }

        if (active.active5) {
            tewelthRef.current.style.transform = 'translateY(-100%)'
            thirteenRef.current.style.transform = 'translateY(-100%)'
            fourteenthRef.current.style.transform = 'scale(0)'
            fifteenthRef.current.style.transform = 'translateY(100%)'
            sixteenthRef.current.style.transform = 'translateY(100%)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: false,
                    active3: false,
                    active4: false,
                    active5: false,
                    active6: true,
                    active7: false
                })

                divRef.current.style.background = `white`

                seventeenthRef.current.style.transform = 'scale(1)'
                eighteenthRef.current.style.transform = 'translateY(0)'
            }, 200)
        }

        if (active.active6) {
            seventeenthRef.current.style.transform = 'scale(0)'
            eighteenthRef.current.style.transform = 'translateY(1000px)'

            setTimeout(() => {
                setActive({
                    active1: false,
                    active2: false,
                    active3: false,
                    active4: false,
                    active5: false,
                    active6: false,
                    active7: true
                })

                divRef.current.style.background = `#01B76A`

                nineteenthRef.current.style.transform = 'translateY(0px)'
                twenteethRef.current.style.transform = 'translateY(0px)'
            }, 200)
        }
    }

    useEffect(() => {
        initialScroll()
    }, [])

    return (
        <>
            <section className='flex items-center justify-center w-full min-h-screen h-auto'>
                <div className='flex items-center justify-center w-full min-h-screen h-auto'
                // onScrollCapture={(ele) => { handleScroll(ele.currentTarget.scrollTop) }}
                >

                    <div className={`flex z-10 fixed top-0 left-0 items-center justify-center w-1/2 min-h-screen max-h-screen`} style={{ backgroundColor: bgColor }}
                    >
                        <img src={progress} alt="loading error" className='absolute top-10 -right-32 rounded-full h-96 w-96' style={{ backgroundColor: bgColor }} />

                        <img src={progress} alt="loading error" className='absolute top-10 -right-32 rounded-full h-96 w-96' style={{ backgroundColor: bgColor }} />

                        <span className='flex flex-col absolute top-40 -right-32 items-start justify-center'>
                            <span className='flex text-[#fff] text-2xl font-normal tracking-wide flex-col items-start justify-start max-h-8 overflow-y-hidden'>
                                <span className='flex flex-col items-start justify-center duration-500' ref={headingRef}>
                                    <span className='opacity-0'>In visible</span>
                                    <span className=''>The Next Big</span>
                                    <span className=''>Powered by advance</span>
                                    <span className=''>Redifing</span>
                                    <span className=''>Text Headline</span>
                                    <span className=''>Developing ERP Solution for</span>
                                    <span className=''>Biggest Classfields</span>
                                </span>
                            </span>

                            <span className='flex text-[#fff] text-7xl font-semibold tracking-wide flex-col items-start justify-start max-h-20 overflow-y-hidden'>
                                <span className='flex flex-col items-start justify-start duration-500' ref={titleRef}>
                                    <span className='mr-16 text-6xl py-1'>25M+ Downloads</span>
                                    <span className=''>Blockchain</span>
                                    <span className=''>NASA</span>
                                    <span className=''>Blockchain</span>
                                    <span className=''>Text Headline</span>
                                    <span className=''>Text Headline</span>
                                    <span className=''>East Asia</span>
                                </span>
                            </span>

                            <span className='flex text-[#fff] text-xl font-normal tracking-wide flex-col items-end justify-start max-h-8 overflow-y-hidden mt-1' style={{ width: '-webkit-fill-available' }}>
                                <span className='flex flex-col items-start justify-start duration-500' ref={subtitleRef}>
                                    <span className='mr-16'>on appstore & google playstore</span>
                                    <span className=''>Revolution</span>
                                    <span className=''>algorithms</span>
                                    <span className=''>and UI design</span>
                                    <span className=''>Footer headline</span>
                                    <span className=''>in fututre industry</span>
                                    <span className=''>Countries</span>
                                </span>
                            </span>
                        </span>

                        <span className='flex flex-col absolute bottom-3 left-5 items-start justify-center'>
                            <span className='flex text-[#fff] text-5xl font-semibold tracking-wide flex-col items-starat justify-start max-h-12 overflow-y-hidden'>
                                <span className='flex flex-col items-start justify-start duration-500' ref={heading2Ref}>
                                    <span className=''>ABC 123</span>
                                    <span className=''>ABC 234</span>
                                    <span className=''>ABC 345</span>
                                    <span className=''>ABC 456</span>
                                    <span className=''>ABC 567</span>
                                    <span className=''>ABC 678</span>
                                    <span className=''>ABC 23478</span>
                                </span>
                            </span>

                            <span className='flex text-[#fff] text-base font-normal tracking-wide flex-col items-start justify-start max-h-[4.5rem] overflow-y-hidden mt-5'>
                                <span className='flex flex-col items-start justify-start duration-500' ref={descRef}>
                                    <span className=''>We are the best web development <br /> company in the world.<br /> <br /></span>
                                    <span className=''>We are the best web development <br /> company in the world. <br /> <br /></span>
                                    <span className=''>We are the best <br /> web development company <br /> in the world.</span>
                                    <span className=''>We are the best <br /> web development company <br /> in the world.</span>
                                    <span className=''>We are the best <br /> web development company <br /> in the world.</span>
                                    <span className=''>Best since 2017 <br /> We offer wide range of<br /> web development and app development.</span>
                                    <span className=''>We are the best <br /> web development company <br /> in the world.</span>
                                </span>
                            </span>

                            <span className='flex text-[#fff] text-xl font-normal tracking-wide flex-col items-start justify-start max-h-8 overflow-y-hidden mt-8' style={{ width: '-webkit-fill-available' }} >
                                <span className='flex flex-col items-start justify-start duration-500' ref={buttonRef}>
                                    <span className=' flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1'>View Case Study <FaArrowUpLong className='rotate-90 mt-1.5 ml-3.5' /> </span>
                                    <span className='cursor-pointer duration-300 hover:-translate-y-1'>Coming Soon </span>
                                    <span className='cursor-pointer duration-300 hover:-translate-y-1'>Coming Soon </span>
                                    <span className=' flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1'>View Case Study <FaArrowUpLong className='rotate-90 mt-1.5 ml-3.5' /> </span>
                                    <span className=' flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1'>View Case Study <FaArrowUpLong className='rotate-90 mt-1.5 ml-3.5' /> </span>
                                    <span className=' flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1'>View Case Study <FaArrowUpLong className='rotate-90 mt-1.5 ml-3.5' /> </span>
                                    <span className='cursor-pointer duration-300 hover:-translate-y-1'>Coming Soon </span>
                                </span>
                            </span>
                        </span>
                    </div>

                    {/* <Content /> */}

                    {/* right part */}
                    <div className={`hideScrollbar bg-[#CECBD1] flex  absolute top-0 right-0 flex-col items-start justify-start w-1/2 max-h-screen overflow-y-hidden overflow-x-hidden bg-cover`}
                        // onScrollCapture={(ele) => console.log(ele.currentTarget.scrollTop)}
                        ref={divRef}
                    >

                        <span className='snap-center flex items-center justify-center w-full min-h-screen max-h-screen bg-transparent overflow-y-hidden'>

                            {/* slide 1 */}
                            <img src={first} alt="loading error" className={`h-[28rem] duration-500 translate-y-full w-[18rem]`} ref={firstRef} />
                            <img src={second} alt="loading error" className={`h-[28rem] duration-700 translate-y-full w-[18rem]`} ref={secondRef} />

                            {/* slide 2 */}
                            <img src={third} alt="loading error" className={`absolute -top-72 right-5 h-[36rem] w-[24rem] duration-500 ease-in-out -translate-y-full`}
                                ref={thirdRef} />
                            <img src={fourth} alt="loading error" className={`absolute -bottom-72 left-5 h-[36rem] w-[24rem] duration-500 ease-in-out translate-y-full`}
                                ref={fourthRef} />

                            {/* slide 3 */}
                            <img src={fifth} alt="loading error" className={`absolute -top-20 right-5 h-[32rem] w-[18rem] duration-500 ease-in-out -translate-y-full`}
                                ref={fifthRef} />
                            <img src={sixth} alt="loading error" className={`absolute bottom-10 right-80 h-[32rem] w-[20rem] duration-500 ease-in-out translate-y-[40rem]`}
                                ref={sixthRef} />

                            {/* slide 4 */}
                            <img src={seventh} alt="loading error" className={`absolute -top-12 left-0 h-[12rem] w-[20rem] duration-500 ease-in-out] -translate-x-full`}
                                ref={seventhRef} />
                            <img src={eight} alt="loading error" className={`absolute -top-56 right-5 h-[24rem] w-[16rem] duration-500 ease-in-out -translate-y-full`}
                                ref={eightRef} />
                            <img src={ninth} alt="loading error" className={`absolute top-52 right-16 h-[28rem] w-[16rem] duration-500 ease-in-out -translate-y-[50rem]`}
                                ref={ninthRef} />
                            <img src={tenth} alt="loading error" className={`absolute -bottom-10 left-5 h-[28rem] w-[16rem] duration-500 ease-in-out translate-y-full`}
                                ref={tenthRef} />
                            <img src={eleventh} alt="loading error" className={`absolute -bottom-20 -right-16 h-[18rem] w-[24rem] duration-500 ease-in-out translate-x-full translate-y-full`}
                                ref={eleventhRef} />

                            {/* slide 5 */}
                            <img src={tewelth} alt="loading error" className={`absolute -top-28 right-[26rem] h-[20rem] w-[12rem] duration-500 ease-in-out -translate-y-full `}
                                ref={tewelthRef} />
                            <img src={thirteen} alt="loading error" className={`absolute -top-12 right-56 h-[20rem] w-[12rem] duration-500 ease-in-out -translate-y-full`}
                                ref={thirteenRef} />
                            <img src={fourteen} alt="loading error" className={`absolute top-auto right-5 h-[24rem] w-[12rem] duration-500 ease-in-out scale-0`}
                                ref={fourteenthRef} />
                            <img src={fifteen} alt="loading error" className={`absolute -bottom-28 right-[26rem] h-[20rem] w-[12rem] duration-500 ease-in-out translate-y-full`}
                                ref={fifteenthRef} />
                            <img src={sixteen} alt="loading error" className={`absolute -bottom-12 right-56 h-[20rem] w-[12rem] duration-500 ease-in-out translate-y-full`}
                                ref={sixteenthRef} />

                            {/* slide 6 */}
                            <img src={seventeenth} alt="loading error" className={`absolute h-full w-full object-cover duration-500 ease-in-out scale-0`}
                                ref={seventeenthRef} />
                            <img src={eighteenth} alt="loading error" className={`absolute duration-500 ease-in-out translate-y-[48rem]`}
                                ref={eighteenthRef} />

                            {/* slide 7 */}
                            <img src={nineteenth} alt="loading error" className={`absolute duration-500 right-56 -bottom-40 h-[32rem] w-[20rem] ease-in-out translate-y-full `}
                                ref={nineteenthRef} />
                            <img src={twenteeth} alt="loading error" className={`absolute duration-500 -bottom-32 right-14 h-[32rem] w-[16rem] ease-in-out translate-y-full`}
                                ref={twenteethRef} />

                        </span>

                        <button className='fixed bottom-3 bg-white py-1 px-3 cursor-pointer right-24'
                            onClick={() => handleScrollUp()}
                        >up</button>
                        <button className='fixed bottom-3 bg-white py-1 px-3 cursor-pointer right-5'
                            onClick={() => handleScrollDown()}
                        >down</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing