"use client"
import React from "react";
import Image from "next/image";
import profile from '../../public/assets/ibad.png'
import Link from "next/link";

const Hero = () => {
    return(
        <section className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div className="mx-auto px-16 py-20 flex flex-col md:flex-row items-center">
                {/* first section */}
                <div className="flex flex-col items-center md:items-start w-full md:w-1/2 md:flex-grow md:pr-16 lg:pr-24 mb-16 md:mb-0 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-2">Hi, I'm <span className="text-emerald-400">Ibad Ur Rehman</span></h1>
                    <h3 className="font-bold text-3xl mb-4">Frontend Developer</h3>
                    <div className="w-36 h-1 rounded-lg bg-emerald-500 mb-4"></div>
                    <p className="mb-8 text-lg leading-relaxed">Passionate Frontend Developer with expertise in modern web technologies. Specializing in creating responsive, user-friendly applications with clean and efficient code. Committed to delivering innovative solutions that make a real impact.</p>
                    <div className="flex gap-3">
                        <Link href={"/contact"}><button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 text-lg font-semibold px-6 py-2 rounded-lg focus:outline-none hover:from-emerald-500 hover:to-cyan-500 ">Contact Me</button></Link>
                        <Link href={"/projects"}><button className="border-emerald-400 text-emerald-400 font-semibold text-lg border-2 py-2 px-6 rounded-lg focus:outline-none hover:bg-emerald-400 hover:text-gray-900">My Projects</button></Link>
                    </div>
                </div>
                {/* second section */}
                <div className="md:w-[40%] w-full inline-flex justify-center">
                    <Image
                    src={profile}
                    alt="Profile Photo"
                    width={400}
                    height={400}
                    className="rounded-full object-cover shadow-2xl shadow-emerald-400/20 hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero