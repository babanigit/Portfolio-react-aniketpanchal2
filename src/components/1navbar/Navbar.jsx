import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

// importing from data
import { links } from "../data";

const Navbar = () => {
  const [nav, setNav] = useState(false);

 

  return (
    <>
        <div className="flex justify-between items-center w-full h-20 p-10  text-white fixed ">
          <div>
            <h1 className="text-5xl font-signature ml-2">aniket</h1>
          </div>

          <ul className="hidden md:flex">
            {links.map(({ id, linkName }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
              >
                <Link to={linkName} smooth duration={500}>
                  {linkName}
                </Link>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {links.map(({ id, linkName }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={linkName}
                    smooth
                    duration={500}
                  >
                    {linkName}
                  </Link>  
                </li>
              ))}
            </ul>
          )}
        </div>
    </>
  );
};

export default Navbar;
