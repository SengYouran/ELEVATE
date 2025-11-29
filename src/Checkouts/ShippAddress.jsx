import React, { useEffect, useState } from "react";
import { useDataContext } from "../Context";
import AddreessDeliveryForm from "./AddreessDeliveryForm";
import EditFormDeliveryAddress from "./EditFormDeliveryAddress";
import vireak_buntham from "../assets/logo/vireak-buntham.png";
import DeliveryCompany from "./DeliveryCompany";
function ShippAddress() {
  const { userAccount, currentAccount, setDeliveryAddress } = useDataContext();
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedDelivery, setSelectDelivery] = useState(null);
  const [formAddress, setFormAddress] = useState(false);
  const [bgForm1, setBgForm1] = useState(false);
  const [bgForm2, setBgForm2] = useState(false);
  const [bgDelivery, setBgDelivery] = useState(false);
  const [showProvinces, setShowProvinces] = useState(false);
  const [textAddress, setTextAddress] = useState("");
  useEffect(() => {
    const userIndex = userAccount?.find(
      (check) => check?.id === currentAccount?.id
    );
    const currentlyAdddress = userIndex?.shippingAddress;
    const shippingDelivery = userIndex?.shippingDelivery;
    setCurrentUser(currentlyAdddress);
    setSelectDelivery(shippingDelivery);
  }, [userAccount, currentAccount]);
  return (
    <div>
      <div
        className={`bg-gray-200 fixed inset-0 ${
          currentUser == undefined ? "z-75 opacity-70" : "-z-75 opacity-0"
        }`}
        onClick={() => {
          setBgForm2(true), setFormAddress(!formAddress);
        }}
      ></div>
      {currentUser == undefined ? (
        <div
          className={`fixed top-1/2 w-full md:w-[25rem] rounded left-1/2 -translate-1/2 bg-white py-8 px-12 flex flex-col justify-center items-center gap-2
               ${
                 formAddress
                   ? "transform scale-0 opacity-0 -z-80"
                   : "scale-110 opacity-100 z-80"
               }`}
        >
          <i
            className="fa-solid fa-triangle-exclamation text-2xl text-white bg-red-600 rounded-4xl py-1.5 px-2
            "
          ></i>
          <h2 className="text-[15px] font-medium">
            You don't has delivery address
          </h2>
          <p className="text-sm">please add your delivery Address</p>
          <div className="flex items-center gap-2">
            <h2
              className="border border-black py-1 px-2 text-sm rounded cursor-pointer"
              onClick={() => {
                setFormAddress(!formAddress);
                setBgForm2(true);
                setTextAddress("ADD NEW ADDRESS");
              }}
            >
              No, Back
            </h2>
            <h2
              className="bg-black text-white hover:bg-gray-900 py-1 px-2 text-sm rounded cursor-pointer"
              onClick={() => {
                setFormAddress(!formAddress);
                setBgForm2(true);
                setTextAddress("ADD NEW ADDRESS");
              }}
            >
              Yes, Add
            </h2>
          </div>
        </div>
      ) : (
        <div className="bg-white py-10 px-4 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <label htmlFor="shippAddress">
                <input
                  type="checkbox"
                  className=" accent-black w-[17px] h-[15px]"
                  name="shippAddress"
                  id="shipAddress"
                  checked
                  readOnly
                />
              </label>
              <div>
                <h2 className="text-[16px] font-medium">
                  {currentUser?.fullName}
                </h2>
                <div className="flex flex-wrap items-center">
                  <h2 className="text-sm">
                    {currentUser?.currently}, {currentUser?.provinces},{" "}
                    {currentUser?.country}
                  </h2>
                </div>
                <h2 className="text-sm">{currentUser?.telephone}</h2>
              </div>
            </div>
            <div
              className="flex justify-center itmes-center gap-1 cursor-pointer text-gray-400"
              onClick={() => setBgForm1(true)}
            >
              <h2 className="text-sm">Change</h2>
              <i className="fa-solid fa-angle-right text-[15px] mt-[4px]"></i>
            </div>
          </div>
          <div className="border border-gray-200"></div>
          <div className="flex justify-between items-center">
            {selectedDelivery ? (
              <div className="flex items-center gap-1">
                <div className="w-10 h-10 rounded-[50%]">
                  <img
                    src={selectedDelivery.brand_logo}
                    alt="Logo Brand delivery"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-sm">
                    Delivery: {selectedDelivery.price}
                  </h2>
                  <p className="text-sm">
                    {selectedDelivery.brand_name} {selectedDelivery.days}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <div className="w-10 h-10 rounded-[50%]">
                  <img src={vireak_buntham} alt="Logo Brand delivery" />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[15px]">Delivery: $1.25</h2>
                  <p className="text-xs">
                    Virak Buntham Delivery within 2-3 days.
                  </p>
                </div>
              </div>
            )}
            <div
              className="flex justify-center itmes-center gap-1 cursor-pointer text-gray-400"
              onClick={() => setBgDelivery(true)}
            >
              <h2 className="text-sm">More</h2>
              <i className="fa-solid fa-angle-right text-sm mt-1"></i>
            </div>
          </div>
        </div>
      )}
      <EditFormDeliveryAddress
        bgForm1={bgForm1}
        setBgForm1={setBgForm1}
        setBgForm2={setBgForm2}
        currentUser={currentUser}
        setDeliveryAddress={setDeliveryAddress}
        setTextAddress={setTextAddress}
        />
      <AddreessDeliveryForm
        bgForm2={bgForm2}
        setBgForm2={setBgForm2}
        setShowProvinces={setShowProvinces}
        showProvinces={showProvinces}
        textAddress={textAddress}
      />

      <DeliveryCompany
        selectedDelivery={selectedDelivery}
        currentUser={currentUser}
        bgDelivery={bgDelivery}
        setBgDelivery={setBgDelivery}
      />

      <div
        className={`bg-gray-200 fixed inset-0 ${
          bgDelivery ? "z-75 opacity-70" : "-z-75 opacity-0"
        }`}
        onClick={() => setBgDelivery(false)}
      ></div>
      <div
        className={`absolute inset-0 bg-gray-200 z-85 opacity-70 ${
          bgForm2 ? "blcok" : "hidden"
        }`}
        onClick={() => setBgForm2(false)}
      ></div>
    </div>
  );
}

export default ShippAddress;
