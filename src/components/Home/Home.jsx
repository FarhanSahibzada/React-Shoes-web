import React, { useEffect, useState } from 'react'
import shoeimage from "../../images/nike-1.png"
import "./home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLocation } from 'react-router-dom'


function Home({ price, Brand, description }) {
    const [colors, setcolors] = useState(["#000000", "#FFFFFF", "#1F3A93", "#808080", "#D2B48C"])

  
    const { state } = useLocation()

    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 200,
            delay: 100,
        })

    }, []);

    return (
        <div>

            <div
                className="hero min-h-screen relative  z-0"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1574177556859-1362f72ed6f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXMlMjBiYWNrZ3JvdW5kJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="min-w-md ">
                        <h1 data-aos="fade-up" className="mb-4 text-5xl font-bold">{state?.name || "Nike Z-1"}</h1>
                        <p data-aos="fade-up" className=" mb-60 md:mb-40 w-full font-semibold" >
                            {state?.description || "Step up your style game with these sleek and comfortable shoes, designed for all-day wear. Crafted from premium materials, they provide the perfect balance of fashion and functionality. Whether you're heading to work or out for a casual stroll, these shoes will keep you looking sharp and feeling great."}
                        </p>
                        <div data-aos="fade-down" className='w-404 h-20 z-0  '>
                            <img className='image ' src={state?.image || shoeimage} alt="Shoe" />
                        </div>
                    </div>
                </div>
            </div>
            {/* first page ended  */}

            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse space-x-6 space-y-4 lg:space-x-4 lg:space-y-0">
                    <div data-aos="zoom-in" className="text-center ms-8  lg:text-left">
                        <h1 className="text-5xl font-bold">{state?.name || "Nike Z-1"}</h1>
                        <p className="py-6">
                            {state?.description || "Step up your style game with these sleek and comfortable shoes, designed for all-day wear. Crafted from premium materials, they provide the perfect balance of fashion and functionality. Whether you're heading to work or out for a casual stroll, these shoes will keep you looking sharp and feeling great."}
                        </p>
                        <div className=' px-6 flex gap-10 w-40'>
                            <p className="py-2 text-orange-500 font-bold text-xl">
                                Price: {state?.price || "$100"}
                            </p>
                            <p className="py-2 text-blue-500 font-bold text-xl">
                                Brand : {state?.Brand || "Nike"}
                            </p>
                        </div>
                        <div className='font-bold text-xl'>
                            Colors:
                            {colors.map((val, index) => (
                                <div
                                    key={index}
                                    className="ms-4 shadow-2xl w-4 h-4 inline-block mr-2"
                                    style={{ backgroundColor: val }}
                                >
                                </div>
                            ))}
                        </div>

                    </div>
                    <div data-aos="flip-right" className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
                        <img src={state?.image || shoeimage} alt="" o
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home