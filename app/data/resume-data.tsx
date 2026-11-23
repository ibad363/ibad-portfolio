import { BsLinkedin, BsGithub, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import {
    FaReact,
    FaGitAlt,
    FaNodeJs,
    FaBookReader,
    FaBrain,
    FaRobot,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
    SiExpress,
    SiPostman,
    SiVercel,
    SiSanity,
    SiOpenai,
    SiFastapi,
    SiPostgresql,
    SiPython,
    SiApachekafka,
} from "react-icons/si";
import { TbBrandGithub, TbTopologyStar3 } from "react-icons/tb";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";

export const RESUME_DATA = {
    name: "Ibad Ur Rehman",
    role: "Forward Deployed Engineer",
    tagline: "Building Practical Software & AI Agents That Automate Real-World Workflows",
    location: "Karachi, Pakistan",
    locationLink: "https://www.google.com/maps/place/Karachi",
    phone: "0317-1289624",
    whatsappUrl: "https://wa.me/923171289624",
    portfolioUrl: "https://www.itsibad.tech",
    resumeUrl: "https://drive.google.com/file/d/1AJSq9SdfkgdcT2lVPHLKRu5Ljfm6FApg/view?usp=sharing",
    resumePath: "https://drive.google.com/file/d/1AJSq9SdfkgdcT2lVPHLKRu5Ljfm6FApg/view?usp=sharing",
    profilePicPath: "/assets/ibad.png",
    summary:
        "Forward Deployed Engineer specializing in turning business bottlenecks into production software, autonomous AI agent workflows, and practical automations. Combines hands-on software engineering with real-world business operations experience to bridge business needs with technical execution, adopting cutting-edge AI tools to deliver measurable results.",
    about: [
        "Outcome-Driven Engineering: I focus on delivering tangible business results rather than just writing code. Combining hands-on full-stack development with real-world operational experience, I bridge the gap between business bottlenecks and practical software solutions.",
        "Rapid AI Adoption & Applied Systems: The AI ecosystem evolves rapidly, and my core strength is quick learning and hands-on adaptation. I build and deploy production-ready LLM applications, context-aware RAG pipelines, and autonomous agentic workflows using OpenAI Agents SDK, Claude Code, and Antigravity to automate multi-step processes.",
        "Operational Roots & Business Mindset: With a background in commerce and hands-on experience in business data, customer support, and administrative workflows, I approach architecture with deep user empathy, measurable business impact, and practical usability.",
        "Continuous Growth & Forward Deployment: Currently pursuing my BSCS at Virtual University of Pakistan and advancing in Agentic AI with the Governor Sindh IT Initiative (GIAIC). Always open to forward-deployed engineering, remote, and high-impact opportunities."
    ],
    contact: {
        email: "hafizibadurrehman363@gmail.com",
        phone: "0317-1289624",
        whatsapp: "https://wa.me/923171289624",
        social: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ibad363",
                icon: BsLinkedin,
            },
            {
                name: "GitHub",
                url: "https://github.com/ibad363",
                icon: BsGithub,
            },
            {
                name: "WhatsApp",
                url: "https://wa.me/923171289624",
                icon: BsWhatsapp,
            },
            {
                name: "X",
                url: "https://x.com/ibad363",
                icon: BsTwitterX,
            },
        ],
    },
    experience: [
        {
            company: "SW Solutions",
            role: "Management & Operations Associate",
            start: "July 2025",
            end: "November 2026 (16 Months)",
            description: [
                "Managed data entry, spreadsheets, and automated data verification workflows across operations.",
                "Supported daily business operations, administrative workflows, and organizational process improvements.",
                "Automated repetitive spreadsheet-checking tasks to eliminate manual errors and reduce operational overhead.",
                "Assisted with customer support operations, recruitment coordination, job postings, and interview scheduling.",
                "Handled basic social media management and marketing content creation using Canva."
            ]
        },
        {
            company: "Self-Directed & Client Projects",
            role: "Full-Stack Developer",
            start: "Feb 2024",
            end: "Present (~3 Years)",
            description: [
                "Delivered full-stack and frontend applications for commercial clients, hackathons, and personal initiatives.",
                "Built agentic AI features (RAG, multi-channel orchestration, natural-language interfaces) using OpenAI Agents SDK and pgvector.",
                "Designed high-performance backend APIs and administrative dashboards for real-world production use cases.",
                "Followed spec-driven development and clean modular architecture practices across all deliverables."
            ]
        }
    ],
    education: [
        {
            school: "Virtual University of Pakistan (VU)",
            degree: "BSCS (Bachelor in Computer Science)",
            start: "2025",
            end: "Ongoing",
        },
        {
            school: "Govt. Degree College, Gulshan-e-Iqbal Block 7, Karachi",
            degree: "Intermediate in Commerce",
            start: "2022",
            end: "2024",
        },
        {
            school: "Governor Sindh IT Initiative (GIAIC)",
            degree: "Certified Cloud Native Applied Agentic AI Engineer",
            start: "2024",
            end: "Ongoing",
        },
    ],
    skills: [
        // AI & Agentic Systems
        { name: "LLMs & Agents", category: "AI & Agentic Systems", icon: <FaRobot className="text-indigo-400 text-3xl" /> },
        { name: "OpenAI Agents SDK", category: "AI & Agentic Systems", icon: <SiOpenai className="text-white text-3xl" /> },
        { name: "Agentic Workflows", category: "AI & Agentic Systems", icon: <TbTopologyStar3 className="text-violet-400 text-3xl" /> },
        { name: "Multi-Step Planning", category: "AI & Agentic Systems", icon: <FaBrain className="text-pink-400 text-3xl" /> },
        { name: "Claude Code", category: "AI & Agentic Systems", icon: <SiOpenai className="text-amber-400 text-3xl" /> },
        { name: "Antigravity", category: "AI & Agentic Systems", icon: <RiLightbulbFlashLine className="text-sky-400 text-3xl" /> },

        // RAG & Context Engineering
        { name: "RAG Systems", category: "RAG & Context", icon: <FaBrain className="text-purple-400 text-3xl" /> },
        { name: "Context Grounding", category: "RAG & Context", icon: <TbTopologyStar3 className="text-emerald-400 text-3xl" /> },

        // Backend & APIs
        { name: "Python", category: "Backend & APIs", icon: <SiPython className="text-yellow-400 text-3xl" /> },
        { name: "FastAPI", category: "Backend & APIs", icon: <SiFastapi className="text-teal-400 text-3xl" /> },
        { name: "Node.js", category: "Backend & APIs", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
        { name: "Express.js", category: "Backend & APIs", icon: <SiExpress className="text-gray-300 text-3xl" /> },
        { name: "Kafka", category: "Backend & APIs", icon: <SiApachekafka className="text-red-400 text-3xl" /> },

        // Databases
        { name: "MongoDB", category: "Databases", icon: <SiMongodb className="text-green-500 text-3xl" /> },
        { name: "PostgreSQL", category: "Databases", icon: <SiPostgresql className="text-blue-400 text-3xl" /> },

        // Frontend
        { name: "Next.js", category: "Frontend", icon: <SiNextdotjs className="text-white text-3xl" /> },
        { name: "React.js", category: "Frontend", icon: <FaReact className="text-cyan-400 text-3xl" /> },
        { name: "TypeScript", category: "Frontend", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
        { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="text-teal-300 text-3xl" /> },

        // Delivery & Tools
        { name: "Git & GitHub", category: "Delivery", icon: <TbBrandGithub className="text-white text-3xl" /> },
        { name: "Postman", category: "Delivery", icon: <SiPostman className="text-orange-500 text-3xl" /> },
        { name: "Vercel", category: "Delivery", icon: <SiVercel className="text-white text-3xl" /> },
        { name: "Sanity CMS", category: "Delivery", icon: <SiSanity className="text-red-500 text-3xl" /> },

        // Soft Skills
        { name: "Problem Solving", category: "Soft Skills", icon: <RiLightbulbFlashLine className="text-yellow-300 text-3xl" /> },
        { name: "Communication", category: "Soft Skills", icon: <BiMessageDetail className="text-indigo-400 text-3xl" /> },
        { name: "Self Learning", category: "Soft Skills", icon: <FaBookReader className="text-sky-300 text-3xl" /> },
    ],
    projects: [
        {
            title: "Zeeshan & Brothers – Business Management System (BMS)",
            techStack: [
                "Client Project",
                "Desktop App",
                "POS",
                "Inventory Management",
                "Cloud Sync",
            ],
            description:
                "Developed a custom desktop-based Business Management System (BMS) with point-of-sale (POS), real-time inventory tracking, sales analytics, and optional cloud synchronization to streamline client retail operations.",
            link: "https://github.com/muhammadarsalan0211/zeeshan-bms-releases/releases/tag/v1.0.13",
            featured: true,
        },
        {
            title: "TaskVault CRM (Digital FTE Factory) — Multi-Channel AI Support Agent",
            techStack: [
                "Hackathon Project",
                "OpenAI Agents SDK",
                "FastAPI",
                "pgvector",
                "Kafka",
            ],
            description:
                "Built an autonomous multi-channel customer support agent (Gmail, WhatsApp, web forms) for a SaaS platform using OpenAI Agents SDK, FastAPI, PostgreSQL with pgvector for semantic context retrieval, and Kafka for asynchronous message routing across channels.",
            link: "https://github.com/ibad363/TaskVault-CRM-Multi-Channel-AI-Customer-Support-Agent",
            featured: true,
        },
        {
            title: "Aura Task — AI-Powered Todo Application",
            techStack: [
                "Full-Stack Project",
                "Next.js",
                "MongoDB",
                "OpenAI Agents SDK",
                "MCP Tools",
            ],
            description:
                "A full-stack task management application enhanced with autonomous AI capabilities. Features natural language command processing via OpenAI Agents SDK and MCP tools to intelligently interpret user prompts and perform CRUD operations seamlessly.",
            link: "https://aurataskbyibad.vercel.app/",
            featured: true,
        },
        {
            title: "Aura One — E-Commerce Platform",
            techStack: [
                "Client Live Project",
                "Next.js",
                "Tailwind CSS",
                "Sanity CMS",
            ],
            description:
                "A production-ready e-commerce platform for a consumer electronics brand, built with Next.js and Sanity CMS, focused on performance, responsive design, and an intuitive shopping experience.",
            link: "https://auraone.pk/",
            featured: true,
        },
        {
            title: "Solar Load Calculator & Recommendation System",
            techStack: [
                "Client Live Project",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Admin Panel",
            ],
            description:
                "A full-stack solar energy platform that allows users to calculate domestic power load based on appliance usage and intelligently recommends suitable solar products from inventory, backed by an admin dashboard for inventory management.",
            link: "https://zeeshanandbrothers.vercel.app/",
            featured: true,
        },
        {
            title: "Physical AI & Humanoid Robotics (AI Book)",
            techStack: [
                "Hackathon Project",
                "Docusaurus",
                "OpenAI Agents SDK",
                "RAG",
                "SpecKitPlus",
            ],
            description:
                "An AI-generated and spec-driven educational book on Physical AI and Humanoid Robotics, built using Docusaurus and enhanced with a RAG-powered chatbot using OpenAI Agents SDK.",
            link: "https://ibad363.github.io/ai-book-new/",
            featured: true,
        },
        {
            title: "Full-Stack Weather AI Agent",
            techStack: [
                "Next.js",
                "Python",
                "OpenAI Agents SDK",
                "Weather API",
            ],
            description:
                "A full-stack AI-powered weather assistant that fetches real-time weather data using external APIs and processes queries through an intelligent agent built with OpenAI Agents SDK.",
            link: "https://github.com/ibad363/AI-Agents-Projects/tree/main/01_fullstack_weather_agent",
            featured: false,
        },
        {
            title: "Furniro (Furniture Store)",
            techStack: [
                "Practice Project",
                "Next.js",
                "Tailwind CSS",
                "Sanity CMS",
            ],
            description:
                "A sleek and responsive furniture e-commerce site powered by Next.js and Sanity CMS, with dynamic content management and modern UI using Tailwind CSS.",
            link: "https://elegant-interiors.vercel.app",
            featured: false,
        },
        {
            title: "Dev Sphere (Developer Blog)",
            techStack: [
                "Practice Project",
                "Next.js",
                "Tailwind CSS",
                "Sanity CMS",
            ],
            description:
                "A dynamic blog application built with Next.js and Sanity CMS, designed for developers to publish, manage, and explore technical articles effortlessly.",
            link: "https://dev-sphere-ibad.vercel.app",
            featured: false,
        },
        {
            title: "Secure Data Encryption",
            techStack: [
                "Python Tool",
                "Streamlit",
                "Hashlib",
                "Fernet",
            ],
            description:
                "Encrypt and decrypt sensitive data securely using Python’s Hashlib and Fernet libraries in an interactive Streamlit UI.",
            link: "https://secure-data-encryption-ibad.streamlit.app/",
            featured: false,
        },
        {
            title: "Data Sweeper",
            techStack: [
                "Data Utility",
                "Python",
                "Streamlit",
                "Pandas",
            ],
            description:
                "Transform files between CSV and Excel formats with built-in data cleaning and visualization features using Streamlit and Pandas.",
            link: "https://github.com/ibad363/quarter-3-assignments/tree/main/00-growth-mindset",
            featured: false,
        },
        {
            title: "Unit Converter",
            techStack: [
                "Utility App",
                "Python",
                "Streamlit",
            ],
            description:
                "Convert between different units (length, weight, temperature) with a clean and interactive Streamlit interface.",
            link: "https://github.com/ibad363/quarter-3-assignments/tree/main/01-unit-convertor",
            featured: false,
        },
        {
            title: "Password Strength Meter",
            techStack: [
                "Utility App",
                "Python",
                "Streamlit",
            ],
            description:
                "An interactive application to evaluate password strength using security metrics in a Streamlit UI.",
            link: "https://github.com/ibad363/quarter-3-assignments/tree/main/02-password-strength-meter",
            featured: false,
        },
        {
            title: "E-Commerce Website UI Clone",
            techStack: [
                "Frontend",
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
            ],
            description:
                "A modern e-commerce UI clone built with Next.js and Tailwind CSS to practice responsive layouts and product components.",
            link: "https://e-commerce-ibad.vercel.app",
            featured: false,
        },
    ],
} as const;
