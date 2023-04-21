import { AiOutlineSearch } from "react-icons/ai";

const SupportSearch = () => {
  return (
    <div className="flex items-center lg:max-w-xl md:mx-24 mx-auto bg-white lg:my-16 md:my-10 sm:my-8 sm:mx-8">
      <input
        type="search"
        id="support-search"
        className="block w-full p-4 pl-10 text-m placeholder-gray-900 border-white"
        placeholder="Search topics..."
        required
      />
      <button
        type="submit"
        className="bg-white right-2.5 bottom-2.5 text-black px-4 py-2"
      >
        <AiOutlineSearch className="h-7 w-7 sm:inline cursor-pointer" />
      </button>
    </div>
  );
};

export default SupportSearch;
