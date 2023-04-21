import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

const SupportButton = ({ title, link }) => {
  return (
    <div className="flex justify-center sm:m-7 m-12">
      <Link href={link}>
        <button className="flex justify-center bg-white hover:bg-gray-100 text-black text-m py-2 pl-5 pr-3.5 px-6 border-2 border-black rounded-full shadow-xl">
          <p>{title}</p>
          <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-1" />
        </button>
      </Link>
    </div>
  );
};

export default SupportButton;
