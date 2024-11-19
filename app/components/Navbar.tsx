import React from 'react'
import Link from 'next/link'
import { AiOutlineCloudDownload } from "react-icons/ai";


const Navbar = () => {
    return(
      <div className="bg-white z-50 sticky top-0">
        <header className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 body-font">
          <div className="container mx-auto flex p-2 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
              <span className="ml-3 text-xl text-emerald-400 font-bold">
                Ibad Ur Rehman
              </span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-emerald-300 text-base justify-center">
              <Link href={"/"} className="mr-5 hover:text-emerald-400 transition-colors duration-300">
                Home
              </Link>
              <Link href={"/about"} className="mr-5 hover:text-emerald-400 transition-colors duration-300">
                About
              </Link>
              <Link href={"/skills"} className="mr-5 hover:text-emerald-400 transition-colors duration-300">
                Skills
              </Link>
              <Link href={"/projects"} className="mr-5 hover:text-emerald-400 transition-colors duration-300">
                Projects
              </Link>
              <Link href={"/contact"} className="mr-5 hover:text-emerald-400 transition-colors duration-300">
                Contact
              </Link>
            </nav>
            <Link href="/assets/cv.pdf">
              <button className="inline-flex items-center text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 border-0 py-2 px-6 
    focus:outline-none hover:from-emerald-500 hover:to-cyan-500 rounded-lg text-base mt-4 md:mt-0 transition-all duration-300 font-semibold">
                Download CV
                <AiOutlineCloudDownload className="text-xl ml-2" />
              </button>
            </Link>
          </div>
        </header>
      </div>
    )
}
export default Navbar
