import Image from "next/image";

import Recommended1 from "../../public/assets/recommended1.jpg";
import Recommended2 from "../../public/assets/recommended2.jpg";
import Recommended3 from "../../public/assets/recommended3.jpg";
import Recommended4 from "../../public/assets/recommended4.jpg";

const MobileRecommended = () => {
  return (
    <div className="mx-8">
      <p className="max-w-full font-bold text-2xl my-10">
        Recommended products:
      </p>
      <div className="flex flex-col mb-6">
        <Image src={Recommended1} alt="highlight" className="w-full my-4" />
        <Image src={Recommended2} alt="highlight" className="w-full my-4" />
        <Image src={Recommended3} alt="highlight" className="w-full my-4" />
        <Image src={Recommended4} alt="highlight" className="w-ful my-4" />
      </div>
    </div>
  );
};

export default MobileRecommended;
