import { IoIosCheckboxOutline } from "react-icons/io";

export default function Skills () {
    return(
        <div className="mt-0 md:mt-6">

            {/* Heading Section */}
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-3xl md:text-4xl text-emerald-500 font-bold tracking-wide">EXPERTISE</h1>
                <h1 className="text-2xl md:text-3xl text-gray-200 font-bold tracking-wider">Technical Skills</h1>
                <div className="w-32 h-1 rounded-lg bg-emerald-500"></div>
            </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 px-8 sm:px-12">
                <EachSkill skillName={"HTML"} skillLevel={"90%"}/>
                <EachSkill skillName={"CSS"} skillLevel={"60%"}/>
                <EachSkill skillName={"JavaScript / Typescript"} skillLevel={"75%"}/>
                <EachSkill skillName={"Next JS"} skillLevel={"60%"}/>
                <EachSkill skillName={"React JS"} skillLevel={"50%"}/>
                <EachSkill skillName={"Figma"} skillLevel={"30%"}/>
            </div>
        </div>
    )
}

function EachSkill(props:any) {
  return (
    <div className="flex flex-col gap-5">
        {/* Name & Icon */}
        <div className="text-white flex gap-2 items-center">
            {/* Icon */}
            <div className="rounded-full p-2  bg-emerald-500"><IoIosCheckboxOutline className="text-2xl" /></div>
            {/* Skills Name */}
            <h3 className="text-lg font-semibold">{props.skillName}</h3>
        </div>

        {/* Bar Section */}
        <div className="relative">
            {/* Background of Bar */}
            <div className="bg-gray-700 rounded-lg h-2">
                {/* Actual Bar */}
                <div className="bg-emerald-500 absolute rounded-lg h-2" style={{width: props.skillLevel}}></div>
            </div>

            {/* Percentage of Skill Level */}
            <p className="text-emerald-500 font-bold text-lg mt-2 text-right">{props.skillLevel}</p>
        </div>
    </div>
  )
}