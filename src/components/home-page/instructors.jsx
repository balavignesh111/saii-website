import Team from "../../../public/img/team-one.png";
import Teams from "../../../public/img/team-two.png";
import Teamm from "../../../public/img/team-three.png";
import Four from "../../../public/img/team-four.png";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Instructor = () => {
  return (
    <div className="w-full mb-4 px-4 md:px-8 ">
      <div className="text-center mt-6">
        <span className="mb-3 flex items-center justify-center text-[1.5rem] font-semibold text-[#1DC1D1]">
          INSTRUCTORS
        </span>
        <h1 className="flex items-center justify-center text-3xl font-bold">
          Expert Instructors
        </h1>
      </div>
      <div className="w-full flex flex-col md:flex-row lg:flex-row justify-evenly items-center mt-6">
        <div className="w-full flex flex-col md:flex-row md:grid md:grid-cols-2 md:grid-rows-2 lg:flex mb-8 md:mb-0 gap-8 justify-evenly">
          <div className="w-full md:max-w-[20rem] flex flex-col md:mb-0">
            <div className="overflow-hidden">
              <img
                className="h-[20rem] w-[20rem] object-fit scale-[1] hover:scale-[1.1] transition duration-[400ms]"
                src={Team}
                alt="one"
              />
            </div>
            <div className="relative">
              <div className="w-full absolute top-[-2rem] left-0 right-0 flex justify-center">
                <div className="flex items-center mt-1 w-[3.5rem] h-[3rem] justify-center space-x-3 text-_light_blue bg-[#F0FBFC]">
                  <button className="bg-[#1DC1D1] text-white p-2 ">
                    <a href="https://www.linkedin.com/in/manojkumarkothandapani/">
                      <FaLinkedin />
                    </a>
                  </button>
                </div>
              </div>
              <div className="w-full h-[5rem] lg:h-[7rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
                <h5 className="mb-0 font-bold text-lg lg:text-xl mt-2 lg:mt-4">
                  Dr. K. Manojkumar S
                </h5>
                <small className="font-bold text-sm lg:text-base">
                  Data Scientist
                </small>
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-[20rem] flex flex-col md:mb-0">
            <div className="overflow-hidden">
              <img
                className="h-[20rem] w-[20rem] object-fit scale-[1] hover:scale-[1.1] transition duration-[400ms]"
                src={Teams}
                alt="one"
              />
            </div>
            <div className=" relative">
              <div className="w-full  absolute top-[-2rem] left-0 right-0 flex justify-center">
                <div className="flex items-center mt-1 w-[3.5rem] h-[3rem]  justify-center space-x-3 text-_light_blue bg-[#F0FBFC] ">
                  <button className="bg-[#1DC1D1] text-white p-2 ">
                    <a href="https://www.linkedin.com/in/banu-a-v/">
                      <FaLinkedin />
                    </a>
                  </button>
                </div>
              </div>
              <div className="w-full h-[5rem] lg:h-[7rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
                <h5 className="mb-0 font-bold text-lg lg:text-xl mt-2 md:mt-4">
                  Banu S
                </h5>
                <small className="font-bold text-sm lg:text-base">
                  CyberSecurity Expert and SME
                </small>
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-[20rem] flex flex-col md:mb-0">
            <div className="overflow-hidden">
              <img
                className="h-[20rem] w-[20rem] object-fit scale-[1] hover:scale-[1.1] transition duration-[400ms]"
                src={Teamm}
                alt="one"
              />
            </div>
            <div className=" relative">
              <div className="w-full  absolute top-[-2rem] left-0 right-0 flex justify-center">
                <div className="flex items-center mt-1 w-[3.5rem] h-[3rem]  justify-center space-x-3 text-_light_blue bg-[#F0FBFC]">
                  <button className="bg-[#1DC1D1] text-white p-2 ">
                    <a href="https://www.linkedin.com/in/swarnamanjari-balasubramanian-028407177/">
                      <FaLinkedin />
                    </a>
                  </button>
                </div>
              </div>
              <div className="w-full h-[5rem] lg:h-[7rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
                <h5 className="mb-0 font-bold text-lg lg:text-xl mt-2 md:mt-4">
                  Swarnamanjari B
                </h5>
                <small className="font-bold text-sm lg:text-base">
                  Data Scientist
                </small>
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-[20rem] flex flex-col md:mb-0">
            <div className="overflow-hidden">
              <img
                className="h-[20rem] w-[20rem] object-cover scale-[1] hover:scale-[1.1] transition duration-[400ms]"
                src={Four}
                alt="one"
              />
            </div>
            <div className=" relative">
              <div className="w-full  absolute top-[-2rem] left-0 right-0 flex justify-center">
                <div className="flex items-center mt-1 w-[3.5rem] h-[3rem]  justify-center space-x-3 text-_light_blue bg-[#F0FBFC]">
                  <button className="bg-[#1DC1D1] text-white p-2 ">
                    <a href="https://linkedin.com/in/nishanth-r-b11829146">
                      <FaLinkedin />
                    </a>
                  </button>
                </div>
              </div>
              <div className="w-full h-[5rem] lg:h-[7rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
                <h5 className="mb-0 font-bold text-lg lg:text-xl mt-2 md:mt-4">
                  {" "}
                  Nishanth R
                </h5>
                <small className="font-bold text-sm lg:text-base">
                  Business Analyst
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
