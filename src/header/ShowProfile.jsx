import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowProfile({ currentAccount, handleLogout }) {
  const [checked, setChecked] = useState("Women");

  return (
    <React.Fragment>
      <Link
        className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4)] pl-4 pt-4 py-2 flex flex-col gap-1 border border-transparent hover:border-white "
        to={"/editprofile"}
      >
        <h2 className="text-white text-[17px] font-bold">
          {currentAccount?.fullName}
        </h2>
        <p className="text-[16px] text-white">{currentAccount?.telephone}</p>
      </Link>

      <div className="text-white p-4">
        <h2 className="text-xl font-bold mb-4">My Account</h2>
        <Link to={"/editprofile"} className="flex items-center w-full h-[2.5rem] gap-2 ml-2 hover:bg-[#ffffff20] rounded px-2">
          <i className="fa-solid fa-user ml-2"></i>
          <h2 className="text-[17px]">Personal Detail</h2>
        </Link>

        <Link to={"/addressbook"} className="flex items-center w-full h-[2.5rem] gap-2 ml-2 hover:bg-[#ffffff20] rounded px-2">
          <i className="fa-solid fa-house ml-2"></i>
          <h2 className="text-[17px]">Address Book</h2>
        </Link>
      </div>
      <div className="text-white ml-4">
        <h2 className="text-xl font-bold mb-4">My Shop</h2>
        <Link to={"/orders"} className="flex items-center w-full h-[2.5rem] gap-2 ml-2 hover:bg-[#ffffff20] rounded px-2">
          <i className="fa-solid fa-book ml-2"></i>
          <h2 className="text-[17px]">Orders & Return</h2>
        </Link>
        <Link to={"/points"} className="flex items-center w-full h-[2.5rem] gap-2 ml-2 hover:bg-[#ffffff20] rounded px-2">
          <i className="fa-solid fa-circle-plus ml-2"></i>
          <h2 className="text-[17px]">Points</h2>
        </Link>
        <Link to={"/wishlist"} className="flex items-center w-full h-[2.5rem] gap-2 ml-2 hover:bg-[#ffffff20] rounded px-2">
          <i className="fa-solid fa-bookmark ml-2"></i>
          <h2 className="text-[17px]">Wishlist</h2>
        </Link>
        <Link to={"/giftcard"} className="flex items-center w-full h-[2.5rem] gap-2 ml-2 hover:bg-[#ffffff20] rounded px-2">
          <i className="fa-solid fa-gift ml-2"></i>
          <h2 className="text-[17px]">Gift Card</h2>
        </Link>
      </div>
      <div className="text-white ml-4">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <Link to={"/password"} className="flex items-center w-full h-[2.5rem] gap-2 ml-2 hover:bg-[#ffffff20] rounded px-2">
          <i className="fa-solid fa-key ml-2"></i>
          <h2 className="text-[17px]">Change Password</h2>
        </Link>
      </div>
      <form className="flex flex-col gap-2 text-white ml-4">
        <h2 className="text-white text-xl font-medium">Shop Preference</h2>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="women"
            name="gender"
            value="Women"
            checked={checked === "Women"}
            onChange={(e) => setChecked(e.target.value)}
            className="w-[20px] h-[20px] accent-black cursor-pointer"
          />
          <label htmlFor="women" className="text-white cursor-pointer">
            Women
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="men"
            name="gender"
            value="Men"
            checked={checked === "Men"}
            onChange={(e) => setChecked(e.target.value)}
            className="w-[20px] h-[20px] accent-black cursor-pointer"
          />
          <label htmlFor="men" className="text-white cursor-pointer">
            Men
          </label>
        </div>
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogout();
        }}
        className="test2 border border-white text-white text-xl font-medium mx-4 mb-4 py-2 cursor-pointer"
      >
        Log out
      </button>
    </React.Fragment>
  );
}

export default ShowProfile;
