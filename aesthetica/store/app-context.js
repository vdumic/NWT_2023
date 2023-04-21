import React from "react";

const AppContext = React.createContext({
  handleLogin: () => {},
  handleLogout: () => {},
  handleAddToCart: (slug, title, price, quantity, image) => {},
  handleRemoveFromCart: (slug, price, quantity) => {},
  handleAddToWishlist: (slug, title, price, quantity, image) => {},
  handleRemoveFromWishlist: (slug, price, quantity) => {},
  handleQuantityChange: (slug, title, price, quantity, image) => {},
  userState: {
    totalPrice: 0,
    cartItems: [],
    wishlistItems: [],
    isLoggedIn: false,
  },
});

export default AppContext;
