import Logo from "../../../public/img/logo.png";
import Logos from "../../../public/img/Logo-two.png";
import Lo from "../../../public/img/Logo-three.png";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-20  gap-4 w-full h-[5rem] ">
      {/* <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"/> */}
      {/* <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5"> */}
      <div className="flex w-[20rem] h-[5rem]  cursor-pointer">
        <img src={Logo} alt="Suguna" />
        <img src={Logos} alt="comptia" />
        <img src={Lo} alt="skill" />
      </div>
      {/* </a> */}
      {/* <button type="button" className="navbar-toggler me-4 bg-black" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button> */}
      {/* <div className="collapse navbar-collapse" id="navbarCollapse"> */}
      <div className="navbar-nav flex items-center cursor-pointer font-extrabold justify-between gap-4 ms-auto  p-4 p-lg-0">
        <span className="hover:text-[#1DC1D1]">HOME</span>
        <span className="hover:text-[#1DC1D1]">ABOUT</span>
        <div className="flex items-center gap-1 ">
          <span className="hover:text-[#1DC1D1]">COURSES</span>
          <RiArrowDropDownLine className="h-8 w-6 " />
          <span className="hover:text-[#1DC1D1]">PAGES</span>
          <RiArrowDropDownLine className="h-8 w-6" />
        </div>

        {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu fade-down m-0">
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div> */}
        <span className="hover:text-[#1DC1D1]">CONTACT</span>
        <div className="flex items-center justify-center gap-2 h-[5rem] w-[10rem] text-white bg-[#1DC1D1]">
          <span className="btn flex items-center  font-semibold btn-primary py-4 px-lg-5 d-none d-lg-block">
            Join Now
          </span>
          <FaArrowRight />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
