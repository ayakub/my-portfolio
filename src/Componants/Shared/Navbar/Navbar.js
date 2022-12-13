import React from "react";
import background from '../../../assests/bg.jpg'
import { FaBars, FaHome } from "react-icons/fa";
import Font, { Text } from 'react-font'
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav
                className="relative flex flex-wrap items-center justify-between px-2 py-3 "

                style={{ backgroundImage: `url(${background})` }} >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-primary"
                            href="#pablo"
                        >
                            <Font family='Script'>
                                <p>AYAKUB</p>
                            </Font>
                        </a>
                        <button
                            className="text-primary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars></FaBars>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center text-red-500" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to='/'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#about"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#contact"
                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact</span>
                                </a>
                                <Link to='/blog'
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"

                                >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">blog</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}