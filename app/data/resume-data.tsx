import { BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaGitAlt,
    FaNodeJs,
    FaBookReader
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb,
    SiExpress, SiPostman, SiVercel, SiSanity
} from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { PiCubeTransparentDuotone, PiStudentDuotone } from "react-icons/pi";
import { BiMessageDetail } from "react-icons/bi";

export const RESUME_DATA = {
    name: "Ibad Ur Rehman",
    location: "Based in Karachi Pakistan",
    locationLink: "https://www.google.com/maps/place/Karachi",
    resumePath: "/assets/Ibad_Ur_Rehman_Frontend_Developer_Resume.pdf",
    profilePicPath: "/assets/ibad.png",
    about: [
        "I'm a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, TypeScript, React.js, and Next.js. My journey started with a background in Commerce, giving me a unique ability to build human-centered solutions with practical impact.",
        "I'm currently enrolled in the Governor Sindh’s GIAIC program, where I’ve completed the first quarter focused on modern web development. Now, I’m exploring Full-Stack Development using Node.js, Express.js, and MongoDB, along with Agentic AI tools like the OpenAI Agents SDK.",
        "I enjoy building real-world, scalable web applications and continuously strive to improve my skills through hands-on projects and learning."
    ],
    summary:
        "I build clean, responsive, and user-friendly web applications using modern technologies like React and Next.js. \nCurrently expanding into Full-Stack Development and AI-powered apps with Node.js, MongoDB, and OpenAI SDK.",
    contact: {
        email: "hafizibadurrehman363@gmail.com",
        social: [
            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/ibad-ur-rehman-developer",
                icon: BsLinkedin,
            },
            {
                name: "X",
                url: "https://x.com/ibaddeveloper",
                icon: BsTwitterX,
            },
            {
                name: "GitHub",
                url: "https://github.com/ibad363",
                icon: BsGithub,
            },
        ],
    },
    education: [
        {
            school: "Panaversity, GIAIC",
            degree: "Certified Cloud Native Applied Agentic AI Engineer",
            start: "2024",
            end: "Present",
        },
        {
            school: "Goverment Degree College, Gulshan e Iqbal",
            degree: "Intermediate in Commerce",
            start: "2022",
            end: "2024",
        },
    ],
    skills: [
        // Frontend
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },

        // Backend
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-white text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },

        // CMS & Tools
        { name: "Sanity.io", icon: <SiSanity className="text-red-500 text-3xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-600 text-3xl" /> },
        { name: "Vercel", icon: <SiVercel className="text-white text-3xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" /> },
        { name: "GitHub", icon: <TbBrandGithub className="text-white text-3xl" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500 text-3xl" /> },

        // AI
        { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" /> },
        { name: "OpenAI SDK", icon: <PiCubeTransparentDuotone className="text-violet-400 text-3xl" /> },

        // Soft Skills
        { name: "Problem Solving", icon: <RiLightbulbFlashLine className="text-yellow-300 text-3xl" /> },
        { name: "Communication", icon: <BiMessageDetail className="text-indigo-500 text-3xl" /> },
        { name: "Self Learning", icon: <FaBookReader className="text-sky-300 text-3xl" /> },
    ],
    projects: [
        {
            title: "Furniro (Furniture Store)",
            techStack: [
                "Hackathon Project",
                "Next.js",
                "Tailwind CSS",
                "Sanity CMS",
            ],
            description: "A sleek and responsive furniture e-commerce site powered by Next.js and Sanity CMS, with dynamic content management and modern UI using Tailwind CSS.",
            link: "https://elegant-interiors.vercel.app"
        },
        {
            title: "Dev Sphere",
            techStack: [
                "Hackathon Project",
                "Next.js",
                "Tailwind CSS",
                "Sanity CMS",
            ],
            description: "A dynamic blog application built with Next.js and Sanity CMS. Designed for developers to publish, manage, and explore technical articles effortlessly.",
            link: "https://dev-sphere-ibad.vercel.app"
        },
        {
            title: "Printable Resume Builder",
            techStack: [
                "Hackathon Project",
                "HTML",
                "CSS",
                "TypeScript",
            ],
            description:
                "A dynamic resume builder application created with HTML, CSS & TypeScript, allowing users to create & print professional resumes.",
            link: "https://resume-builder-ibad.vercel.app"
        },
        {
            title: "E-commerce Website UI Clone",
            techStack: [
                "Hackathon Practice",
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
            ],
            description:
                "A modern e-commerce UI clone built with Next.js and Tailwind CSS to practice responsive layouts and product listing components.",
            link: "https://e-commerce-ibad.vercel.app",
        },
        {
            title: "Static Interactive Resume",
            techStack: [
                "Hackathon Project",
                "HTML",
                "CSS",
                "TypeScript",
            ],
            description:
                "An interactive resume built using HTML, CSS, and TypeScript, showcasing professional experience and skills in an engaging way.",
            link: "https://hackathon-ibad.vercel.app/milestone1-2/index.html"
        },
        {
            title: "PakWheels Landing Page Clone",
            techStack: [
                "Class Assignment",
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
            ],
            description:
                "A responsive landing page clone with Next.js and Tailwind CSS, featuring responsive design and interactive user interface.",
            link: "https://pakwheels-ibad.vercel.app"
        },
        {
            title: "Salesforce Landing Page UI",
            techStack: [
                "Practice Project",
                "HTML",
                "CSS",
            ],
            description:
            "A UI practice project cloning the Salesforce landing page using only HTML and CSS for layout and styling.",
            link: "https://salesforce-ibad.vercel.app",
        },
        {
            title: "Secure Data Encryption",
            techStack: [
                "Assignment Project",
                "Python",
                "Streamlit",
                "Hashlib",
                "Fernet",
            ],
            description:
                "Encrypt and decrypt your sensitive data securely using Python’s Hashlib and Fernet libraries in a Streamlit UI.",
            link: "https://secure-data-encryption-ibad.streamlit.app/",
        },
        {
            title: "Data Sweeper",
            techStack: [
                "Assignment Project",
                "Python",
                "Streamlit",
                "Pandas",
            ],
            description:
                "Transform your files between CSV & Excel formats with built-in data cleaning and visualization features using Streamlit and Pandas.",
            link: "https://github.com/ibad363/quarter-3-assignments/tree/main/00-growth-mindset",
        },
        {
            title: "Unit Converter",
            techStack: [
                "Assignment Project",
                "Python",
                "Streamlit",
            ],
            description:
                "Convert between different units (length, weight, temperature) with a clean and interactive Streamlit interface.",
            link: "https://github.com/ibad363/quarter-3-assignments/tree/main/01-unit-convertor",
        },
        {
            title: "Password Strength Meter",
            techStack: [
                "Assignment Project",
                "Python",
                "Streamlit",
            ],
            description:
                "An interactive app to check password strength using various security metrics with a simple Streamlit UI.",
            link: "https://github.com/ibad363/quarter-3-assignments/tree/main/02-password-strength-meter",
        },
        {
            title: "Personal Library Manager",
            techStack: [
                "Assignment Project",
                "Python",
                "CLI",
            ],
            description:
                "A command-line interface (CLI) project to manage your personal book library including add, list, search, and delete functionality.",
            link: "https://github.com/ibad363/quarter-3-assignments/tree/main/03-personal-library-manager",
        },
    ],
} as const;