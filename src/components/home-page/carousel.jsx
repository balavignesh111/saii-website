import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carous from "../../../public/img/carousel-1.jpg";
import Carouse from "../../../public/img/carousel-2.jpg";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="">
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2500}
        autoPlay={true}
      >
        <div className="relative">
          <div className="relative">
            <img
              src={Carous}
              alt=""
              className="w-full h-auto lg:h-[830px] md:h-[630px] sm:h-[430px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-imageOverlay"></div>
          </div>
          <div className="absolute top-[5%] px-[7%] left-4 md:left-20 sm:left-4 w-11/12 md:w-2/3 sm:w-full h-auto flex flex-col justify-center bg-[rgba(24, 29, 56, .7)]">
            <div className="container">
              <div
                className="flex flex-col lg:w-[40rem] lg:ml-[5rem] lg:mt-[10rem] md:flex-row md:mt-[4rem] 
              md:ml-0  text-_light_blue"
              >
                <div className="flex flex-col gap-4">
                  <h5 className="uppercase text-sm md:text-xl font-bold mb-3 text-[#1DC1D1]">
                    Explore, Learn, Excel.
                  </h5>
                  <h1 className="text-md md:text-6xl font-extrabold ">
                    Your Passport to Knowledge
                  </h1>
                  <p className="text-xs md:text-lg mb-4 pb-2 ">
                    In a rapidly evolving world, learning is the key to
                    unlocking new horizons and realizing your full potential.
                    With our innovative platform, we offer you a personalized
                    passport to explore the vast landscape of knowledge, at your
                    own pace and on your terms.
                  </p>
                  <div className="flex gap-4">
                    <button className="h-1.5rem md:h-[3.5rem] md:w-[9rem] bg-[#1DC1D1]">
                      Read More
                    </button>
                    <button className="h-1.5rem md:h-[3.5rem] md:w-[9rem] bg-[#fff] text-light_grey">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative">
            <img
              src={Carouse}
              alt=""
              className="w-full h-auto lg:h-[830px] md:h-[630px] sm:h-[430px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-imageOverlay"></div>
          </div>
          <div className="absolute top-[5%] px-[7%] left-4 md:left-20 sm:left-4 w-11/12 md:w-2/3 sm:w-full h-auto flex flex-col justify-center bg-[rgba(24, 29, 56, .7)]">
            <div className="container">
              <div className="flex flex-col  lg:w-[40rem] lg:ml-[5rem] lg:mt-[10rem] md:flex-row md:mt-[4rem] sm:mt-5 md:ml-0 sm:ml-3 text-_light_blue">
                <div className="flex flex-col gap-4">
                  <h5 className="uppercase text-sm md:text-xl font-bold mb-3 text-[#1DC1D1]">
                    Best Online Courses
                  </h5>
                  <h1 className="text-md md:text-6xl font-extrabold">
                    Learning Made Personal, Results Made Remarkable.
                  </h1>
                  <p className="text-sm md:text-lg mb-4 pb-2">
                    Together, we'll explore, learn, and grow, all while
                    redefining the way education is experienced.
                  </p>
                  <div className="flex gap-4">
                    <button className="h-1.5rem md:h-[3.5rem] md:w-[9rem] bg-[#1DC1D1]">
                      Read More
                    </button>
                    <button className="h-1.5rem md:h-[3.5rem] md:w-[9rem] bg-[#fff] text-light_grey">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
