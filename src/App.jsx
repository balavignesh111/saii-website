import Card from "./components/home-page/card.component";
import About from "./components/home-page/about-us.component";
import Course from "./components/home-page/category.component";
import Footer from "./components/home-page/footer.component";

const App=()=>{
  return(
    <div className="w-[100%]">
      <div className="w-full flex justify-center items-stretch p-8">
        <Card/>
      </div>
      <div className="w-full flex justify-center items-stretch p-8">
        <About/>
      </div>
      <div className="w-full flex justify-center items-stretch p-8">
        <Course/>
      </div>
      <div className="w-full flex justify-center items-stretch pt-8 px-8 pb-2 w-[100%] bg-[rgb(24,29,56)]"><Footer/></div> 
    </div>
  )
}

export default App;