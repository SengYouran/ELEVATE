import React from "react";
import Bags from "./Bags";
import ShippAddress from "./ShippAddress";
import Banks from "./Banks";
import Contact from "./Contact";
import Points from "./Points";
import Noting from "./Noting";
import Payment from "./Payment";
function Checkout() {
  return (
    <div className="mt-[4rem] md:mt-[6rem] mx-2 xl:mx-32 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-4">
      <div className="flex flex-col gap-2">
        <div className="w-full">
          <h2 className="text-xl font-medium my-1">Delivery Address</h2>
          <ShippAddress />
        </div>
        <div className="mt-4">
          <Bags />
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-xl font-medium my-1">Payment</h2>
          <Banks />
        </div>
        <div>
          <h2 className="text-xl font-medium mt-8">Preferred contact line</h2>
          <Contact />
        </div>
        <div>
          <h2 className="text-xl font-medium mt-4">Redeem Code</h2>
          <Points />
        </div>
        <div>
          <Noting />
        </div>
        <div>
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
