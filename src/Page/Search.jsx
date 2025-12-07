import React, { useEffect, useRef, useState } from "react";
import { useDataContext } from "../Context";
import { useNavigate } from "react-router-dom";

function Search() {
  const { setSearch, search, handleSubmit, valueSearch, setValueSearch } =
    useDataContext();
  const navigator = useNavigate();
  function handleSearch(e) {
    handleSubmit(e);
    navigator("/search");
  }
  const refSearch = useRef(null);

  useEffect(() => {
    if (search && refSearch.current) {
      refSearch.current.focus();
    }
  }, [search]);
  return (
    <React.Fragment>
      <div
        className={`fixed z-80  bg-white top-0 left-0 w-screen h-[5rem] transform transition-all duration-500 ease-in-out ${
          search ? "translate-y-0" : "-translate-y-20 -z-80"
        }`}
      >
        <form
          onSubmit={handleSearch}
          className="flex flex-col justify-center items-center h-full relative"
        >
          <div className="flex justify-between items-center">
            <input
              ref={refSearch}
              type="search"
              name="search"
              id="search"
              className="search absolute left-[15%] md:w-[65%] h-12 text-[15px] outline-0 border-0 pl-2"
              placeholder="What's your...."
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer absolute right-[15%] px-4 py-1 rounded text-black hover:bg-gray-100"
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
