import React from "react";

import { techs } from "../data";

const Experience = () => {
  return (
    <div name="experience" className=" h-screen w-full bg-violet-200">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 text-white">
        <div>
          <p className="inline border-b-4 border-gray-500 p-2 text-4xl font-bold">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 py-8 px-12 text-center sm:grid-cols-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`rounded-lg py-2 shadow-md duration-500 hover:scale-105 ${style}`}
            >
              <img src={src} alt="" className="mx-auto w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
