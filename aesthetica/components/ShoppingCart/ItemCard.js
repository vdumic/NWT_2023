import CartItem from "./CartItem";

const ItemCard = ({ product }) => {
  return (
    <div className="border-2 border-bckgrnd-dark w-[1000px] md:w-[300px] md:h-[550px] sm:h-[550px] sm:w-[300px] lg:mx-16 my-6">
      <CartItem product={product} />
    </div>
  );
};

export default ItemCard;
