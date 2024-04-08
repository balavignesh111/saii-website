import {
  FaChevronRight,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-[90%] pt-8">
      <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-between gap-8 pb-4">
        <div className="text-[#fff] w-full md:w-[45%] lg:w-[20%]">
          <h2 className="font-card-header font-semibold text-[1.45rem] tracking-wide mb-4">
            Quick Link
          </h2>
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem]" />
              <p className="font-semibold text-[0.9rem]">About Us</p>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem] inline-block" />
              <p className="font-semibold text-[0.9rem]">Contact Us</p>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem] inline-block" />
              <p className="font-semibold text-[0.9rem]">Privacy Policy</p>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem] inline-block" />
              <p className="font-semibold text-[0.9rem]">Terms & Condition</p>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem] inline-block" />
              <p className="font-semibold text-[0.9rem]">FAQ & Help</p>
            </div>
          </div>
        </div>
        <div className="text-[#fff] w-full md:w-[45%] lg:w-[20%]">
          <h2 className="font-card-header font-semibold text-[1.45rem] tracking-wide mb-4">
            Contact
          </h2>
          <div className="w-[100%] flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <FaLocationDot className="text-[1rem]" />
              <p className="font-semibold text-[0.9rem]">
                707, Avinashi Road, Coimbatore - 641018
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[1rem] inline-block" />
              <p className="font-semibold text-[0.9rem]">+91 93630 43070</p>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="text-[1rem] inline-block text-[#fff]" />
              <p className="font-semibold text-[0.9rem]">info@saii.in</p>
            </div>
          </div>
          <div className="w-full flex gap-2 mt-6">
            <div className="w-[2rem] h-[2rem] border-[1px] border-[#fff] rounded-[50%] flex justify-center items-center group hover:bg-[#fff]">
              <FaTwitter className="text-[#fff] group-hover:text-_blue" />
            </div>
            <div className="w-[2rem] h-[2rem] border-[1px] border-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#fff] group">
              <FaFacebookF className="text-[#fff] group-hover:text-_blue" />
            </div>
            <div className="w-[2rem] h-[2rem] border-[1px] border-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#fff] group">
              <FaYoutube className="text-[#fff] group-hover:text-_blue" />
            </div>
            <div className="w-[2rem] h-[2rem] border-[1px] border-[#fff] rounded-[50%] flex justify-center items-center hover:bg-[#fff] group">
              <FaLinkedinIn className="text-[#fff] group-hover:text-_blue" />
            </div>
          </div>
        </div>
        <div className="text-[#fff] w-full md:w-[45%] lg:w-[20%]">
          <h2 className="font-card-header font-semibold text-[1.45rem] tracking-wide mb-4">
            Our Institutions
          </h2>
          <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem]" />
              <p className="font-semibold text-[0.9rem]">
                Suguna Groups
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem]" />
              <p className="font-semibold text-[0.9rem]">
                Suguna College of Arts and Science
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem] inline-block" />
              <p className="font-semibold text-[0.9rem]">
                Suguna College of Engineering
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem] inline-block" />
              <p className="font-semibold text-[0.9rem]">Suguna PIP School</p>
            </div>
            <div className="flex items-center gap-2">
              <FaChevronRight className="text-[0.7rem] inline-block" />
              <p className="font-semibold text-[0.9rem]">
                Suguna Innovation Institute
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[45%] lg:w-[20%] flex flex-col gap-4 text-[#fff]">
          <h2 className="font-card-header font-semibold text-[1.45rem] tracking-wide mb-0">
            Newsletter
          </h2>
          <p className="">
            Join our Newsletter to receive regular updates about our courses.
          </p>
          <div className="self-center w-[80%] md:w-full flex flex-row justify-between bg-[#fff] py-2 px-2 border-4">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="outline-none w-[80%] text-[#000]"
            />
            <button className="bg-_blue text-white px-[0.25rem] py-[0.25rem]">
              SignUp
            </button>
          </div>
        </div>
      </div>
      <hr className="border-b-none border-t border-[rgba(256,256,256,0.1)] w-full" />
      <div className="w-full flex justify-center text-[#fff] pt-4">
        <p>Copyright © 2023 Suguna Innovation Institute</p>
      </div>
    </div>
  );
};

export default Footer;
