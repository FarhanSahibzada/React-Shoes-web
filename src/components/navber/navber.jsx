import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import "../all.css"

function Navber() {

    const [scrol, setscrol] = useState(false);
    const [checked, setchecked] = useState(false);
    const location = useLocation();

    useEffect(() => {

        if (location.pathname == "/") {
            setchecked(true)
            const handlescroll = () => {
                setchecked(true)
                if (window.scrollY > 250) {
                    setscrol(true)
                } else {
                    setscrol(false)
                }

            }
            window.addEventListener('scroll', handlescroll);


            return () => { window.removeEventListener('scroll', handlescroll) }
        } else {
            setchecked(false)
        }
    }, [location])

    return (
        <div className={`navbar  fixed top-0 transition-colors  ${checked ? (scrol ? "bg-base-300" : "bg-transparent") : "bg-base-300"}  duration-700 shadow-lg `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden ${checked ? "text-white" :"text-black" } `}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `font-bold   ${isActive ? "bg-black text-gray-400" : "text-white"}`} >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="About"
                                className={({ isActive }) => `font-bold ${isActive ? "bg-black text-white" : "text-gray-400"}`} >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="contact"
                                className={({ isActive }) => `font-bold ${isActive ? "bg-black text-white" : "text-gray-400"}`} >
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="Card"
                                className={({ isActive }) => `font-bold ${isActive ? "bg-black text-white" : "text-gray-400"}`} >
                                More Shoes
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="/" className={`btn btn-ghost text-xl  ${checked ? (scrol ? "text-gray-400" : "text-white") : "text-black"}`}>Shoes Web</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 me-20">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => ` font-bold ${checked ?( scrol ? "text-gray-400" : "text-white") : "text-gray-600"} ${isActive ? "text-gray-400 bg-black" : "text-gray-400"}`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="contact"
                            className={({ isActive }) => ` font-bold ${checked ?( scrol ? "text-gray-400" : "text-white") : "text-gray-600"} ${isActive ? "text-gray-400 bg-black" : "text-gray-400"}`}>
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="About"
                            className={({ isActive }) => `font-bold ${checked ?( scrol ? "text-gray-400" : "text-white") : "text-gray-600"} ${isActive ? "text-gray-400 bg-black" : "text-gray-400"}`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="Card"
                            className={({ isActive }) => `font-bold ${checked ?( scrol ? "text-gray-400" : "text-white") : "text-gray-600"} ${isActive ? "text-gray-400 bg-black" : "text-gray-400"}`}>
                            More Shoes
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link to="#" className="btn">Button</Link>
            </div> */}
        </div>
    )
}

export default Navber
