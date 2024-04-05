import Robotic from "../../../public/img/robotic-icon.png";
import Coding from "../../../public/img/coding-icon.png";
import VR from "../../../public/img/vr-icon.png";
import Ai from "../../../public/img/ai-icon.png";
import AI from "../../../public/img/Ai-connect.jpg";
import Innovation from "../../../public/img/innovative-lab.jpg";
import DIY from "../../../public/img/diy kit.webp";
import curriculum from "../../../public/img/curriculum.webp";
import SIL from "../../../public/img/sil.jpg";
import LMS from "../../../public/img/lms.jpg";
import Robo from "../../../public/img/robo-lab.png";
import IOT from "../../../public/img/ai-lab.png";
import AR from "../../../public/img/ar-lab.png";
import Footer from "./footer.component";
import Form from "./hubspot/robotics-form";

const Robotics = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-8 px-4 sm:px-0 ">
      <div className="flex flex-col lg:flex-row lg:justify-around w-[100%] bg-[#181D38] items-stretch justify-center gap-8 px-[5%] py-[2rem]">
        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center gap-8 text-_light_blue">
          <h1 className="lg:text-4xl sm:text-2xl text-xl">WHO WE ARE</h1>
          <p className="lg:text-xl sm:text-base">
            Welcome to Suguna Innovations, the leading Edtech company in India.
            We specialize in providing comprehensive end-to-end solutions for
            K-12 schools, aligning with the National Education Policy (NEP)
            2020. Our mission is to equip students and teachers with
            21st-century skills (STEM, Coding, Robotics, AI, ML, IOT, AR & VR )
            necessary to thrive in the rapidly changing innovation landscape.
          </p>
          {/* <span className="text-xl sm:text-base">Avail Your Seats Now!</span> */}
        </div>

        <div className="w-full lg:w-[35%] ">
          <Form />
        </div>
      </div>

      <div class="mt-8 max-w-screen-xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-[8%]">
        {/* <!-- List Component --> */}
        <div>
          <h1 class="text-3xl font-bold font-card-header">WHAT WE DO</h1>
          <ul class="mt-12 text-xl list-disc flex flex-col gap-8">
            <li>
              Preparing students for a rapidly changing technological world
            </li>
            <li>Innovation & 21st-century Skills</li>
            <li>
              Empowering kids to become creative Thinkers & problem solvers
            </li>
            <li>Integrated End to End for school aligned with NEP 2020</li>
          </ul>
        </div>
        {/* <!-- Card Component Grid --> */}
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-[#F0FBFC] hover:bg-[#5dcad4] group hover:text-white hover:translate-y-[-1rem] transition-all duration-500 ease-in-out rounded-lg p-4">
            <img class="h-[7rem] mx-auto" src={Robotic} alt="" />
            <h2 class="font-semibold text-xl text-center group-hover:text-white">
              Robotics
            </h2>
          </div>
          <div class="bg-[#F0FBFC] hover:bg-[#5dcad4] group hover:text-white hover:translate-y-[-1rem] transition-all duration-500 ease-in-out rounded-lg p-4">
            <img class="h-[8rem] mx-auto" src={Coding} alt="" />
            <h2 class="font-semibold text-xl text-center group-hover:text-white">
              Coding
            </h2>
          </div>
          <div class="bg-[#F0FBFC] hover:bg-[#5dcad4] group hover:text-white hover:translate-y-[-1rem] transition-all duration-500 ease-in-out rounded-lg p-4">
            <img class="h-[8rem] mx-auto" src={VR} alt="" />
            <h2 class="font-semibold text-xl text-center group-hover:text-white">
              AR & VR
            </h2>
          </div>
          <div class="bg-[#F0FBFC] hover:bg-[#5dcad4] group hover:text-white hover:translate-y-[-1rem] transition-all duration-500 ease-in-out rounded-lg p-4">
            <img class="h-[8rem] mx-auto" src={Ai} alt="" />
            <h2 class="font-semibold text-xl text-center group-hover:text-white">
              AI & ML
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-[8%] lg:px-8">
        <h1 className="font-card-header text-calc lg:text-[2.5rem] font-semibold tracking-wide text-center mt-8">
          OFFERINGS TO MAKE YOUR SCHOOL READY FOR 21ST CENTURY
        </h1>

        <div className="flex flex-col md:flex-row justify-center md:gap-8 mt-4">
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="bg-[#f0fbfc] rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                className="w-36 h-[200px] object-cover mb-4"
                src={Robo}
                alt=""
              />
              <h3 className="text-2xl font-semibold mb-2">
                STEM & ROBOTICS LAB
              </h3>
              <p className="text-center text-lg">
                STEMROBO is your gateway to an exciting world of innovation and
                learning, where students and educators can explore the
                fascinating concepts of STEM and Robotics. Whether you are
                looking to establish a STEM lab, a robotics lab, or a
                combination of both, we have the expertise and resources to make
                your students dive into the concepts of STEM and Robotics
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="bg-[#f0fbfc] rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                className="w-36 h-[200px] object-cover mb-4"
                src={IOT}
                alt=""
              />
              <h3 className="text-2xl font-semibold mb-2">AI AND IOT LAB</h3>
              <p className="text-center text-lg">
                Our AI & IoT lab for schools is tailored to cater to the
                educational needs of students at K-12 levels. Through hands-on
                activities and projects, students can gain a practical
                understanding of IoT and explore its potential for creating
                innovative and real-life projects. If you are looking to
                establish an AI and IoT lab setup in your school, STEMROBO is
                here to support you
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-[#f0fbfc] rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                className="w-36 h-[200px] object-cover mb-4"
                src={AR}
                alt=""
              />
              <h3 className="text-2xl font-semibold mb-2">AR/VR LAB</h3>
              <p className="text-center text-lg">
                Our AR/VR lab setup is designed to provide students and
                educators with an engaging platform to explore, create, and
                learn in simulated environments where our experts are committed
                to empower students with the skills to navigate the exciting
                world of AR&VR. Our Virtual Reality labs will allow students to
                quickly and easily academic concepts that previously required
                extensive theoretical
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 py-8 px-4 md:px-[8%] flex flex-col items-center ">
        <h2 className="font-card-header text-calc lg:text-[2.5rem] font-semibold tracking-wide text-center">
          End to End Solution for 21st Century Schools in line with NEP 2020
        </h2>
        <div className="w-full max-w-[60rem] mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Top Row */}
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={AI}
              alt="AI Connect"
              className="w-full h-[300px] object-cover rounded-lg hover:scale-[1.1] transition-scale duration-500"
            />
            <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.02rem] right-0">
              AI Connect
            </span>
          </div>
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={Innovation}
              alt="Innovation Lab"
              className="w-full h-[300px] object-cover rounded-lg hover:scale-[1.1] transition-scale duration-500"
            />
            <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.02rem] right-0">
              Innovation Lab
            </span>
          </div>
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={DIY}
              alt="DIY Kit"
              className="w-full h-[300px] object-cover rounded-lg hover:scale-[1.1] transition-scale duration-500"
            />
            <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.2rem] right-0">
              DIY Kit
            </span>
          </div>
          {/* Bottom Row */}
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={curriculum}
              alt="Curriculum"
              className="w-full h-[300px] object-cover rounded-lg hover:scale-[1.1] transition-scale duration-500"
            />
            <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.02rem] right-0">
              Curriculum
            </span>
          </div>
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={SIL}
              alt="SIL"
              className="w-full h-[300px] object-cover rounded-lg hover:scale-[1.1] transition-scale duration-500"
            />
            <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.02rem] right-0">
              School Innovation League
            </span>
          </div>
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={LMS}
              alt="LMS"
              className="w-full h-[300px] object-cover rounded-lg hover:scale-[1.1] transition-scale duration-500"
            />
            <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.02rem] right-0">
              Learning Management System
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-[10%] pr-5 bg-[#181D38]">
        <Footer />
      </div>
    </div>
  );
};

export default Robotics;
