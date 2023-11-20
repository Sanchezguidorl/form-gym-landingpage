import React from "react";

function Offerts() {
  return (
    <section id="Offerts" className="mt-32 mb-16 relative ">
      <h2 className="text-primary-color text-4xl  sm:text-5xl font-bold text-center mb-16">
        Our Classes
      </h2>
      <ul>
        <li className="text-primary-color text-3xl font-bold h-28 border flex items-center justify-between px-2 sm:px-16">
          <p className="">Base hit</p>
          <div className="flex justify-between w-5/12 items-center text-sm">
            <p className="text-gray-500 text-base">1hr</p>
            <a href="#">
              <button className="btn-primary brightness-75 hover:brightness-125 text-white">
                Buy plan
              </button>
            </a>
          </div>
        </li>
        <li className="text-primary-color text-3xl font-bold h-28 border flex items-center justify-between px-2 sm:px-16">
          <p className="">Base Strength</p>
          <div className="flex justify-between w-5/12 items-center text-sm">
            <p className="text-gray-500 text-base">1hr</p>
            <a href="#">
              <button className="btn-primary brightness-75 hover:brightness-125 text-white">
                Buy plan
              </button>
            </a>
          </div>
        </li>
        <li className="text-primary-color text-3xl font-bold h-28 border flex items-center justify-between px-2 sm:px-16">
          <p className="">Base Endurance</p>
          <div className="flex justify-between w-6/12 sm:w-5/12 items-center text-sm">
            <p className="text-gray-500 text-base">1hr</p>
            <a href="#">
              <button className="btn-primary brightness-75 hover:brightness-125 text-white">
                Buy plan
              </button>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Offerts;
