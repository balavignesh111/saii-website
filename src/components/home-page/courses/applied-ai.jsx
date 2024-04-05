import placement from "../../../../public/img/placement-img.png";
import live from "../../../../public/img/livecourse.png";
import mentor from "../../../../public/img/mentor.png";
import project from "../../../../public/img/project.png";
import { FaLinkedin } from "react-icons/fa";
import Team from "../../../../public/img/team-one.png";
import Teams from "../../../../public/img/team-two.png";
import Teamm from "../../../../public/img/team-three.png";
import Hubspot from "../hubspot/hubspot";
import Footer from "../footer.component";

const Applied = () => {
  return (
    <div className="w-full sm: pt-0 flex flex-col gap-6 items-center">
      <div className="flex flex-col lg:flex-row lg:justify-around w-[100%] bg-[#181D38] items-stretch justify-center gap-8 px-[5%] py-[2rem]">
        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center gap-8 text-_light_blue">
          <h1 className="lg:text-4xl sm:text-2xl text-xl">Applied AI Course</h1>
          <p className="lg:text-xl sm:text-base">
            Navigate the intersection of innovation and intelligence as you dive
            into the realm of Applied AI. From predicting market trends to
            optimizing resource allocation, this course empowers you to harness
            the potential of AI in solving real-world challenges with precision
            and insight.
          </p>
          <span className="text-xl sm:text-base">Avail Your Seats Now!</span>
        </div>

        <div className="w-full lg:w-[35%] ">
          <Hubspot />
        </div>
      </div>

      {/* course highlights */}
      <div className="w-full flex justify-center font-bold text-2xl ">
        <h1 className="text-[1.25rem] sm:text-[1.5rem]">
          Applied AI Course Highlights
        </h1>
      </div>
      <div className="w-[80%] grid grid-cols-1 grid-rows-4 gap-[1rem] justify-items-center  sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:justify-items-stretch md:justify-between lg:grid-rows-1 lg:grid-cols-4">
        <div
          className="w-[18rem] sm:w-auto flex flex-col gap-2 justify-center items-center bg-[#F0FBFC]
           hover:bg-[#5dcad4] group hover:text-white hover:translate-y-[-1rem] transition-all duration-500 ease-in-out rounded-lg"
        >
          <img className="h-[7rem] " src={placement} alt="" />
          <h2 className="font-semibold text-xl text-center group-hover:text-white">
            100% Placement Guarantee
          </h2>
        </div>
        <div
          className="w-[18rem] sm:w-auto sm:h-auto flex flex-col gap-2 justify-center items-center bg-[#F0FBFC] hover:bg-[#5dcad4] group hover:text-white 
      hover:translate-y-[-1rem] transition-all duration-500 ease-in-out rounded-lg"
        >
          <img className="h-[8rem] " src={live} alt="" />
          <h2 className="font-semibold text-xl justify-center group-hover:text-white">
            Live Courses
          </h2>
        </div>
        <div
          className="w-[18rem] sm:w-auto flex flex-col gap-2 justify-center items-center bg-[#F0FBFC] hover:bg-[#5dcad4] group hover:text-white 
      hover:translate-y-[-1rem] transition-all duration-500 ease-in-out rounded-lg"
        >
          <img className="h-[8rem]" src={mentor} alt="" />
          <h2 className="font-semibold text-xl justify-center group-hover:text-white">
            Mentorship Support
          </h2>
        </div>
        <div
          className="w-[18rem] sm:w-auto sm:h-auto flex flex-col gap-2 justify-center items-center bg-[#F0FBFC] hover:bg-[#5dcad4] group hover:text-white 
      hover:translate-y-[-1rem] transition-all duration-500 ease-in-out rounded-lg"
        >
          <img className="h-[8rem]" src={project} alt="" />
          <h2 className="font-semibold text-xl justify-center group-hover:text-white">
            Project Based Learning
          </h2>
        </div>
      </div>
      {/* Curriculum  */}
      <div className="w-[100%] px-[10%] 2xl:px-[20%]">
        <div className="pt-4 mt-8 flex flex-col items-center justify-center gap-8 shadow-lg shadow-light_grey">
          <div className="flex justify-center font-bold sm:text-2xl text-xl w-full lg:border-b-2">
            <h1 className="border-b-2 lg:border-none">
              Applied AI Course Curriculum
            </h1>
          </div>

          <div className="justify-items-center place-items-start grid grid-cols-1 lg:grid-cols-2 gap-[2.5rem] justify-center w-full p-4">
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
                Week 1-5 -Foundations of AI
              </h2>
              <p className="w-full">
                Introduction to Artificial Intelligence, Machine Learning
                Fundamentals, Data Preprocessing and Feature Engineering,
                Supervised Learning Algorithms, Unsupervised Learning Algorithms
              </p>
            </div>
            <div className="place-self-start ">
              <h2 className="text:base sm:text-xl font-semibold">
                Week 6-10 - Advanced AI Techniques
              </h2>
              <p className="w-full">
                Deep Learning Basics, Neural Networks and Deep Learning,
                Convolutional Neural Networks (CNNs), Recurrent Neural Networks
                (RNNs), Natural Language Processing (NLP) and Text Mining
              </p>
            </div>
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
                Week 11-15 - AI Applications
              </h2>
              <p className="w-full">
                Image Recognition and Computer Vision, Recommender Systems, Time
                Series Analysis and Forecasting, AI in Healthcare, AI Ethics and
                Responsible AI Practices
              </p>
            </div>
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
                Week 16-20 - AI Project Development
              </h2>
              <p className="w-full">
                Capstone Project: Applied AI Solution Development, Project
                Planning and Management, Presentation and Documentation Skills,
                Final Project Presentation and Evaluation
              </p>
            </div>
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
                Week 21-25 - Industry Integration and Emerging Trends
              </h2>
              <p className="w-full">
                Industry Guest Lectures and Case Studies, Emerging Trends in
                Applied AI, Career Development and Job Placement Assistance, AI
                in the Future: Challenges and Opportunities
              </p>
            </div>
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
                Week 26-28 - Interview Preparation
              </h2>
              <p className="w-full">
                Mock Interviews and Feedback Sessions, Resume Building and Job
                Search Strategies, Soft Skills Development, Networking and
                Professional Development Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Instructors  */}
      <div className="w-[100%] px-[10%] 2xl:px-[20%]">
        <div className="shadow-lg shadow-light_grey w-full px-2">
          <h1 className="flex justify-center font-bold text-2xl border-b-2 ">
            Meet Your Instructors
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center flex-wrap mt-8 gap-8 ">
            <div className="w-full md:max-w-[20rem] flex flex-col justify-center items-center md:mb-0">
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
                <div className="w-[20rem] h-[5rem] lg:h-[7rem] flex flex-col text-center justify-center items-stretch bg-[#F0FBFC] mt-0">
                  <h5 className="mb-0 font-bold text-xl lg:text-xl mt-2 lg:mt-4">
                    Dr. K. Manojkumar S
                  </h5>
                  <small className="font-bold text-sm lg:text-base">
                    Data Scientist
                  </small>
                </div>
              </div>
            </div>

            <div className="w-full md:max-w-[20rem] flex flex-col justify-center items-center md:mb-0">
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
                <div className="w-[20rem] h-[5rem] lg:h-[7rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
                  <h5 className="mb-0 font-bold text-xl lg:text-xl mt-2 md:mt-4">
                    Banu S
                  </h5>
                  <small className="font-bold text-sm lg:text-base">
                    CyberSecurity Expert and SME
                  </small>
                </div>
              </div>
            </div>

            <div className="w-full md:max-w-[20rem] flex flex-col justify-center items-center md:mb-0">
              <div className="overflow-hidden">
                <img
                  className="h-[20rem] w-[20rem] object-fit scale-[1.2] hover:scale-[1.3] transition duration-[400ms]"
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
                <div className="w-[20rem] h-[5rem] lg:h-[7rem] flex flex-col text-center justify-center bg-[#F0FBFC] mt-0">
                  <h5 className="mb-0 font-bold text-xl lg:text-xl mt-2 md:mt-4">
                    Swarnamanjari B
                  </h5>
                  <small className="font-bold text-sm lg:text-base">
                    Data Scientist
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[10%] pr-5 bg-[#181D38]">
        <Footer />
      </div>
    </div>
  );
};

export default Applied;