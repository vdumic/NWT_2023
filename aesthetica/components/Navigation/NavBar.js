import { useRouter } from "next/router";
import Link from "next/link";

import { navigationItems } from "../../constants/NavBar";

const NavBar = () => {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <nav className="inline-flex list-none font-medium sm:hidden">
      {navigationItems.map(({ label, path }) => (
        <Link href={path} key={label} passHref>
          <li
            key={label}
            className={`font-bold mx-1 text-lg px-5 py-2 rounded-md whitespace-nowrap hover:bg-bckgrnd-dark hover:bg-opacity-50 hover:text-black cursor-pointer ${
              currentPage === path ? "bg-bckgrnd-dark bg-opacity-60" : ""
            }`}
          >
            {label}
          </li>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
