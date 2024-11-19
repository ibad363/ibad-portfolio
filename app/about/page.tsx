import Image from "next/image";
import React from "react";
import myimage from '../../public/assets/ibad.png'

const About = () => {
    return(
        <div>
            <section className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex sm:justify-center md:justify-start">
                        <Image
                            className="object-cover rounded-lg shadow-xl shadow-emerald-400/10 transform hover:scale-105 transition-transform duration-300"
                            alt="Ibad Ur Rehman"
                            src={myimage}
                            width={400}
                            height={400}
                            placeholder="blur"
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-emerald-400">
                            About Me
                        </h1>
                        
                        <div className="w-[80px] h-[3px] bg-emerald-400 rounded-xl mb-6"></div>

                        <p className="mb-5 leading-relaxed text-lg">
                          As an Intermediate in Commerce student with a Diploma of Associate Engineering (DAE), I have a unique blend of skills in both commerce and technical fields. This combination allows me to approach challenges with a versatile perspective as I explore potential career opportunities.
                        </p>
                        
                        <p className="mb-8 leading-relaxed text-lg">
                          Simultaneously, I'm expanding my technical skills through the Governor Sindh Initiative in Applied Cloud Generative AI Engineering (GIAIC). With months of intensive training in modern web technologies like HTML, CSS, JavaScript, and Next.js, I've successfully completed my first quarter. My unique blend of commerce knowledge and technical expertise equips me to create more human-centered digital solutions, bridging the gap between technology and practical, user-focused applications.
                        </p>
                        
                        <a href="/assets/cv.pdf" target="_blank">
                            <button className="text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 border-0 py-2 px-8 
                            focus:outline-none hover:from-emerald-500 hover:to-cyan-500 rounded-lg text-lg transition-all duration-300 font-semibold">
                                View CV
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About