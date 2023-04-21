import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

const MainButton = ({ title, link }) => {
  return (
    <div className="mt-10">
      <Link href={link}>
        <button className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-m font-medium py-2 pl-5 pr-3.5 border-2 border-black rounded-full shadow-xl">
          <p>{title}</p>
          <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-1" />
        </button>
      </Link>
    </div>
  );
};

export default MainButton;
