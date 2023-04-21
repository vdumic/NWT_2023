import { useContext } from "react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

import AppContext from "../store/app-context";

import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import LoginForm from "../components/LogIn/LoginForm";

const LogIn = () => {
  const appCtx = useContext(AppContext);

  const handleLogin = () => {
    appCtx.handleLogin();
  };

  return (
    <HeaderFooterLayout title="Aesthetica / LogIn">
      <div className="flex justify-center mt-16 h-full">
        <p className="font-medium text-2xl">Log back into your account.</p>
      </div>
      <div className="w-full flex flex-col items-center justify-start my-10 mb-28">
        <LoginForm handleLogin={handleLogin} />
        <Link href="/signup">
          <button className="flex justify-center bg-bckgrnd-dark hover:bg-bckgrnd hover:border-bckgrnd text-[#252526] text-m font-medium mt-12 py-2 pl-5 pr-3.5 border-2 border-bckgrnd-dark rounded-full shadow-xl">
            {`Don't have an accout? Signup`}
            <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-1" />
          </button>
        </Link>
      </div>
    </HeaderFooterLayout>
  );
};

export default LogIn;
