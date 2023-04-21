import { useContext } from "react";

import AppContext from "../store/app-context";

import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import ItemCard from "../components/ShoppingCart/ItemCard";
import TotalCard from "../components/ShoppingCart/TotalCard";

const ShoppingCart = () => {
  const appCtx = useContext(AppContext);

  const cartIsEmpty = appCtx.userData.cartItems.length === 0;

  return (
    <HeaderFooterLayout title="Aesthetica / Shopping cart">
      <div className="flex justify-center mt-10 mb-6 sm:my-4">
        <p className="font-semibold text-5xl sm:text-4xl">SHOPPING CART</p>
      </div>
      {cartIsEmpty && (
        <div className="w-full h-[450px] flex justify-center">
          <p className="text-xl my-6">Shopping cart is empty.</p>
        </div>
      )}
      {!cartIsEmpty && (
        <div className="flex flex-row justify-around sm:flex-col sm:justify-center">
          <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
            {appCtx.userData.cartItems.map((product) => (
              <ItemCard product={product} key={product[0]} />
            ))}
          </div>
          <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
            <TotalCard />
          </div>
        </div>
      )}
    </HeaderFooterLayout>
  );
};

export default ShoppingCart;
