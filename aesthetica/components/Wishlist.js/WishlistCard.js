import WishlistItem from "./WishlistItem";

const WishlistCard = ({ product }) => {
  return (
    <div className="border-2 border-bckgrnd-dark w-[1000px] md:w-[300px] md:h-[650px] sm:h-[650px] sm:w-[300px] lg:mx-16 my-6">
      <WishlistItem product={product} />
    </div>
  );
};

export default WishlistCard;
