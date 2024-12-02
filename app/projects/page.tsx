import Image from "next/image"
import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi";

function Projects() {

  const projectDetails = [
    {
      projectImage: "pakwheels.png",
      projectName: "Car-Selling Website (PakWheels - Mini Hackathon)", projectDesc: "A modern car selling platform built with Next.js and Tailwind CSS, featuring responsive design and interactive user interface.", projectLink: "https://pakwheels-ibad.vercel.app/"
    },

    {
      projectImage: "static-resume.png",
      projectName: "Static Interactive Resume",
      projectDesc: "An interactive resume built using HTML, CSS, and TypeScript, showcasing professional experience and skills in an engaging way.", projectLink: "https://hackathon-ibad.vercel.app/milestone1-2/index.html"
    },

    {
      projectImage: "resume-builder.png",
      projectName: "Shareable Resume Builder",
      projectDesc: "A dynamic resume builder application created with HTML, CSS & TypeScript, allowing users to create and share professional resumes.", projectLink: "https://resume-builder-ibad.vercel.app/"
    },

  ]

  return (
    <div className="p-6">
        {/* Heading & Paragraph */}
        <div className="flex flex-col items-center gap-3">
            <h1 className="text-emerald-500 text-3xl md:text-4xl font-bold tracking-wide">PORTFOLIO</h1>
            <h1 className="text-gray-200 text-2xl md:text-3xl font-bold tracking-wider">Featured Projects</h1>
            <div className="w-32 h-1 rounded-lg bg-emerald-500"></div>
            <p className="text-gray-300 text-center w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">With expertise in modern web technologies, I've developed various projects showcasing responsive design, user interaction, and clean code practices. Each project demonstrates my commitment to creating engaging web experiences.</p>
        </div>

        {/* Projects */}
        <div className="flex flex-wrap gap-4 justify-center mt-5">
            {projectDetails.map((eachProj)=>{
              return(
                <EachProject 
                  projectImage={eachProj.projectImage}
                  projectName={eachProj.projectName}
                  projectDesc={eachProj.projectDesc}
                  projectLink={eachProj.projectLink}/>
              )
            })}
        </div>
    </div>
  )
}

export default Projects

function EachProject(props:any) {
    return (
      <div className="w-full sm:w-[45%] lg:w-[30%] h-96 cursor-pointer rounded-lg flex relative">

        {/* Project Image */}
        <Image
            src={`/assets/${props.projectImage}`}
            alt="Project Picture"
            width={300}
            height={300}
            className=" w-full h-full rounded-lg"
        ></Image>
        
        {/* Hover Overlay */}
        <div className="bg-gray-900/80 border-2 border-emerald-500/40 rounded-lg p-8 flex flex-col justify-between h-full w-full absolute backdrop-blur-sm opacity-0 hover:opacity-100 transition-all duration-300">

          {/* Project Detail */}
          <div>
            <h3 className="text-emerald-500 font-semibold text-lg tracking-wider mb-2">{props.projectName}</h3>
            <p className="text-gray-200 tracking-wide leading-relaxed">{props.projectDesc}</p>
          </div>

          {/* Project Link */}
          <Link 
            href={`${props.projectLink}`}
            target="_blank" 
            className="text-emerald-400 hover:text-emerald-500 transition-colors duration-300 inline-flex items-center text-lg">View Project
            <span><BiRightArrowAlt className="text-2xl"/></span>
          </Link>
        </div>
        
      </div>
    );
}