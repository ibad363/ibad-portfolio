import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <span className="ml-3 text-xl text-emerald-400 font-semibold">
                        Ibad Ur Rehman
                    </span>
                </a>
                <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
                    © 2024 Ibad Ur Rehman
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
                    <Link 
                        target="_blank"
                        href="https://www.linkedin.com/in/ibad-ur-rehman-developer/"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                    >
                        <FaLinkedin className="text-3xl" />
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer