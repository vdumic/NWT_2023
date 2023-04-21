import { AiOutlineSearch } from "react-icons/ai";

const StoreSearch = () => {
  return (
    <div className="flex items-center max-w-xl lg:my-4 mx-auto bg-white sm:my-5 my-16 sm:mx-8">
      <input
        type="search"
        id="support-search"
        className="block w-full p-4 pl-10 text-m placeholder-gray-900 border-white"
        placeholder="Search products..."
        required
      />
      <button
        type="submit"
        className="bg-white right-2.5 bottom-2.5 text-black  px-4 py-2"
      >
        <AiOutlineSearch className="h-7 w-7 sm:inline cursor-pointer" />
      </button>
    </div>
  );
};

export default StoreSearch;
