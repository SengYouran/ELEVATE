import React, { useEffect, useState } from "react";
import { useDataContext } from "../Context";
import LinkAccount from "./LinkAccount";

function ControllAccount() {
  const [information, setinfomation] = useState({});
  const { userAccount, currentAccount, showHidden, setShowHidden } =
    useDataContext();
  useEffect(() => {
    const userData = userAccount.find(
      (check) => check.id === currentAccount.id
    );
    setinfomation(userData);
  }, [userAccount]);
  return (
    <div
      className={`gap-4 relative ${showHidden ? "flex " : "hidden md:flex"}`}
    >
      <div className="md:absolute left-10 top-4 w-full md:w-[25%] flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] text-pink-600 font-bold">
            {information?.fullName}
          </h2>
          <p className="text-[15px] ">{information?.telephone}</p>
          <div className="border border-gray-700"></div>
        </div>
        <h2 className="text-[16px] font-bold mt-2">My Account</h2>

        <LinkAccount setShowHidden={setShowHidden} />
      </div>
    </div>
  );
}

export default ControllAccount;
