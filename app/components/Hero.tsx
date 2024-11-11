"use client"
import React from "react";
import Image from "next/image";
import profile from '../../public/assets/ibad.png'
import Link from "next/link";

const Hero = () => {
    return(
        <section className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold">
                        Hi, I'm <span className="text-emerald-400">Ibad Ur Rehman</span>
                        <br className="hidden lg:inline-block" />
                        <span className="text-3xl font-medium mt-2 block">Frontend Developer</span>
                    </h1>
                    
                    <div className="w-[100px] h-[3px] bg-emerald-400 rounded-xl mb-6"></div>
                    
                    <p className="mb-8 leading-relaxed text-lg">
                        Passionate Frontend Developer with expertise in modern web technologies.
                        Specializing in creating responsive, user-friendly applications with clean
                        and efficient code. Committed to delivering innovative solutions that make
                        a real impact.
                    </p>
                    
                    <div className="flex gap-4">
                        <Link href={"#Contact"}>
                            <button className="inline-flex items-center text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 border-0 py-2 px-6 
                            focus:outline-none hover:from-emerald-500 hover:to-cyan-500 rounded-lg text-lg transition-all duration-300 font-semibold">
                              Contact Me
                            </button>
                        </Link>
                        <Link href={"#project"}>
                            <button className="inline-flex items-center text-emerald-400 border-2 border-emerald-400 py-2 px-6 
                            focus:outline-none hover:bg-emerald-400 hover:text-gray-900 rounded-lg text-lg transition-all duration-300 font-semibold">
                                My Projects
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image 
                        className="object-cover object-center rounded-full shadow-2xl shadow-emerald-400/20"
                        src={profile}
                        width={400}
                        height={400}
                        alt="Ibad Ur Rehman"
                        placeholder="blur"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero