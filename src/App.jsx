import Card from "./components/home-page/card.component";
import About from "./components/home-page/about-us.component";
import Course from "./components/home-page/category.component";
import Slider from "./components/home-page/carousel";
import Instructor from "./components/home-page/instructors";
import Testimonial from "./components/home-page/testimonal";
import LogoCard from "./components/logo";

const App = () => {
  return (
    <div className="w-[100%]">
      <div className="w-full ">
        <Slider />
      </div>
      <div className="w-full flex justify-center items-stretch px-[10%]">
        <LogoCard/>
      </div>
      <div className="w-full flex justify-center items-stretch px-[10%]">
        <Card />
      </div>
      <div className="w-full flex justify-center items-stretch px-[10%]">
        <About />
      </div>
      <div className="w-full flex justify-center items-stretch px-[10%]">
        <Course />
      </div>
      <div className="w-full flex justify-center items-stretch ">
        <Instructor />
      </div>
      <div className="w-full flex justify-center items-stretch ">
        <Testimonial />
      </div>
    </div>
  );
};

export default App;
