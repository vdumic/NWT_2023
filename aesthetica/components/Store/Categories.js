import ExploreSlider from "../Home/ExploreSlider";

const Categories = ({ exploreRooms, exploreCategories }) => {
  return (
    <div className="max-w-full mx-28 my-10 sm:mx-8">
      <p className="font-bold text-3xl sm:text-2xl">Choose room:</p>
      <div className="flex justify-center mt-10 sm:hidden md:hidden">
        <ExploreSlider roomsClicked={true} exploreRooms={exploreRooms} />
      </div>
      <div className="flex justify-center mt-10 lg:hidden">
        <ExploreSlider
          roomsClicked={true}
          exploreRooms={exploreRooms.slice(2, 7)}
        />
      </div>
      <p className="font-bold text-3xl sm:text-2xl">Choose category:</p>
      <div className="flex justify-center mt-10 sm:hidden md:hidden">
        <ExploreSlider
          categoriesClicked={true}
          exploreCategories={exploreCategories.slice(4, 18)}
        />
      </div>
      <div className="flex justify-center mt-10 lg:hidden">
        <ExploreSlider
          categoriesClicked={true}
          exploreCategories={exploreCategories.slice(8, 13)}
        />
      </div>
    </div>
  );
};

export default Categories;
