import { useContext } from "react";

import AppContext from "../store/app-context";

import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import WishlistCard from "../components/Wishlist.js/WishlistCard";

const ShoppingCart = () => {
  const appCtx = useContext(AppContext);

  const wishlistIsEmpty = appCtx.userData.wishlistItems.length === 0;

  return (
    <HeaderFooterLayout title="Aesthetica / Wishlist">
      <div className="flex justify-center mt-10 mb-6 sm:my-4">
        <p className="font-semibold text-5xl sm:text-4xl">WISHLIST</p>
      </div>
      {wishlistIsEmpty && (
        <div className="w-full h-[450px] flex justify-center">
          <p className="text-xl my-6">Wishlist is empty.</p>
        </div>
      )}
      {!wishlistIsEmpty && (
        <div className="flex flex-row justify-around sm:flex-col sm:justify-center">
          <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
            {appCtx.userData.wishlistItems.map((product) => (
              <WishlistCard product={product} key={product[0]} />
            ))}
          </div>
        </div>
      )}
    </HeaderFooterLayout>
  );
};

export default ShoppingCart;
