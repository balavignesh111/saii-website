import Logo from "../../../public/img/logo.png";
import Logos from "../../../public/img/Logo-two.png";
import Lo from "../../../public/img/Logo-three.png";
import Log from "../../../public/img/Logo-four.png";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoReorderThree } from "react-icons/io5";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);

  // const toggleManufacturingDropDown = () => {
  //   setIsVisible(!isVisible);
  // };

  return (
    <div className="flex flex-row justify-between pl-[2.5rem]  gap-4 w-full min-h-[4.5rem] lg:max-h-[5rem]">
      <div
        className={`w-[50%] flex ${
          isClicked ? `flex-col` : `flex-row`
        } lg:w-[100%] lg:flex lg:flex-row lg:items-center lg:justify-between`}
      >
        <div className="flex w-[100%] h-[5rem]  cursor-pointer  lg:max-w-[30%] ">
          <img className="w-[35%]" src={Logo} alt="Suguna" />
          <img className="w-[20%] " src={Logos} alt="comptia" />
          <img className="w-[20%]" src={Lo} alt="skill" />
          <img className="w-[25%]" src={Log} alt="Aws" />
        </div>
        <div
          className={`navbar-nav flex ${
            isClicked ? `flex-col` : `flex-row hidden`
          } lg:w-auto lg:justify-between 
      lg:flex-row lg:flex lg:items-center cursor-pointer font-extrabold justify-between gap-6  p-4 p-lg-0`}
        >
          <NavLink to="/" className="hover:text-[#1DC1D1]">
            HOME
          </NavLink>
          <NavLink to="/about" className="hover:text-[#1DC1D1]">
            ABOUT
          </NavLink>
          <NavLink to="/robot" className="hover:text-[#1DC1D1]">
            AI & ROBOTICS
          </NavLink>
          <div className="lg:h-[5rem] sm:h-[1.5rem] flex flex-row items-stretch gap-1 relative group">
            <div className="h-full flex flex-row items-center justify-center ">
              <p className="hover:text-[#1DC1D1]">COURSES</p>
              <RiArrowDropDownLine
                // onClick={toggleManufacturingDropDown}
                className="h-8 w-6 hover:text-[#1DC1D1]"
              />
            </div>
            <div
              className={`hidden w-[14rem] absolute z-50 top-[5rem] bg-_light_blue flex flex-col gap-2 p-2 gap-y-4 rounded-md  group-hover:flex`}
            >
              <NavLink to="/applied-ai" className="hover:bg-[#e7e5e4]">
                Applied AI
              </NavLink>
              <NavLink to="/robotics" className="hover:bg-[#e7e5e4]">
                Robotic Process Automation
              </NavLink>
              <NavLink to="/cybersecurity" className="hover:bg-[#e7e5e4]">
                Cyber Security
              </NavLink>
              <NavLink to="/fullstack" className="hover:bg-[#e7e5e4]">
                Full Stack Web Development
              </NavLink>
              <NavLink to="/promptengineering" className="hover:bg-[#e7e5e4]">
                Prompt Engineering
              </NavLink>
              <NavLink to="/gen" className="hover:bg-[#e7e5e4]">
                Generative AI
              </NavLink>
            </div>
          </div>

          <NavLink to="contact" className="hover:text-[#1DC1D1]">
            CONTACT
          </NavLink>
          <div
            className={`${
              isClicked ? `hidden` : `block`
            } lg:flex items-center justify-center gap-2 h-[5rem] w-[10rem] text-white bg-[#1DC1D1]`}
          >
            <NavLink
              to="joinnow"
              className="btn flex items-center text-_light_blue font-semibold btn-primary py-4 px-lg-5 d-none d-lg-block"
            >
              Join Now
            </NavLink>
            <FaArrowRight className="text-_light_blue" />
          </div>
        </div>
      </div>
      <div className="flex items-start pt-[1rem] pr-[1px] mr-[2rem] lg:hidden cursor-pointer">
        <IoReorderThree
          className="h-[3rem] w-[3rem] text-light_grey border-light_grey "
          onClick={() => setIsClicked(() => (isClicked ? false : true))}
        />
      </div>
    </div>
  );
};

export default Navbar;
