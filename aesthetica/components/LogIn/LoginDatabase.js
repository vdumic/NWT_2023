import Link from "next/link";
import { useState, useContext } from "react";
import { SlArrowRight } from "react-icons/sl";

import AppContext from "../../store/app-context";

const LoginDatabase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const appCtx = useContext(AppContext);

  const loginValidation = async (uri) => {
    const resp = await fetch(`http://localhost:3000/api/users/${uri}`);

    let validation = await resp.json();
    validation = validation[0].pswmatch;

    validation.toString();

    appCtx.handleLogin(validation);
  };

  const handleLoginClick = (e) => {
    const uri = email + " " + password;
    loginValidation(uri);
  };

  return (
    <form className="flex flex-col w-full justify-center items-center h-full">
      <div className="flex flex-col items-start mb-6">
        <label className="font-medium text-black">Email:</label>
        <input
          type="email"
          name="email"
          className="border-2 py-2 px-24"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-start mb-2">
        <label className="font-medium text-black">Password:</label>
        <input
          name="password"
          className="border-2 py-2 px-24"
          type="password"
          placeholder="(minimum 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link href="/">
        <button
          className="flex justify-center bg-[#252526] hover:bg-[#3e3e42] hover:border-[#3e3e42] text-white text-m font-medium mt-10 py-2 pl-5 pr-3.5 border-2 border-[#252526] rounded-full shadow-xl"
          type="submit"
          onClick={handleLoginClick}
        >
          Login
          <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-1" />
        </button>
      </Link>
    </form>
  );
};

export default LoginDatabase;
