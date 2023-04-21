import { useContext, useState } from "react";
import Image from "next/image";

import AppContext from "../../store/app-context";

const WishlistItem = ({ product }) => {
  const appCtx = useContext(AppContext);

  const [number, setNumber] = useState(1);

  const updateQuantity = (value) => {
    setNumber((prevState) => prevState + value);
  };

  const handleRemoveFromWishlist = (e) => {
    e.preventDefault();
    appCtx.handleRemoveFromWishlist(product[0], product[2], product[3]);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    appCtx.handleAddToCart(
      product[0],
      product[1],
      product[2],
      number,
      product[4]
    );
  };

  return (
    <div className="flex lg:flex-row flex-col sm:justify-center md:justify-center">
      <Image
        src={product[4]}
        alt={product[1]}
        width="300"
        height="200"
        style={{ objectFit: "cover" }}
        className="w-[300px] h-[296px]"
      />
      <div className="ml-10 mt-6">
        <p className="text-2xl font-semibold mb-3">{product[1]}</p>
        <p className="text-xl mb-3">Price: €{product[2]}</p>
        <p className="text-xl mb-3">Quantity:</p>
        <div className="h-[40px] w-[188px]">
          <div className="flex flex-row h-[40px] w-[188px] rounded-full relative bg-gray-300 py-2">
            <button
              onClick={() => updateQuantity(-1)}
              className="bg-gray-300 text-gray-600 hover:bg-gray-400 h-full w-full rounded-full cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <span className="flex items-center outline-none  ml-9 text-center w-full bg-gray-300 font-semibold text-md text-black focus:text-black">
              {number}
            </span>
            <button
              onClick={() => updateQuantity(+1)}
              className="bg-gray-300 text-gray-600 hover:bg-gray-400 h-full w-full rounded-full cursor-pointer"
            >
              <span className="flex justify-center text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="flex justify-start lg:flex-row flex-col">
          <button
            className="flex justify-center bg-bckgrnd hover:bg-bckgrnd-dark hover:border-[#3e3e42] text-[#252526] font-medium mt-8 py-2 lg:px-10 border-2 border-[#252526] rounded-full shadow-xl lg:mr-4 mr-8"
            onClick={handleRemoveFromWishlist}
          >
            Remove
          </button>
          <button
            className="flex justify-center bg-bckgrnd hover:bg-bckgrnd-dark hover:border-[#3e3e42] text-[#252526] font-medium mt-8 py-2 lg:px-10 border-2 border-[#252526] rounded-full shadow-xl sm:mr-8 md:mr-8"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
