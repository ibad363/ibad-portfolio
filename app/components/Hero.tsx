import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-gray-300 flex flex-col md:flex-row md:pl-8 md:pr-6 md:py-14 p-4">
        {/* Text Section */}
        <div className="w-full md:w-[60%] lg:w-1/2 p-6 flex flex-col items-center md:items-start my-auto gap-5">
            <div className="font-bold flex flex-col items-center md:items-start gap-3">
                <h1 className="text-3xl md:text-4xl text-center md:text-start">Hi, I'm <span className="text-emerald-400">Ibad Ur Rehman</span></h1>
                <h3 className="text-2xl md:text-3xl text-center md:text-start">Frontend Developer</h3>
                <div className="w-36 h-1 bg-emerald-500 rounded-lg"></div>
            </div>
            <p className="text-gray-300 text-lg text-center md:text-start px-0 sm:px-14 md:px-0">Passionate Frontend Developer with expertise in modern web technologies. Specializing in creating responsive, user-friendly applications with clean and efficient code. Committed to delivering innovative solutions that make a real impact.</p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
                <Link href={"/contact"}><button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 text-lg font-semibold rounded-lg py-2 px-6 hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 focus:outline-none">Contact Me</button></Link>
                <Link href={"/projects"}><button className="border-2 border-emerald-400 text-emerald-400 text-lg font-semibold rounded-lg px-6 py-2 focus:outline-none hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300">My Projects</button></Link>
            </div>
        </div>

        {/* Image Section */}
        <div className="w-[90%] md:w-[40%] lg:w-1/2 mx-auto flex items-center mt-6 md:mt-0">
           <Image
           src={"/assets/ibad.png"}
           alt="Profile Photo"
           width={400}
           height={400}
           className="rounded-full object-cover mx-auto shadow-2xl shadow-emerald-400/20 transition-transform hover:scale-105 duration-500"
           ></Image>
        </div>
    </div>
  )
}