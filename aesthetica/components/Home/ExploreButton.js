const ExploreButton = ({ title, isClicked, handleClick }) => {
  return (
    <div className="my-5 mr-5">
      {isClicked && (
        <button
          onClick={handleClick}
          className="flex justify-center bg-black text-white text-m font-medium py-2 px-8 border-2 border-black rounded-full shadow-xl sm:px-4"
        >
          <p>{title}</p>
        </button>
      )}
      {!isClicked && (
        <button
          onClick={handleClick}
          className="flex justify-center bg-bckgrnd-light hover:bg-bckgrnd text-black text-m font-medium py-2 px-8 border-2 border-black rounded-full shadow-xl sm:px-4"
        >
          <p>{title}</p>
        </button>
      )}
    </div>
  );
};

export default ExploreButton;
