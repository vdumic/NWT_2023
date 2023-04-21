import { useReducer } from "react";
import AppContext from "./app-context";

const defaultAppState = {
  userState: {
    totalPrice: 0,
    cartItems: [],
    wishlistItems: [],
    isLoggedIn: false,
  },
};

const appReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      userState: {
        itemsNumber: state.userState.itemsNumber,
        cartItems: state.userState.cartItems,
        wishlistItems: state.userState.wishlistItems,
        isLoggedIn: true,
      },
    };
  }

  if (action.type === "LOGOUT") {
    return {
      userState: {
        itemsNumber: state.userState.itemsNumber,
        cartItems: state.userState.cartItems,
        wishlistItems: state.userState.wishlistItems,
        isLoggedIn: false,
      },
    };
  }

  if (action.type === "ADD TO CART") {
    const price = action.value.price * action.value.quantity;
    const totalPrice = state.userState.totalPrice + price;

    if (
      state.userState.cartItems.find(
        (product) => product[0] === action.value.slug
      )
    ) {
      return {
        userState: {
          itemsNumber: state.userState.itemsNumber,
          cartItems: state.userState.cartItems,
          wishlistItems: state.userState.wishlistItems,
          isLoggedIn: state.userState.isLoggedIn,
        },
      };
    } else if (state.userState.cartItems.length === 0) {
      return {
        userState: {
          totalPrice: totalPrice,
          cartItems: [
            [
              action.value.slug,
              action.value.title,
              action.value.price,
              action.value.quantity,
              action.value.image,
            ],
          ],
          wishlistItems: state.userState.wishlistItems,
          isLoggedIn: state.userState.isLoggedIn,
        },
      };
    } else
      return {
        userState: {
          totalPrice: totalPrice,
          cartItems: [
            ...state.userState.cartItems,
            [
              action.value.slug,
              action.value.title,
              action.value.price,
              action.value.quantity,
              action.value.image,
            ],
          ],
          wishlistItems: state.userState.wishlistItems,
          isLoggedIn: state.userState.isLoggedIn,
        },
      };
  }

  if (action.type === "REMOVE FROM CART") {
    const price = action.value.price * action.value.quantity;
    const totalPrice = state.userState.totalPrice - price;

    return {
      userState: {
        totalPrice: totalPrice,
        cartItems: state.userState.cartItems.filter(
          (product) => product[0] !== action.value.slug
        ),
        wishlistItems: state.userState.wishlistItems,
        isLoggedIn: state.userState.isLoggedIn,
      },
    };
  }

  if (action.type === "ADD TO WISHLIST") {
    if (
      state.userState.wishlistItems.find(
        (product) => product[0] === action.value.slug
      )
    ) {
      return {
        userState: {
          itemsNumber: state.userState.itemsNumber,
          cartItems: state.userState.cartItems,
          wishlistItems: state.userState.wishlistItems,
          isLoggedIn: state.userState.isLoggedIn,
        },
      };
    }
    if (state.userState.wishlistItems.length === 0) {
      return {
        userState: {
          totalPrice: state.userState.totalPrice,
          cartItems: state.userState.cartItems,
          wishlistItems: [
            [
              action.value.slug,
              action.value.title,
              action.value.price,
              action.value.quantity,
              action.value.image,
            ],
          ],
          isLoggedIn: state.userState.isLoggedIn,
        },
      };
    } else
      return {
        userState: {
          totalPrice: state.userState.totalPrice,
          cartItems: state.userState.cartItems,
          wishlistItems: [
            ...state.userState.wishlistItems,
            [
              action.value.slug,
              action.value.title,
              action.value.price,
              action.value.quantity,
              action.value.image,
            ],
          ],
          isLoggedIn: state.userState.isLoggedIn,
        },
      };
  }

  if (action.type === "REMOVE FROM WISHLIST") {
    return {
      userState: {
        totalPrice: state.userState.totalPrice,
        cartItems: state.userState.cartItems,
        wishlistItems: state.userState.wishlistItems.filter(
          (product) => product[0] !== action.value.slug
        ),
        isLoggedIn: state.userState.isLoggedIn,
      },
    };
  }

  if (action.type === "CHANGE QUANTITY") {
    const products = state.userState.cartItems.filter(
      (product) => product[0] !== action.value.slug
    );

    let price = 0;

    for (let i = 0; i < products.length; i++) {
      price = products[i][2] * products[i][3] + price;
    }

    const current = action.value.price * action.value.quantity;
    const totalPrice = current + price;

    return {
      userState: {
        totalPrice: totalPrice,
        cartItems: [
          [
            action.value.slug,
            action.value.title,
            action.value.price,
            action.value.quantity,
            action.value.image,
          ],
          ...products,
        ],
        wishlistItems: state.userState.wishlistItems,
        isLoggedIn: state.userState.isLoggedIn,
      },
    };
  }
};

const AppContextProvider = (props) => {
  const [appState, dispatchAction] = useReducer(appReducer, defaultAppState);

  const loginHandler = () => {
    dispatchAction({ type: "LOGIN" });
  };

  const logoutHandler = () => {
    dispatchAction({ type: "LOGOUT" });
  };

  const addToCartHandler = (slug, title, price, quantity, image) => {
    dispatchAction({
      type: "ADD TO CART",
      value: { slug, title, price, quantity, image },
    });
  };

  const removeFromCartHandler = (slug, price, quantity) => {
    dispatchAction({
      type: "REMOVE FROM CART",
      value: { slug, price, quantity },
    });
  };

  const addToWishlistHandler = (slug, title, price, quantity, image) => {
    dispatchAction({
      type: "ADD TO WISHLIST",
      value: { slug, title, price, quantity, image },
    });
  };

  const removeFromWishlistHandler = (slug, price, quantity) => {
    dispatchAction({
      type: "REMOVE FROM WISHLIST",
      value: { slug, price, quantity },
    });
  };

  const quantityChangeHandler = (slug, title, price, quantity, image) => {
    dispatchAction({
      type: "CHANGE QUANTITY",
      value: { slug, title, price, quantity, image },
    });
  };

  const appContext = {
    handleLogin: loginHandler,
    handleLogout: logoutHandler,
    handleAddToCart: addToCartHandler,
    handleRemoveFromCart: removeFromCartHandler,
    handleAddToWishlist: addToWishlistHandler,
    handleRemoveFromWishlist: removeFromWishlistHandler,
    handleQuantityChange: quantityChangeHandler,
    userData: appState.userState,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
