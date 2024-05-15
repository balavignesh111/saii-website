import Logos from "../../public/img/Logo-two.png";
import Lo from "../../public/img/Logo-three.png";
import Log from "../../public/img/Logo-four.png";

const LogoCard = () => {
  return (
    <div className="bg-white w-full p-4 sm:p-6 rounded-lg shadow-lg my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 gap-4 items-center justify-items-center w-full">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="text-2xl text-center sm:text-4xl font-bold mb-2 sm:mb-4">Our</h2>
          <h2 className="text-2xl sm:text-4xl font-bold">Partners</h2>
        </div>
        <img src={Logos} alt="Logo 1" className="h-[6rem] sm:h-[8rem] lg:h-[10rem] w-auto" />
        <img src={Lo} alt="Logo 2" className="h-[8rem] sm:h-[10rem] lg:h-[12rem] w-auto" />
        <img src={Log} alt="Logo 3" className="h-[6rem] sm:h-[8rem]  lg:h-[10rem] w-auto " />
      </div>
    </div>
  );
};

export default LogoCard;
