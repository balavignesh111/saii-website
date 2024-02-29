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
                  <span className="text-black text-[20px]">+91 9999988888</span>
                  <br />
                  <span className="text-black text-[20px]">+91 9600860934</span>
                </div>
              </div>
              <div className=" flex items-center gap-2 ">
                <div className="flex items-center gap-2">
                  <MdEmail className="text-[white] bg-[#1DC1D1]   hover:text-black cursor-pointer text-[5rem] p-[1rem] rounded-tl-[1rem] rounded-br-[1rem]"></MdEmail>
                  <div className="w-full">
                    <span className="text-black ">
                      sugunainnovative@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  items-center gap-2">
                <a href="https://www.google.com/maps/place/Suguna+Polytechnic+College/@11.0509439,77.0322591,15z/data=!4m6!3m5!1s0x3ba857bbffffffff:0xfaed96bd33545bc0!8m2!3d11.0509439!4d77.0322591!16s%2Fg%2F1tl7m4b8?entry=ttu">
                  <FaLocationDot className="text-[white] bg-[#1DC1D1]   hover:text-black cursor-pointer text-[5rem] p-[1rem] rounded-tl-[1rem] rounded-br-[1rem]"></FaLocationDot>
                </a>
                <div className="items-center">
                  <span className="text-black font-bold text-[20px]">
                    Kalapatti Main Rd, near Vinayaka Temple, GKD Nagar,
                  </span>
                  <br />
                  <span className="text-black text-[20px]">
                    Nehru Nagar West, Coimbatore, Tamil Nadu - 641014
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
              className="w-full min-h-[600px] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.835677029575!2d77.02968417405829!3d11.050943889114977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857bbffffffff%3A0xfaed96bd33545bc0!2sSuguna%20Polytechnic%20College!5e0!3m2!1sen!2sin!4v1707721563276!5m2!1sen!2sin"
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
