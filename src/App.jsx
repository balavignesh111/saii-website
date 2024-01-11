import Navbar from "./components/home-page/navbar";
import Slider from "./components/home-page/carousel";
import Instructor from "./components/home-page/instructors";
import Testiomonial from "./components/home-page/testimonal";

const App=()=>{
  return(
    <div className="font-family: 'Heebo', sans-serif">
      <Navbar/>
      <Slider/>
      <Instructor/>
      <Testiomonial/>
  </div>)
}

export default App;