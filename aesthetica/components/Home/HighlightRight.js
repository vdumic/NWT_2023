import Image from "next/image";
import Test from "../../public/assets/highlight2.jpg";
import Spacer from "../Spacer";
import MainButton from "../MainButton";

const HighlightRight = () => {
  return (
    <>
      <div className="sm:hidden md:hidden">
        <Spacer />
        <div className="flex justify-between">
          <Image
            src={Test}
            width="540"
            height="400"
            alt="Main image"
            className="h-[380px] w-[582px]"
          />
          <div className="flex-col mr-24 mt-10 w-4/12">
            <p className="text-2xl font-thin">Aesthetica Store</p>
            <p className="text-4xl font-semibold leading-tight my-5">
              Bathroom essentials for the best start and end of your day.
            </p>
            <MainButton title="Bathroom" link="/store/bathroom" />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <Spacer />
        <div className="flex max-w-full">
          <div className="flex-col mx-8 my-8 w-full">
            <p className="text-2xl font-thin">Aesthetica Store</p>
            <p className="text-2xl font-semibold leading-tight my-5">
              Bathroom essentials for the best start and end of your day.
            </p>
            <Image src={Test} width="540" height="400" alt="Main image" />
            <div className="flex justify-center">
              <MainButton title="Bathroom" link="/store/bathroom" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightRight;
