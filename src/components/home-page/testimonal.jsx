import Test from "../../../public/img/testimonial.jpg"
import Testi from "../../../public/img/testimonial-2.jpg"
import Testimo from "../../../public/img/testimonial-4.jpg"

const Testiomonial = () => {
    return (
        <div>
        <div className="text-center mt-6">
          <span className="mb-3 flex items-center justify-center text-lg font-semibold text-[#1DC1D1]">TESTIMONIAL</span>
          <h1 className="flex items-center justify-center text-3xl font-bold">Our Students Say!</h1>
        </div>
  
        <div className="max-w-full mx-auto mt-8 flex flex-col md:flex-row md:gap-8 justify-center px-8">
          <div className="mb-8 md:mb-0 md:w-[30rem]">
            <div className="bg-[#F0FBFC] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={Test} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Samantha</h3>
                  <p className="text-gray-500">Developer</p>
                </div>
              </div>
              <p className="text-gray-700">A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity.</p>
            </div>
          </div>
  
          <div className="mb-8 md:mb-0 md:w-[30rem]">
            <div className="bg-[#F0FBFC] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={Testi} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">John</h3>
                  <p className="text-gray-500">Fullstack Developer</p>
                </div>
              </div>
              <p className="text-gray-700">A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity.</p>
            </div>
          </div>
  
          <div className="md:w-[30rem]">
            <div className="bg-[#F0FBFC] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={Testimo} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Priyanka</h3>
                  <p className="text-gray-500">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-700">Data analysts research and use data to solve problems, optimize profit, minimize turnover, or streamline logistics, and to help companies make better business decisions. They assess a company’s complex information including sales numbers, market research, or behavior.</p>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Testiomonial;