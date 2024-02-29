import { FaGraduationCap, FaHome, FaGlobe } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import "../../index.css"

const Card =()=>{
  return(
    <div className="w-[90%]">
    <div className="w-full grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 mt-16 justify-center">
      <div className="bg-[#f0fbfc] hover:bg-[#06bbcc] group hover:text-white hover:translate-y-[-1rem] transition-all duration-500 ease-in-out flex flex-col justify-start items-center gap-4 p-[1.5rem]">
        <div className="text-[4rem] text-[#06bbcc] group-hover:text-white">
          <FaGraduationCap />
        </div>
        <h5 className="text-[#181d38] text-center font-[800] text-[1.25rem] tracking-wider font-card-header group-hover:text-white md:max-h-[4rem]">
          Skilled Instructors
        </h5>
        <p className="text-[#52565B] text-center font-bold -tracking-tight group-hover:text-white">
          Get trained and mentored by leading Industry experts and
          professionals
        </p>
      </div>

      <div className="bg-[#f0fbfc] hover:bg-[#06bbcc] group hover:text-white hover:translate-y-[-1rem] transition-all duration-500 ease-in-out flex flex-col justify-start items-center gap-4 p-[1.5rem]">
        <div className="text-[4rem] text-[#06bbcc] group-hover:text-white">
          <FaGlobe />
        </div>
        <h5 className="text-[#181d38] text-center font-[800] text-[1.25rem] tracking-wider font-card-header group-hover:text-white">
          Online/Offline Classes
        </h5>
        <p className="text-[#52565B] text-center font-bold -tracking-tight group-hover:text-white">
          Learn together with us, or learn at your own pace, we will be with
          you at all times
        </p>
      </div>

      <div className="bg-[#f0fbfc] hover:bg-[#06bbcc] group hover:text-white hover:translate-y-[-1rem] transition-all duration-500 ease-in-out flex flex-col justify-start items-center gap-4 p-[1.5rem]">
        <div className="text-[4rem] text-[#06bbcc] group-hover:text-white">
          <FaHome />
        </div>
        <h5 className="text-[#181d38] text-center font-[800] text-[1.25rem] tracking-wider font-card-header group-hover:text-white">
          Live Industry Projects
        </h5>
        <p className="text-[#52565B] text-center font-bold -tracking-tight group-hover:text-white">
          Help to solve live industry problems and land in your dream job
        </p>
      </div>

      <div className="bg-[#f0fbfc] hover:bg-[#06bbcc] group hover:text-white hover:translate-y-[-1rem] transition-all duration-500 ease-in-out flex flex-col justify-start items-center gap-4 p-[1.5rem]">
        <div className="text-[4rem] text-[#06bbcc] group-hover:text-white">
          <GoBook />
        </div>
        <h5 className="text-[#181d38] text-center font-[800] text-[1.25rem] tracking-wider font-card-header group-hover:text-white">
          Trending Technologies
        </h5>
        <p className="text-[#52565B] text-center font-bold -tracking-tight group-hover:text-white">
          Learn the trending courses, not limited to ChatGPT and Web3, all in
          one place
        </p>
      </div>
    </div>
  </div>

  )
}

export default Card;