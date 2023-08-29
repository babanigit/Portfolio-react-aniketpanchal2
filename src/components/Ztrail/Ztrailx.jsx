import React from "react";

const Ztrailx = () => {
  return (
    <div className="h-screen w-full bg-orange-400 flex items-center">
      <div className="w-full items-center">
        <div className="h-96 w-full bg-yellow-400  grid grid-cols-2 gap-8">
          <div className=" w-10/12 h-24 bg-slate-400  flex justify-evenly items-center">
            <div> hello </div>
            <button class="dark:md:hover:bg-fuchsia-600 w-36 ...">
              Save changes
            </button>
            <button class="bg-violet-700 hover:bg-violet-500 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl w-36 ...">
              Save changes
            </button>
          </div>

          <div className=" w-9/12 h-24 bg-slate-400  flex justify-evenly items-center">
            <div> hello </div>
            <button class="dark:md:hover:bg-fuchsia-600 w-36 ...">
              Save changes
            </button>
            <button class="bg-violet-700 hover:bg-violet-500 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl w-36 ...">
              Save changes
            </button>
          </div>
        </div>

        <div className="h-96 bg-red-500 flex justify-evenly items-center  ">
          hello
        </div>
      </div>
    </div>
  );
};

export default Ztrailx;
