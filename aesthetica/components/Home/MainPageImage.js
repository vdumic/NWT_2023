import Image from "next/image";
import Spacer from "../Spacer";
import MainImage from "../../public/home/main_image.png";

const MainPageImage = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center ml-24 mr-16 mt-6 mb-10 sm:mx-8">
        <div className="grid sm:order-2">
          <h1 className="text-8xl sm:hidden font-semibold">home of the</h1>
          <h1 className="text-8xl sm:hidden font-semibold">furniture.</h1>
          <h1 className="md:hidden lg:hidden font-semibold text-[56px] text-center leading-none pt-5">
            home of the furniture.
          </h1>
        </div>
        <div className="grid sm:order-1">
          <Image src={MainImage} width="540" height="400" alt="Main image" />
        </div>
      </div>
      <Spacer />
    </div>
  );
};

export default MainPageImage;
