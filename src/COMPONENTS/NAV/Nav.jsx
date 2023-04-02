import React, { useEffect, useState } from "react";
import Link from "../LINK/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const linking = [
    {
      id: 1,
      name: "About",
      path: "/about",
    },
    {
      id: 2,
      name: "Home",
      path: "/home",
    },
    {
      id: 3,
      name: "Login",
      path: "/login",
    },
  ];
  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <div>
      <nav className="  bg-purple-600 ps-2 md:ps-0 ">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6  text-red-400" />
            ) : (
              <Bars3Icon className="h-6 w-6  " />
            )}
          </span>
        </div>

        <ul
          className={`md:flex bg-blue-200 duration-300 absolute md:static pb-2 ${
            open ? `top-10` : `-top-36`
          }`}
        >
          {linking.map((links) => (
            <Link key={links.id} links={links}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
