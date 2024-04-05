import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Contactus from "../../../public/img/contactus.jpg";
import Footer from "./footer.component";

const Contact = () => {
  return (
    <div>
      <div className="w-full min-h-[100vh] mt-4 p-4 sm:w-full sm:p-4 px-[10%]">
        <div className="w-full flex flex-col justify-center items-start mt-4 sm:flex sm:flex-col sm:justify-start sm:items-start md:flex md:flex-col md:justify-start md:items-start lg:flex lg:flex-row lg:justify-center lg:items-center gap-2 px-[4%]">
          <div className="w-[50%]">
            <h1 className="w-[11rem] font-bold text-[2rem] text-_blue border-b-[3px] border-b-orange-400 transition-all 0.2s ease-in-out pt-[0rem]">
              Contact Us
            </h1>
            <h1 className="text-black text-[2rem] w-[25rem] text-start font-bold">
              If you are any doubts please contact us our institute in any time.
            </h1>
            <div className="w-full flex flex-col justify-start items-start pt-[3rem]  pb-[7rem] gap-10">
              <div className="flex justify-around items-center gap-2">
                <IoCall className="text-[white] bg-[#1DC1D1]   hover:text-black cursor-pointer text-[5rem] p-[1rem] rounded-tl-[1rem] rounded-br-[1rem]"></IoCall>
                <div>
                  <span className="text-black text-[20px] font-semibold">
                    +91 9363043070
                  </span>
                  <br />
                  {/* <span className="text-black text-[20px]">+91 9600860934</span> */}
                </div>
              </div>
              <div className=" flex items-center gap-4 ">
                <div className="flex items-center gap-4">
                  <MdEmail className="text-[white] bg-[#1DC1D1]  w-[7rem] hover:text-black cursor-pointer text-[5rem] p-[1rem] rounded-tl-[1rem] rounded-br-[1rem]"></MdEmail>
                  <div className="w-full font-semibold text-xl">
                    <span className="text-black ">info@saii.in</span>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-4">
                <a href="https://www.google.com/maps/place/SUGUNA+INNOVATION+INSTITUTE/@11.0099469,76.9790353,17z/data=!3m2!4b1!5s0x3ba859b33c2d87ef:0x439dba027315c9de!4m6!3m5!1s0x3ba859b409dbffff:0x16abdcf885125312!8m2!3d11.0099416!4d76.9816102!16s%2Fg%2F11l2xm5vd2?entry=ttu">
                  <FaLocationDot className="text-[white] bg-[#1DC1D1]   hover:text-black cursor-pointer text-[5rem] p-[1rem] rounded-tl-[1rem] rounded-br-[1rem]"></FaLocationDot>
                </a>
                <div className="items-center">
                  <span className="text-black font-bold text-[20px]">
                    707,First Floor,suguna corporate office
                  </span>
                  <br />
                  <span className="text-black text-[20px]">
                    Avinashi Road, Coimbatore, Tamil Nadu
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] pb-[5rem]">
            <img src={Contactus} alt="" />
          </div>
        </div>
        <div className="w-full ">
          <p className=" p-4 ">
            <iframe
              className="rounded-lg w-full min-h-[600px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.381896657479!2d76.97903527588535!3d11.009946854841186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b409dbffff%3A0x16abdcf885125312!2sSUGUNA%20INNOVATION%20INSTITUTE!5e0!3m2!1sen!2sin!4v1709277815293!5m2!1sen!2sin"
            ></iframe>
          </p>
        </div>
      </div>
      <div className="w-full px-[7%] pr-5 bg-[#181D38]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
