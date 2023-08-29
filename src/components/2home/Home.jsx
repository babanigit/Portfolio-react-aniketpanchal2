import React from "react";
import HeroImage from "./me3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full bg-violet-200  text-white py-16 px-5 md:h-screen">

      <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-evenly md:flex-row">

        {/* div 1 */}
        <div className="flex h-full flex-col justify-center">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I'm a Developer and Digital Artist
          </h2>
          <p className="max-w-md py-4 text-gray-500">
            I have 8 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* div 2 */}
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="w-30% mx-auto rounded-2xl md:w-full"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
