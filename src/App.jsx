import Card from "./components/home-page/card.component";
import About from "./components/home-page/about-us.component";
import Course from "./components/home-page/category.component";
import Footer from "./components/home-page/footer.component";
import Navbar from "./components/home-page/navbar";
import Slider from "./components/home-page/carousel";
import Instructor from "./components/home-page/instructors";
import Testimonial from "./components/home-page/testimonal";

const App = () => {
  return (
    <div className="w-[100%]">
      <div className="w-full ">
        <Slider />
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
      <div className="w-full flex justify-center items-stretch  px-14 mt-6 bg-[rgb(24,29,56)]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
