import React from "react";
import ControllAccount from "../UserInfomation/ControllAccount";
import { Outlet } from "react-router-dom";
import { useDataContext } from "../Context";

function AccountLayout() {
  const { showHidden, setShowHidden, setDetail } = useDataContext();
  return (
    <div >
      <div className="mt-[4rem] mx-6 md:mx-0">
        <ControllAccount />
      </div>
      {/* Right content for each account page */}
      <div className="ml-4 md:ml-[33%] mt-[5rem] md:mt-8 mr-4 md:min-h-[100vh]">
        <span
          className={`flex md:hidden items-center gap-2 border px-2 py-1 w-25 rounded-2xl cursor-pointer -mt-4 mb-4 ${
            showHidden ? "hidden" : "flex"
          }`}
          onClick={() => {
            setShowHidden(true);
            setDetail(false);
          }}
        >
          <i className="fa-solid fa-reply"></i>
          <h2>Back !</h2>
        </span>
        <Outlet />
      </div>
    </div>
  );
}

export default AccountLayout;
