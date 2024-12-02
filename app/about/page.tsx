import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div className="py-8 flex flex-col md:flex-row">

        {/* Image Section */}
        <div className="w-[90%] md:w-[50%] lg:w-[40%] p-4 mx-auto">
            <Image
                src={"/assets/ibad.png"}
                alt="Profile Photo"
                width={400}
                height={400}
                className="rounded-lg object-cover mx-auto shadow-xl shadow-emerald-400/20 transform hover:scale-105 transition-transform duration-300"
            ></Image>
        </div>

        {/* Paragraph Section */}
        <div className="w-[80%] md:w-[50%] lg:w-[60%] mx-auto px-4 md:px-10 lg:px-16 flex flex-col items-center md:items-start gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-400">About Me</h1>

            <div className="w-20 h-[3px] bg-emerald-500 rounded-lg"></div>

            <p className="text-gray-300 text-lg text-center md:text-start">As an Intermediate in Commerce student with a Diploma of Associate Engineering (DAE), I have a unique blend of skills in both commerce and technical fields. This combination allows me to approach challenges with a versatile perspective as I explore potential career opportunities.</p>

            <p  className="text-gray-300 text-lg text-center md:text-start">Simultaneously, I'm expanding my technical skills through the Governor Sindh Initiative in Applied Cloud Generative AI Engineering (GIAIC). With months of intensive training in modern web technologies like HTML, CSS, JavaScript, and Next.js, I've successfully completed my first quarter. My unique blend of commerce knowledge and technical expertise equips me to create more human-centered digital solutions, bridging the gap between technology and practical, user-focused applications.</p>

            <Link href={"/assets/cv.pdf"}><button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 text-lg font-semibold rounded-lg py-2 px-8 hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 focus:outline-none">View CV</button></Link>
        </div>
    </div>
  )
}

export default About