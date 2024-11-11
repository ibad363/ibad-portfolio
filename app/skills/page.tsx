import React from "react";
import { IoIosCheckboxOutline } from "react-icons/io";

const Skills = () => {
  return(
    <div>
      <section className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-sm text-emerald-400 tracking-widest font-medium title-font mb-1">
              EXPERTISE
            </h2>
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-white mb-4">
              Technical Skills
            </h1>
            <div className="w-[100px] h-[3px] bg-emerald-400 rounded-xl mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap -m-4 -mt-[3rem]">
            
            <div className="p-4 w-full md:w-1/2">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                    <IoIosCheckboxOutline className="text-xl font-bold"/>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">HTML</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-700 rounded-xl">
                    <div className="absolute bg-emerald-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-emerald-400 text-right">90%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-full md:w-1/2">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                    <IoIosCheckboxOutline className="text-xl font-bold"/>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-700 rounded-xl">
                    <div className="absolute bg-emerald-500 h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <p className="font-bold text-emerald-400 text-right">60%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-full md:w-1/2">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                    <IoIosCheckboxOutline className="text-xl font-bold"/>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">JavaScript/TypeScript</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-700 rounded-xl">
                    <div className="absolute bg-emerald-500 h-1 rounded-xl w-[75%]"></div>
                  </div>
                  <p className="font-bold text-emerald-400 text-right">75%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-full md:w-1/2">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                    <IoIosCheckboxOutline className="text-xl font-bold"/>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">NEXT JS</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-700 rounded-xl">
                    <div className="absolute bg-emerald-500 h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <p className="font-bold text-emerald-400 text-right">60%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-full md:w-1/2">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                    <IoIosCheckboxOutline className="text-xl font-bold"/>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">React</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-700 rounded-xl">
                    <div className="absolute bg-emerald-500 h-1 rounded-xl w-[50%]"></div>
                  </div>
                  <p className="font-bold text-emerald-400 text-right">50%</p>
                </div>
              </div>
            </div>

            <div className="p-4 w-full md:w-1/2">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white flex-shrink-0">
                    <IoIosCheckboxOutline className="text-xl font-bold"/>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">Figma</h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-700 rounded-xl">
                    <div className="absolute bg-emerald-500 h-1 rounded-xl w-[50%]"></div>
                  </div>
                  <p className="font-bold text-emerald-400 text-right">50%</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills