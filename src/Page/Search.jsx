import React, { useState } from "react";
import { useDataContext } from "../Context";

function Search() {
  const { search, setSearch } = useDataContext();
  return (
    <React.Fragment>
      <div
        className={`fixed z-80  bg-white top-0 left-0 w-screen h-[5rem] transform transition-all duration-500 ease-in-out ${
          search ? "translate-y-0" : "-translate-y-20 -z-80"
        }`}
      >
        <form className="flex flex-col justify-center items-center h-full relative">
          <div className="flex justify-between items-center">
            <input
              type="search"
              name="search"
              id="search"
              className="search absolute left-[15%] md:w-[65%] h-12 text-[15px] outline-0 border-0 pl-2"
              placeholder="What's your...."
            />
            <button
              className="cursor-pointer absolute right-[15%] px-4 py-1 rounded text-black hover:bg-gray-100"
              /*onClick={(e) => {
                e.preventDefault();
                if (valueSearch === "") return;
                setShowData(currentData);
                navigator("/shop");
                setSearch(false);
                setValueSearch("");
                /*<div
          className="abolute top-8 right-0 w-8 h-8 cursor-pointer transform -translate-y-1/2 group"
        >
          <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform rotate-45 group-hover:rotate-0"></div>
          <div className="absolute top-1/2 w-full h-[2px] bg-black origin-center transition-all duration-200 ease-in-out transform -rotate-45 group-hover:rotate-0"></div>
        </div>
              }}*/
            >
              search
            </button>
          </div>
          <div className="border w-[70%] mt-5"></div>
        </form>
      </div>
      <div
        className={`bg-black opacity-10 fixed inset-0 ${
          search ? "block z-70" : "-z-70 hidden"
        }`}
        onClick={() => setSearch(false)}
      ></div>
    </React.Fragment>
  );
}

export default Search;
