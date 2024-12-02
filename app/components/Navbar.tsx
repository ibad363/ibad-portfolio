import Link from "next/link"
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
      <div className="bg-white pb-[1px] sticky top-0 z-50">
          <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 p-3 flex flex-wrap flex-col md:flex-row items-center gap-3 justify-between">

              {/* Name */}
              <h1 className="text-emerald-400 text-xl font-bold md:ml-6 cursor-pointer"><Link href={"/"}>Ibad Ur Rehman</Link></h1>

              {/* Nav Links */}
              <nav className="flex flex-wrap justify-center gap-3 md:gap-5 text-emerald-300">
                  <NavLinks navItems={"Home"} link={"/"}/>
                  <NavLinks navItems={"About"} link={"/about"}/>
                  <NavLinks navItems={"Skills"} link={"/skills"}/>
                  <NavLinks navItems={"Projects"} link={"/projects"}/>
                  <NavLinks navItems={"Contact"} link={"/contact"}/>
              </nav>

              {/* Download Button */}
              <Link href={"/assets/cv.pdf"}>
                  <button className="inline-flex items-center bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 font-semibold rounded-lg py-2 px-4 hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 focus:outline-none md:mr-6">Download CV <span className="ml-2 text-xl"><AiOutlineCloudDownload /></span></button>
              </Link>

          </header>
      </div>
  )
}

export default Navbar


function NavLinks(props: {link: string, navItems: string}) {
    return (
        <Link href={props.link} className="hover:text-emerald-500 transition-colors duration-300">{props.navItems}</Link>
    )
}