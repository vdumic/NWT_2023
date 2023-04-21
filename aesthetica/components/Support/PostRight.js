import Image from "next/image";
import SupportImage from "../../public/assets/support2.png";
import Spacer from "../Spacer";
import MainButton from "../MainButton";

const PostRight = () => {
  return (
    <>
      <div className="sm:hidden md:hidden">
        <Spacer />
        <div className="flex justify-between max-w-full">
          <Image src={SupportImage} width="700" style={{ objectFit: 'cover' }} height="400" alt="Main image" className="h-[370px] w-[650px]" />
          <div className="flex-col mx-24 my-8 w-2/6">
            <p className="text-2xl ml-1 font-thin">Support</p>
            <p className="text-4xl font-semibold leading-tight mt-5">
              Our specialists are ready to help you with advice, online or
              in-store.
            </p>
            <MainButton title="Learn more" link="under_construction" />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Spacer />
        <div className="flex max-w-full">
          <div className="flex-col mx-8 my-8 w-full">
            <p className="text-2xl font-thin">Support</p>
            <p className="text-2xl font-semibold leading-tight my-5">
              Our specialists are ready to help you with advice, online or
              in-store.
            </p>
            <Image src={SupportImage} width="540" height="400" alt="Main image" />
            <div className="flex justify-center">
              <MainButton title="Learn more" link="under_construction" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostRight;
