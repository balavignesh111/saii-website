import aboutImage from "../../../public/img/about.jpg";
import { FaArrowRight } from "react-icons/fa";
import About from "./about-us.component";

const Abouts = () => {
  return (
    <div className="w-[90%] flex flex-col justify-between items-start gap-12 lg:flex-row lg:justify-between lg:items-stretch mt-4">
      <div className="w-[100%]  lg:w-[50%] lg:h-[60%] lg:flex lg:flex-col lg:justify-stretch px-[5%]">
        <img
          src={aboutImage}
          alt="about_image"
          className="w-100 h-[60%] lg:h-auto object-cover"
        />
      </div>
      <div className="w-[100%] lg:w-[50%] h-auto flex flex-col justify-between items-start ">
        <h6 className="text-_blue font-semibold tracking-wide text-[1rem]">
          ABOUT US
        </h6>
        <h2 className="text-calc lg:text-[2.12rem] font-semibold font-card-header tracking-wide">
          Inspiring Innovations
        </h2>
        <p className="text-light_grey font-semibold tracking-wide">
          Imagine a learning experience that adapts to your unique learning
          style and preferences. Whether you're a student striving for academic
          excellence, a professional seeking to upskill, or an individual eager
          to pursue new passions, we provide a diverse range of courses and
          resources that cater to your individual aspirations.
        </p>
        <p className="text-light_grey font-semibold">
          Join us on this journey, as we bridge the gap between traditional
          education and the demands of the modern world.{" "}
        </p>
        <h2 className="text-[2rem] font-semibold font-card-header">Why Us?</h2>
        <ul className="w-[100%] flex flex-row text-light_grey font-semibold">
          <div className="w-[50%] flex flex-col gap-2">
            <li className="flex gap-2 justify-start items-center">
              {" "}
              <FaArrowRight className="inline-block text-_blue" />
              Experts from the Industry
            </li>
            <li className="flex gap-2 justify-start items-center">
              <FaArrowRight className="inline-block text-_blue" />
              International Certifications
            </li>
            <li className="flex gap-2 justify-start items-center">
              <FaArrowRight className="inline-block text-_blue" />
              Project-Based Learning
            </li>
          </div>
          <div className="w-[50%] flex flex-col gap-2">
            <li className="flex gap-2">
              <FaArrowRight className="inline-block text-_blue mt-1" />
              Vernacular Training
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="inline-block text-_blue mt-1" />
              Code Along Sessions
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="inline-block text-_blue mt-1" />
              <p>Trusted brand for more than 50 years</p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Abouts;
