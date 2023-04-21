import Link from "next/link";
import Image from "next/image";
import { Slide } from "pure-react-carousel";
import { SlArrowRight } from "react-icons/sl";

const ExploreItem = ({ label, image, path, room, category }) => {
  return (
    <Slide key={label} className="sm:hidden">
      {room && (
        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <Link href={`/store/${path}`}>
            <Image
              src={image.url}
              alt={label}
              style={{ objectFit: "cover" }}
              height="300"
              width="600"
              className="h-[150px] object-center shadow-lg"
            />
            <button className="flex justify-center text-black text-xl text-normal py-4">
              <p>{label}</p>
              <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-2" />
            </button>
          </Link>
        </div>
      )}
      {category && (
        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <Link href={`/store/category/${path}`}>
            <Image
              src={image.url}
              alt={label}
              style={{ objectFit: "cover" }}
              height="300"
              width="600"
              className="h-[150px] object-center shadow-lg"
            />
            <button className="flex justify-center text-black text-xl text-normal py-4">
              <p>{label}</p>
              <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-2" />
            </button>
          </Link>
        </div>
      )}
    </Slide>
  );
};

export default ExploreItem;
