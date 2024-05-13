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

const CyberSecurity = () => {
  return (
    <div className="w-full sm: pt-0 flex flex-col gap-6 items-center">
      <div className="flex flex-col lg:flex-row lg:justify-around w-[100%] bg-[#181D38] items-stretch justify-center gap-8 px-[5%] py-[2rem]">
        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center gap-8 text-_light_blue">
          <h1 className="lg:text-4xl sm:text-2xl text-xl">
            Cyber Security Course
          </h1>
          <p className="lg:text-xl sm:text-base">
          Safeguard digital ecosystems from the shadows of cyber threats with our comprehensive cybersecurity course.
           Traverse the landscape of encryption, intrusion detection, and ethical hacking to fortify organizations
            against modern cyber adversaries.
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
          Cyber Security Course Highlights
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
              Cyber Security Course Curriculum
            </h1>
          </div>

          <div className="justify-items-center place-items-start grid grid-cols-1 lg:grid-cols-2 gap-[2.5rem] justify-center w-full p-4">
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
              Week 1-5 - Cybersecurity Fundamentals
              </h2>
              <p className="w-full">
              Introduction to Cybersecurity, Cyber Threat Landscape, Security Principles and Best Practices,
               Cryptography Fundamentals, Network Security Basics
              </p>
            </div>
            <div className="place-self-start ">
              <h2 className="text:base sm:text-xl font-semibold">
                Week 6-10 - Cybersecurity Technologies and Tools
              </h2>
              <p className="w-full">
              Firewalls and Intrusion Detection Systems (IDS), Secure Network Architecture, Identity and Access Management (IAM),
               Endpoint Security Solutions, Security Information and Event Management (SIEM)
              </p>
            </div>
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
              Week 11-15 - Cybersecurity Operations
              </h2>
              <p className="w-full">
              Incident Response and Management, Vulnerability Assessment and Penetration Testing (VAPT), Threat Intelligence and Analysis, 
              Cybersecurity Policies and Compliance, Disaster Recovery and Business Continuity Planning (BCP)
              </p>
            </div>
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
              Week 16-20 - Cybersecurity in Practice
              </h2>
              <p className="w-full">
              Secure Coding Practices, Web Application Security, Cloud Security, Mobile Security, IoT Security
              </p>
            </div>
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
              Week 21-25 - Emerging Trends 
              </h2>
              <p className="w-full">
              Blockchain Security, AI and Machine Learning in Cybersecurity, Quantum Computing and Cybersecurity, 
              IoT Security Challenges and Solutions, Ethical Hacking and Red Team Operations
              </p>
            </div>
            <div className="place-self-start">
              <h2 className="text:base sm:text-xl font-semibold">
              Week 26-28 - Career Development and Interview Preparation
              </h2>
              <p className="w-full">
              Resume Building and Portfolio Development, Job Search Strategies and Networking, 
              Mock Interviews and Technical Assessments, Soft Skills Training and Personality Development
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Instructors  */}
      <div className="w-full px-[10%] 2xl:px-[20%] ">
        <div className="shadow-lg shadow-light_grey w-full px-2 ">
          <h1 className="flex justify-center font-bold text-2xl border-b-2 ">
            Meet Your Instructors
          </h1>
          <div className="flex flex-col lg:flex-nowrap justify-between items-center flex-wrap mt-8 gap-8 ">

            <div className="flex flex-col md:flex-row bg-[#F0FBFC] h-full md:full xl:h-[22rem] items-center gap-8 bg-slate-200  p-7 rounded-lg">
          <img
            src={Team}
            alt=""
            className="h-[20rem] w-[30rem] md:w-[18rem] p-3 bg-white"
          />
          <div className="flex flex-col gap-5 md:gap-6 xl:gap-10">
            <h1 className="md:text-2xl text-2xl xl:text-3xl font-bold">
              {" "}
              Dr. K. Manojkumar S
            </h1>
            <span className="text-3xl font-bold  text-[gray]">Data Scientist</span>
            <p className="text-xl">
              Dr. K. Manojkumar S, Automation Anywhere Certified RPA (Automation Anywhere) Trainer, IABAC Certified Trainer for delivering Practitioner Courses, 
              registered NSDC Trainer, Experienced Assistant Professor with a demonstrated history of working in the education management industry. Skilled in Python (Programming Language),
               JFS, C++, Java, and Machine Learning.
            </p>
          </div>
          </div>

          <div className="flex flex-col md:flex-row  h-full md:h-full xl:h-[22rem] items-center gap-8 bg-slate-100  p-7 rounded-lg">
          <div className="flex flex-col gap-5 md:gap-6 xl:gap-10">
            <h1 className="md:text-2xl text-2xl xl:text-3xl font-bold">
              {" "}
              Banu S
            </h1>
            <span className="text-3xl font-bold  text-[gray]">CyberSecurity Expert and SME</span>
            <p className="text-xl">
            Banu s, As a cybersecurity professional with extensive experience in both industry and academia, 
              I bring a unique blend of practical expertise and teaching prowess. With a focus on securing digital landscapes, 
              I've honed my skills through hands-on work and by imparting knowledge in the classroom. 
              Committed to staying abreast of evolving threats and technologies, I thrive on cultivating a secure digital environment while empowering others through education and mentorship.
            </p>
          </div>
          <img
            src={Teams}
            alt=""
            className="h-[20rem] w-[300px] md:w-[18rem] p-3 bg-white"
          />
        </div>
          
          <div className="flex flex-col md:flex-row bg-[#F0FBFC] h-full  items-center gap-8 bg-slate-200  p-7 rounded-lg">
          <img
            src={Teamm}
            alt=""
            className="h-[20rem] w-[30rem] md:w-[18rem] p-3 bg-white"
          />
          <div className="flex flex-col gap-5 md:gap-6 xl:gap-10">
            <h1 className="md:text-2xl text-2xl xl:text-3xl font-bold">
              {" "}
              Swarnamanjari B
            </h1>
            <span className="text-3xl font-bold  text-[gray]">Data Scientist</span>
            <p className="text-xl">
            Swarnamanjari , Experienced data scientist with a master's degree in Data Science, blending technical expertise with a passion for education.
              Proven track record of leveraging advanced analytics to derive actionable insights. 
             Skilled communicator adept at translating complex concepts into understandable terms, fostering engaging learning experiences. 
             Dedicated to empowering others through teaching and mentorship in the dynamic field of data science.
            </p>
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

export default CyberSecurity;
