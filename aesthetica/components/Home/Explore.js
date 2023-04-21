import { useState } from "react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

import ExploreSlider from "./ExploreSlider";
import ExploreButton from "./ExploreButton";

const Explore = ({ exploreRooms, exploreCategories }) => {
  const [roomsClicked, setRoomsClicked] = useState(true);
  const [categoriesClicked, setCategoriesClicked] = useState(false);
  const [offersClicked, setOffersClicked] = useState(false);

  const handleRoomsClick = (e) => {
    e.preventDefault();
    setRoomsClicked(!roomsClicked);
    setCategoriesClicked(false);
    setOffersClicked(false);
  };

  const handleCategoriesClick = (e) => {
    e.preventDefault();
    setCategoriesClicked(!categoriesClicked);
    setRoomsClicked(false);
    setOffersClicked(false);
  };

  const handleOfferssClick = (e) => {
    e.preventDefault();
    setOffersClicked(!offersClicked);
    setCategoriesClicked(false);
    setRoomsClicked(false);
  };

  return (
    <div className="max-w-full mx-24 mt-10 sm:mx-8">
      <p className="font-bold text-3xl sm:text-2xl">Explore:</p>
      <div className="flex justify-start">
        <ExploreButton
          title="Rooms"
          isClicked={roomsClicked}
          handleClick={handleRoomsClick}
        />
        <ExploreButton
          title="Categories"
          isClicked={categoriesClicked}
          handleClick={handleCategoriesClick}
        />
        <ExploreButton
          title="Offers"
          isClicked={offersClicked}
          handleClick={handleOfferssClick}
        />
      </div>
      <div className="lg:hidden">
        <ExploreSlider
          roomsClicked={roomsClicked}
          categoriesClicked={categoriesClicked}
          offersClicked={offersClicked}
          exploreRooms={exploreRooms.slice(0, 5)}
          exploreCategories={exploreCategories.slice(0, 5)}
        />
      </div>
      <div className="sm:hidden md:hidden">
        <ExploreSlider
          roomsClicked={roomsClicked}
          categoriesClicked={categoriesClicked}
          offersClicked={offersClicked}
          exploreRooms={exploreRooms.slice(0, 6)}
          exploreCategories={exploreCategories.slice(0, 7)}
        />
      </div>
      <div className="flex justify-center mb-10">
        <Link href="/store">
          <button className="flex justify-center text-black text-2xl font-normal py-2 px-8 sm:text-xl">
            {roomsClicked && <p>More rooms</p>}
            {categoriesClicked && <p>Visit store</p>}
            {offersClicked && <p>Visit store</p>}
            <SlArrowRight className="h-6 w-6 sm:inline cursor-pointer pt-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
