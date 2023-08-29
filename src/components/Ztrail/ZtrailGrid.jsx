import React from "react";

const ZtrailGrid = () => {
  return (
    <>
      {/* main */}
      <div className=" grid grid-cols-3 bg-red-500">
        {/* one */}
        <div className=" grid grid-cols-3 gap-5 bg-lime-400 p-5 ">
          <div className="   flex items-center justify-center bg-white ">
            hello
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="   flex items-center justify-center bg-white ">
              hello
            </div>
            <div className="   flex items-center justify-center bg-white ">
              hello
            </div>
          </div>

          <div className="   row-span-2 flex items-center justify-center bg-white ">
            hello
          </div>
          <div className="   flex items-center justify-center bg-white ">
            hello
          </div>
          <div className="   flex items-center justify-center bg-white ">
            hello
          </div>
        </div>

        {/* two */}
        <div className=" col-span-2 flex h-screen w-full items-center justify-center bg-slate-400">
          <div className="  grid h-screen w-full   gap-5 bg-slate-900 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            <div className=" flex h-full w-full items-center justify-center bg-white text-center text-5xl">
              hello
            </div>
            <div className=" flex h-full w-full items-center justify-center bg-white text-center text-5xl">
              hello
            </div>
            <div className=" col-span-2 flex h-full w-full items-center justify-center bg-white text-center text-5xl">
              hello
            </div>
            <div className=" flex h-full w-full items-center justify-center bg-white text-center text-5xl">
              hello
            </div>
            <div className=" col-span-3 flex h-full w-full items-center justify-center bg-white text-center text-5xl">
              hello
            </div>
            <div className=" col-span-3 flex h-full w-full items-center justify-center bg-white text-center  text-5xl">
              hello
            </div>
            <div className=" flex h-full w-full items-center justify-center bg-white text-center text-5xl ">
              hello
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZtrailGrid;
