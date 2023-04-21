import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag, BiHeart } from "react-icons/bi";

import AppContext from "../store/app-context";
import NavBar from "./Navigation/NavBar";
import DropDownMenu from "./Navigation/DropDownMenu";
import HamburgerBar from "./Navigation/HamburgerBar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const appCtx = useContext(AppContext);

  const isLoggedIn = appCtx.userData.isLoggedIn;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  };

  return (
    <header
      className={`sticky z-50 top-0 flex items-center bg-bckgrnd-light ${
        isScrolled && "bg-bckgrnd bg-opacity-90 backdrop-blur-lg"
      }`}
    >
      <main className="max-w-full mx-auto flex-grow flex flex-col my-5">
        <div className="flex items-center justify-between mx-24 sm:mx-8">
          <Link href="/">
            <h1 className="font-bold text-3xl">Aesthetica</h1>
          </Link>
          <NavBar />
          <HamburgerBar />
          <div className="flex items-center space-x-4 text-sm font-light sm:hidden">
            <button>
              <AiOutlineUser
                className="h-6 w-6 sm:hidden cursor-pointer"
                onClick={handleButtonClick}
              />
              {isClicked && <DropDownMenu />}
            </button>
            {isLoggedIn && (
              <Link href="/wishlist">
                <BiHeart className="h-6 w-6 sm:hidden cursor-pointer" />
              </Link>
            )}
            <Link href="/shopping_cart">
              <BiShoppingBag className="h-6 w-6 sm:hidden cursor-pointer" />
            </Link>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
