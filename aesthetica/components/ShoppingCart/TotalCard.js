import { useContext } from "react";
import Link from "next/link";

import AppContext from "../../store/app-context";

const TotalCard = () => {
  const appCtx = useContext(AppContext);

  return (
    <div className="w-[300px] h-[350px] border-4 border-bckgrnd-dark my-6 mx-10">
      <div className="flex justify-center border-b-2 border-bckgrnd-dark">
        <p className="my-4 font-medium text-xl">Order summary</p>
      </div>
      <div className="flex flex-col justify-start m-6 border-b-2 border-bckgrnd-dark">
        <p className="text-lg">Total price: €{appCtx.userData.totalPrice}</p>
        <p className="text-lg my-4">Total delivery: €20</p>
      </div>
      <div className="flex justify-center">
        <p className="my-4 text-2xl font-semibold">
          TOTAL: €{appCtx.userData.totalPrice + 20}
        </p>
      </div>
      <div className="flex justify-center">
        <Link href="/under_construction">
          <button className="flex justify-center bg-bckgrnd hover:bg-bckgrnd-dark hover:border-[#3e3e42] text-[#252526] font-medium mt-2 py-2 px-10 border-2 border-[#252526] rounded-full shadow-xl">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TotalCard;
