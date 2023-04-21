import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

const SmallButton = ({ link }) => {
  return (
    <Link href={link}>
      <button className="flex justify-center bg-blog hover:bg-bckgrnd text-black text-m font-medium py-3 px-3 border-2 border-black rounded-full shadow-sm">
        <SlArrowRight className="h-7 w-7 sm:inline cursor-pointer" />
      </button>
    </Link>
  );
};

export default SmallButton;
