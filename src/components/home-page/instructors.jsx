import Team from "../../../public/img/team-one.png";
import Teams from "../../../public/img/team-two.png";
import Teamm from "../../../public/img/team-three.png";
import Four from "../../../public/img/team-four.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Instructor = () => {
    return ( 
        <div className="w-[100%] mb-4">
           <div className="text-center mt-6">
                <span className="mb-3 flex items-center justify-center text-lg font-semibold text-[#1DC1D1]">INSTRUCTORS</span>
                <h1 className="flex items-center justify-center text-3xl font-bold">Expert Instructors</h1>
            </div>
            <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-row items-center  mt-6 justify-evenly ">
            <div className="w-full max-w-[20rem]">
          <div className="overflow-hidden">
            <img className="w-full h-[20rem] object-cover hover:scale-[1.1] transition duration-[400ms]" src={Team} alt="one" />
          </div>
          <div className="relative mt-2">
            <div className="absolute top-[-1.5rem] left-0 right-0 flex justify-center">
              <div className="flex items-center w-[8.5rem] h-[3rem] justify-center space-x-3 bg-[#F0FBFC]">
                <button className="bg-[#1DC1D1] text-white p-2"><FaFacebookF /></button>
                <button className="bg-[#1DC1D1] text-white p-2"><FaTwitter /></button>
                <button className="bg-[#1DC1D1] text-white p-2"><FaLinkedin /></button>
              </div>
            </div>
            <div className="w-full h-[5rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
              <h5 className="mb-0 font-bold text-xl mt-2">Dr. K. Manojkumar</h5>
              <small className="font-bold text-sm">Data Scientist</small>
            </div>
          </div>
        </div>

                <div className="flex flex-col">
                <div className="overflow-hidden">
                    <img className="h-[20rem] w-[20rem] scale-[1] hover:scale-[1.1] transition duration-[400ms]" src={Teams} alt="one" />
                </div> 
                <div className=" relative">
                    <div className="w-full  absolute top-[-1.5rem] left-0 right-0 flex justify-center">
                        <div className="flex items-center mt-1 w-[8.5rem] h-[3rem]  justify-center space-x-3 bg-[#F0FBFC] ">
                            <button className="bg-[#1DC1D1] text-white p-2 "><FaFacebookF /></button>
                            <button className="bg-[#1DC1D1] text-white p-2 "><FaTwitter /></button>
                            <button className="bg-[#1DC1D1] text-white p-2 "><FaLinkedin /></button>
                        </div>
                        
                    </div>
                    <div className="w-[20rem] h-[5rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
                <h5 className="mb-0 font-bold text-xl mt-6">Banu S</h5>
                <small className="font-bold text-sm">CyberSecurity Expert and SME</small>
                    </div> 
                </div>
                </div>

                <div className="flex flex-col">
                <div className="overflow-hidden">
                    <img className="h-[20rem] w-[20rem] hover:scale-[1.3] scale-[1.1] transition duration-[400ms]" src={Teamm} alt="one" />
                </div> 
                <div className=" relative">
                    <div className="w-full  absolute top-[-1.5rem] left-0 right-0 flex justify-center">
                        <div className="flex items-center mt-1 w-[8.5rem] h-[3rem]  justify-center space-x-3 bg-[#F0FBFC]">
                            <button className="bg-[#1DC1D1] text-white p-2 "><FaFacebookF /></button>
                            <button className="bg-[#1DC1D1] text-white p-2 "><FaTwitter /></button>
                            <button className="bg-[#1DC1D1] text-white p-2 "><FaLinkedin /></button>
                        </div>
                        
                    </div>
                    <div className="w-[20rem] h-[5rem] flex flex-col text-center  justify-center bg-[#F0FBFC] mt-0">
                <h5 className="mb-0 font-bold text-xl mt-6">Swarnamanjari B</h5>
                <small className="font-bold text-sm">Data Scientist</small>
                    </div> 
                </div>
                </div>

                <div className="flex flex-col">
                <div className="overflow-hidden">
                    <img className="h-[20rem] w-[20rem] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]" src={Four} alt="one" />
                </div> 
                <div className=" relative">
                    <div className="w-full  absolute top-[-1.5rem] left-0 right-0 flex justify-center">
                        <div className="flex items-center mt-1 w-[8.5rem] h-[3rem]  justify-center space-x-3 bg-[#F0FBFC]">
                            <button className="bg-[#1DC1D1] text-white p-2 "><FaFacebookF /></button>
                            <button className="bg-[#1DC1D1] text-white p-2 "><FaTwitter /></button>
                            <button className="bg-[#1DC1D1] text-white p-2 "><FaLinkedin /></button>
                        </div>
                        
                    </div>
                    <div className="w-[20rem] h-[5rem] flex flex-col text-center  justify-center bg-[#F0FBFC] mt-0">
                <h5 className="mb-0 font-bold text-xl mt-6"> Nishanth R</h5>
                <small className="font-bold text-sm">Business Analyst</small>
                    </div> 
                </div>
                </div>

            </div>
            </div>
        </div>
     );
}
 
export default Instructor;