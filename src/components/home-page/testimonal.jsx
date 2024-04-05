import Test from "../../../public/img/student-1.jpg";
import Testi from "../../../public/img/student-2.jpg";
import Testimo from "../../../public/img/student-3.jpg";
import student from "../../../public/img/student-4.jpg";
import students from "../../../public/img/student-5.jpg";
import studentss from "../../../public/img/student-6.jpg";
import Carousel from "react-multi-carousel";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="w-[90%]">
      <div className="text-center mt-6">
        <span className="mb-3 flex items-center justify-center text-[1.5rem] font-semibold text-[#1DC1D1]">
          TESTIMONIAL
        </span>
        <h1 className="flex items-center justify-center text-3xl font-bold">
          Our Students Say!
        </h1>
      </div>

      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2500}
        autoPlay={true}
        arrows={false}
        pauseOnHover={false}
      >
        {/* <div className="max-w-full mt-8 flex flex-col lg:flex-row lg:gap-8 lg:justify-start"> */}
        <div className="mt-8 lg:mb-0  lg:max-w-[80%] lg:min-h-[20rem]">
          <div className="bg-[#F0FBFC] h-[100%] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src={Test} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Ponmalai</h3>
                <p className="text-gray-500">Full Stack Developer</p>
                <p className="text-gray-500">Briston Innovation Labs</p>
              </div>
            </div>
            <p className="text-gray-700">
              The courses are not just about acquiring knowledge, they're about
              developing practical skills that are in high demand in today's job
              market. The instructors are incredibly knowledgeable and
              passionate about their subjects, and the curriculum is
              well-structured and up-to-date with industry trends.
            </p>
          </div>
        </div>

        <div className="mt-8 lg:mb-0 lg:max-w-[80%] lg:min-h-[20rem]">
          <div className="bg-[#F0FBFC] h-[100%] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={Testi}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Rajkumar M</h3>
                <p className="text-gray-500">Implementation Engineer</p>
                <p className="text-gray-500">
                  SAARC Masts Tech Private Limited
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              My experience at Suguna Artificial Institute has been nothing
              short of transformative. From the engaging lectures to the
              challenging assignments, every aspect of the courses pushed me to
              grow personally and professionally. I feel well-prepared to tackle
              the challenges of the tech industry.
            </p>
          </div>
        </div>

        <div className="mt-8 lg:max-w-[80%] lg:min-h-[20rem]">
          <div className="bg-[#F0FBFC] h-[100%] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={Testimo}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Laila Shree P</h3>
                <p className="text-gray-500">PHP Developer</p>
                <p className="text-gray-500">
                  SAARC Masts Tech Private Limited
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              I would highly recommend Suguna Artificial Institute to anyone
              looking to upskill or transition into a career in technology. The
              quality of education, the depth of knowledge, and the supportive
              learning environment make it a standout institution in the field
              of artificial intelligence and technology.
            </p>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="max-w-full mt-8 flex flex-col lg:flex-row lg:gap-8 lg:justify-start"> */}
        <div className="mt-8 lg:mb-0 lg:max-w-[80%] lg:min-h-[20rem]">
          <div className="bg-[#F0FBFC] h-[100%] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={student}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Jamuna Rani K</h3>
                <p className="text-gray-500">Data Analyst</p>
                <p className="text-gray-500">Brand4Brands</p>
              </div>
            </div>
            <p className="text-gray-700">
              The Data Science course illuminated a path of possibilities in the
              realm of data analytics. The blend of theoretical knowledge and
              hands-on projects empowered me to navigate through complex
              datasets with precision, transforming raw data into actionable
              insights,and the curriculum is well-structured and up-to-date with
              industry .
            </p>
          </div>
        </div>

        <div className="mt-8 lg:mb-0 lg:max-w-[80%] lg:min-h-[20rem]">
          <div className="bg-[#F0FBFC] h-[100%] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={students}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Kaviya Shree</h3>
                <p className="text-gray-500">Data Analyst</p>
                <p className="text-gray-500">Brand4Brands</p>
              </div>
            </div>
            <p className="text-gray-700">
              The Data Science course at Suguna Artificial Intelligence
              Institute opened doors to endless possibilities in the field of
              data analytics. The practical skills and industry-relevant
              curriculum prepared me to tackle real-world data challenges with
              confidence,thanks to the education I received here.
            </p>
          </div>
        </div>

        <div className="mt-8 lg:max-w-[80%] lg:min-h-[20rem]">
          <div className="bg-[#F0FBFC] h-[100%] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={studentss}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Janani Shree S D</h3>
                <p className="text-gray-500">Data Analyst</p>
                <p className="text-gray-500">Brand4Brands</p>
              </div>
            </div>
            <p className="text-gray-700">
              Enrolling in SAII's Data Science course was like embarking on a
              voyage into the heart of data-driven innovation. From machine
              learning to big data analytics, the course equipped me with the
              tools to navigate the complexities of data ecosystems, emerging as
              a trailblazer in the era of digital transformation.
            </p>
          </div>
        </div>

        {/* </div> */}
      </Carousel>
    </div>
  );
};

export default Testimonial;
