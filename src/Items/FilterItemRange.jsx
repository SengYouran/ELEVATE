import React from "react";

function FilterItemRange({
  formattedPath,
  sortType,
  setSortType,
  setClose,
  filter,close
}) {
  return (
    <div
      className={`fixed top-0 right-0 z-100 w-[30rem] h-[100vh] bg-white py-2 px-4 flex flex-col gap-4 transform transition-all duration-500 ease-in-out ${
        close ? "translate-x-0" : "translate-x-[30rem]"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mt-2 mx-4">
        <h2 className="text-xl font-bold">Filter</h2>
        <i
          className="fa-solid fa-xmark text-xl cursor-pointer"
          onClick={() => setClose(false)}
        ></i>
      </div>

      <div className="border w-full"></div>

      <h2 className="my-4 text-xl font-bold">{formattedPath}</h2>

      {/* Sorting */}
      <div className="flex-1">
        <h2 className="my-4 text-xl font-bold">Sort by</h2>

        <form className="flex flex-col gap-4 text-lg">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="priceHigh"
              checked={sortType === "priceHigh"}
              onChange={(e) => setSortType(e.target.value)}
            />
            Price (High First)
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="priceLow"
              checked={sortType === "priceLow"}
              onChange={(e) => setSortType(e.target.value)}
            />
            Price (Low First)
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="discountHigh"
              checked={sortType === "discountHigh"}
              onChange={(e) => setSortType(e.target.value)}
            />
            Discount (High First)
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="sort"
              value="discountLow"
              checked={sortType === "discountLow"}
              onChange={(e) => setSortType(e.target.value)}
            />
            Discount (Low First)
          </label>
        </form>
      </div>

      {/* APPLY BUTTON */}
      <button
        onClick={() => {
          filter();
          setClose(false);
        }}
        className="w-full bg-black text-white py-3 rounded-md text-lg font-semibold"
      >
        Apply
      </button>
    </div>
  );
}

export default FilterItemRange;
