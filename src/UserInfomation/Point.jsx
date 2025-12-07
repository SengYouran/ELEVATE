import React, { useEffect, useState, useMemo } from "react";
import { useDataContext } from "../Context";

function Point() {
  const { userPoints, userAccount, currentAccount,showHidden } = useDataContext();
  const [spentedPoint, setSpentedPoint] = useState(0);

  useEffect(() => {
    const currentUser = userAccount.find((acc) => acc.id === currentAccount.id);
    setSpentedPoint(currentUser?.spentpoint || 0);
  }, [userAccount, currentAccount]);

  const totalPoint = useMemo(() => {
    return userPoints?.reduce((sum, item) => sum + item?.point, 0);
  }, [userPoints]);

  return (
    <div className={`${showHidden ? "hidden md:blcok" : "blcok"}`}>
      {/* Title */}
      <h2 className="text-[18px] font-bold">Point</h2>

      {/* Scrollable history */}
      <div className="overflow-y-auto min-h-[50%] pr-4 mt-4 
                      scrollbar-thin scrollbar-thumb-green-500 
                      scrollbar-track-white hover:scrollbar-thumb-pink-600">
        {userPoints?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b border-gray-200"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-[15px] font-medium">Save</h2>
              <h2 className="text-[15px] font-medium">{item.date}</h2>
            </div>

            <h2 className="text-[15px] font-medium text-green-600">
              +{item.point} Point
            </h2>
          </div>
        ))}
      </div>

      {/* Total section */}
      <div className="mt-8 flex flex-col gap-4 pr-4">
        {/* Total */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Total</h2>
          <h2 className="text-2xl font-semibold">{totalPoint} Point</h2>
        </div>

        <div className="w-full h-[2px] bg-gray-400"></div>

        {/* Total Again */}
        <div className="flex justify-between items-center">
          <h2 className="text-[15px] font-medium">Total</h2>
          <h2 className="text-[15px] font-medium">{totalPoint} Point</h2>
        </div>

        {/* Spent */}
        <div className="flex justify-between items-center">
          <h2 className="text-[15px] font-medium">Spent</h2>
          <h2 className="text-[15px] font-medium">{spentedPoint} Point</h2>
        </div>
      </div>
    </div>
  );
}

export default Point;
