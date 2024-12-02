import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="pt-[1px] bg-white">
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-3 flex flex-col sm:flex-row items-center justify-between gap-2">
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <h3 className="sm:ml-6 text-xl text-emerald-400 font-semibold sm:border-gray-700 sm:border-r-2 sm:pr-6">Ibad Ur Rehman</h3>

            <p className="text-gray-300">© 2024 Ibad Ur Rehman</p>
        </div>

        <Link href={"https://www.linkedin.com/in/ibad-ur-rehman-developer/"} className="text-emerald-300 text-3xl hover:text-emerald-500 duration-300 sm:mr-6"><FaLinkedin/></Link>
      </footer>
    </div>
  )
}

export default Footer