import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <section className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-sm text-emerald-400 tracking-widest font-medium title-font mb-1">
              PORTFOLIO
            </h2>
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
              Featured Projects
            </h1>
            <div className="w-[100px] h-[3px] bg-emerald-400 rounded-xl mx-auto mb-6"></div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              With expertise in modern web technologies, I've developed various projects 
              showcasing responsive design, user interaction, and clean code practices.
              Each project demonstrates my commitment to creating engaging web experiences.
            </p>
          </div>

          <div className="flex flex-wrap -m-5 -mt-16">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative h-[400px]">
                <Image
                  width={300}
                  height={300}
                  alt="CarWebsite"
                  src={"/assets/pakwheels.png"}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-2 rounded-lg 
                  bg-gray-900/90 backdrop-blur-sm border-emerald-500/20 opacity-0 hover:opacity-100 
                  transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h2 className="tracking-widest text-sm title-font font-medium text-emerald-400 mb-3">
                      Car-Selling Website (PakWheels - Mini Hackathon)
                    </h2>
                    <p className="leading-relaxed text-gray-200">
                      A modern car selling platform built with Next.js and Tailwind CSS, 
                      featuring responsive design and interactive user interface.
                    </p>
                  </div>
                  <Link
                    target="_blank"
                    href="https://pakwheels-ibad.vercel.app/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center mt-3"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative h-[400px]">
                <Image
                  width={300}
                  height={300}
                  alt="Resume"
                  src={"/assets/static-resume.png"}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-2 rounded-lg 
                  bg-gray-900/90 backdrop-blur-sm border-emerald-500/20 opacity-0 hover:opacity-100 
                  transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h2 className="tracking-widest text-sm title-font font-medium text-emerald-400 mb-3">
                      Static Interactive Resume
                    </h2>
                    <p className="leading-relaxed text-gray-200">
                      An interactive resume built using HTML, CSS, and TypeScript, 
                      showcasing professional experience and skills in an engaging way.
                    </p>
                  </div>
                  <Link
                    target="_blank"
                    href="https://hackathon-ibad.vercel.app/milestone1-2/index.html"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center mt-3"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative h-[400px]">
                <Image
                  width={300}
                  height={300}
                  alt="PortfolioInterface"
                  src={"/assets/resume-builder.png"}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-2 rounded-lg 
                  bg-gray-900/90 backdrop-blur-sm border-emerald-500/20 opacity-0 hover:opacity-100 
                  transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h2 className="tracking-widest text-sm title-font font-medium text-emerald-400 mb-3">
                      Shareable Resume Builder
                    </h2>
                    <p className="leading-relaxed text-gray-200">
                      A dynamic resume builder application created with HTML, CSS & TypeScript, 
                      allowing users to create and share professional resumes.
                    </p>
                  </div>
                  <Link
                    target="_blank"
                    href="https://resume-builder-ibad.vercel.app/"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center mt-3"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;