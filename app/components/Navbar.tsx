import Link from "next/link"
import { AiOutlineCloudDownload } from "react-icons/ai";
import { RESUME_DATA } from "../data/resume-data";

const Navbar = () => {
  return (
      <div className="border-b-2 sticky top-0 z-50">
          <header className="bg-primary p-3 flex flex-wrap flex-col md:flex-row items-center gap-3 justify-between  mx-auto max-w-[110rem]">

              {/* Name */}
              <h1 className="text-secondary-foreground text-xl font-bold md:ml-6 cursor-pointer"><Link href={"/"}>Ibad Ur Rehman</Link></h1>

              {/* Nav Links */}
              <nav className="flex flex-wrap justify-center gap-3 md:gap-5 text-secondary-foreground">
                  <NavLinks navItems={"Home"} link={"/"}/>
                  <NavLinks navItems={"About"} link={"/#about"}/>
                  <NavLinks navItems={"Skills"} link={"/#skills"}/>
                  <NavLinks navItems={"Projects"} link={"/#projects"}/>
                  <NavLinks navItems={"Contact"} link={"/#contact"}/>
              </nav>

              {/* Download Button */}
              <Link href={RESUME_DATA.resumePath} target="_blank">
                  <button className="inline-flex items-center bg-secondary-foreground text-secondary font-semibold rounded-lg py-2 px-4 hover:bg-secondary-foreground/80 transition-all duration-300 focus:outline-none md:mr-6">Download CV <span className="ml-2 text-xl"><AiOutlineCloudDownload /></span></button>
              </Link>

          </header>
      </div>
  )
}

export default Navbar


function NavLinks(props: {link: string, navItems: string}) {
    return (
        <Link href={props.link} className="hover:text-secondary-foreground/70 transition-colors duration-300">{props.navItems}</Link>
    )
}