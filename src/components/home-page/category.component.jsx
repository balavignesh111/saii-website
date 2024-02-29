import webDevelopment from "../../../public/img/cat-1.jpg";
import dataAnalyst from "../../../public/img/cat-2.jpg";
import cyberSecurity from "../../../public/img/cat-4.jpg";
import dataScience from "../../../public/img/cat-5.jpg";


const Course = () => {
  return ( 
  <div className = "w-[90%] mt-8">
    <h5 className="text-_blue text-center font-semibold tracking-wide font-card-header">COURSES</h5>
    <h2 className="font-card-header text-calc lg:text-[2.5rem] font-semibold font-card-header tracking-wide text-center">Placement Assured Courses</h2>
    <div className="w-[100%] h-auto flex flex-col gap-4 md:flex-row mt-[2rem]">
      <div className="w-[100%] md:w-[60%] flex flex-col gap-4">
        <div className="w-full relative overflow-hidden cursor-pointer">
          <img src={webDevelopment} alt="webDevelopmentImg" className="w-[100%] h-auto object-contain hover:scale-[1.1] transition-scale duration-[500ms]" />
          <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.2rem] right-0">Web Development</span>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 items-stretch">
          <div className="w-[100%] md:w-[50%] relative flex items-stretch overflow-hidden cursor-pointer">
            <img src={dataScience} alt="dataScience" className = "w-[100%] h-auto object-contain hover:scale-[1.1] transition-scale duration-[500ms]"/>
            <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.25rem] right-0">Data Science</span>
          </div>
          <div className="w-[100%] md:w-[50%] relative overflow-hidden cursor-pointer">
            <img src={dataAnalyst} alt="dataAnalyst" className = "w-[100%] h-100 object-contain hover:scale-[1.1] transition-scale duration-[500ms]"/>
            <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.2rem] right-0">Data Analyst</span>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[40%] flex items-stretch relative overflow-hidden cursor-pointer">
        <img src={cyberSecurity} alt="cyberSecurity" className="w-[100%] h-auto object-cover hover:scale-[1.1] transition-scale duration-[500ms]" />
        <span className="p-[0.75rem] bg-[#fff] text-black font-semibold absolute bottom-[0.2rem] right-0">Cyber Security</span>
      </div>
    </div>
  </div> );
}

export default Course;