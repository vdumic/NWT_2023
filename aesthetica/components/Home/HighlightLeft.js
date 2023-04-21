import Image from "next/image";
import Test from "../../public/assets/highlight1.jpg";
import Spacer from "../Spacer";
import MainButton from "../MainButton";

const HighlightLeft = () => {
  return (
    <>
      <div className="sm:hidden md:hidden">
        <Spacer />
        <div className="flex justify-between max-w-full">
          <div className="flex-col mx-24 mt-10 w-4/12">
            <p className="text-2xl font-thin">Aesthetica Store</p>
            <p className="text-4xl font-semibold leading-tight mt-5">
              Add lightweight warmth to any bed with our premium linens.
            </p>
            <MainButton title="Linens" link="/store/bedroom" />
          </div>
          <Image
            src={Test}
            height="400"
            width="540"
            alt="Main image"
            className="h-[380px] w-[578px]"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <Spacer />
        <div className="flex max-w-full">
          <div className="flex-col mx-8 my-8 w-full">
            <p className="text-2xl font-thin">Aesthetica Store</p>
            <p className="text-2xl font-semibold leading-tight my-5">
              Add lightweight warmth to any bed with our premium linens.
            </p>
            <Image src={Test} width="540" height="400" alt="Main image" />
            <div className="flex justify-center">
              <MainButton title="Linens" link="/store/bedroom" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightLeft;
