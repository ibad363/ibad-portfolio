import Image from "next/image"
import Link from "next/link"
import { RESUME_DATA } from "../app/data/resume-data"

const About = () => {
  return (
    <div className="py-8 flex flex-col md:flex-row" id="about">
        {/* Image Section */}
        <div className="w-[90%] md:w-[50%] lg:w-[40%] p-4 mx-auto">
            <Image
                src={"/assets/ibad.png"}
                alt="Profile Photo"
                width={400}
                height={400}
                className="rounded-lg object-cover mx-auto shadow-xl shadow-secondary-foreground/20 transform hover:scale-105 transition-transform duration-300"
            ></Image>
        </div>

        {/* Paragraph Section */}
        <div className="w-[80%] md:w-[50%] lg:w-[60%] mx-auto px-4 md:px-10 lg:px-16 flex flex-col items-center md:items-start gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-foreground">About Me</h1>

            <div className="w-20 h-1 bg-muted-foreground rounded-lg"></div>

            <div className="space-y-3 text-secondary-foreground/80 text-lg text-center md:text-start">
                {RESUME_DATA.about.map((para, idx)=>(
                    <p key={idx}>{para}</p>
                ))}
            </div>

            <Link target="_blank" href={RESUME_DATA.resumePath}><button className="bg-primary-foreground text-primary text-lg font-semibold rounded-lg py-2 px-8 hover:bg-secondary-foreground/80 transition-all duration-300 focus:outline-none">View CV</button></Link>
        </div>
    </div>
  )
}

export default About