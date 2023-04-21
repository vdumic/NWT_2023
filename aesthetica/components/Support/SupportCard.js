import Image from "next/image";
import Link from "next/link.js";
import SupportButton from "./SupportButton.js";

const SupportCard = ({ image, title, label }) => {
  return (
    <>
      <div className="lg:w-1/4 md:w-2/4 bg-white mx-8 sm:hidden">
        <div className="h-28">
          <Image
            src={image.url}
            height="100"
            width="100"
            alt={title}
            className="m-6"
          />
        </div>
        <p className="font-bold text-4xl m-6">{label}</p>
        <SupportButton title={title} link="/under_construction" />
      </div>
      <div className="h-full bg-white mb-4 mx-8 lg:hidden md:hidden">
        <Image
          src={image.url}
          height="100"
          width="100"
          alt={title}
          className="m-6"
        />
        <Link href="/under_construction">
          <p className="font-bold text-3xl mx-6">{label}</p>
        </Link>
        <SupportButton title={title} link="/under_construction" />
      </div>
    </>
  );
};

export default SupportCard;
