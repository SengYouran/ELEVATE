import React from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context";

const Benifts = [
  {
    id: 1,
    text: "Apparel",
    bg_box1: "0",
    bg_box2: "10%",
    bg_box3: "15%",
    bg_box4: "20%",
  },
  {
    id: 2,
    text: "Accessories",
    bg_box1: "0",
    bg_box2: "10%",
    bg_box3: "15%",
    bg_box4: "15%",
  },
  {
    id: 3,
    text: "Shoes",
    bg_box1: "0",
    bg_box2: "10%",
    bg_box3: "15%",
    bg_box4: "15%",
  },
  {
    id: 4,
    text: "Bag & Suitcase",
    bg_box1: "0",
    bg_box2: "10%",
    bg_box3: "15%",
    bg_box4: "15%",
  },
  {
    id: 5,
    text: "Free Delivery",
    bg_box1: "0",
    bg_box2: "0",
    bg_box3: "0",
    bg_box4: "0",
  },
];

function Membership_Benifts() {
  const { setActiveLinkAcc } = useDataContext();
  return (
    <div className="md:w-[78%]">
      <h2 className={`text-[18px] font-bold`}>Membership & Benifts</h2>

      <Link
        className="flex flex-col gap-2 mt-6 cursor-pointer"
        to={"/points"}
        onClick={() => setActiveLinkAcc(3)}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">SILVER</h2>
          <div className="flex items-center gap-1">
            <h2>Point History</h2>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>

        <p className="text-[14px]">5 Saving points ≈ $0.75</p>
        <h2 className="text-[14px] text-gray-400">
          Your point will be reset on the 20 March 2025
        </h2>
      </Link>

      <div className="border-gray-300 border my-4"></div>

      {/* Member Level */}
      <div className="my-4 flex flex-col gap-6">
        <div className="grid grid-cols-[40%_15%_15%_15%_15%] items-center">
          <h2 className="text-[18px] font-[400]">Member Level</h2>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[14px] text-amber-600">ONLINE</h2>
            <div className="bg-amber-600 w-4 h-4 rounded-[50%]"></div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[14px] text-gray-400">SILVER</h2>
            <div className="bg-gray-400 w-4 h-4 rounded-[50%] flex justify-center items-center">
              <i className="fa-solid fa-check text-gray-50"></i>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[14px] text-yellow-400">GOLD</h2>
            <div className="bg-yellow-400 w-4 h-4 rounded-[50%]"></div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[14px] text-black">PLATINUM</h2>
            <div className="bg-black w-4 h-4 rounded-[50%]"></div>
          </div>
        </div>

        {/* Spend */}
        <div className="grid grid-cols-[40%_15%_15%_15%_15%] items-center">
          <h2 className="text-[14px] font-[400]">Spend ($)/bill to unlock</h2>

          <div className="flex justify-center items-center">
            <h2 className="text-[14px] text-amber-600">Free!</h2>
          </div>

          <div className="flex justify-center items-center">
            <h2 className="text-[14px] text-gray-400">$50.00</h2>
          </div>

          <div className="flex justify-center items-center">
            <h2 className="text-[14px] text-yellow-400">$100.00</h2>
          </div>

          <div className="flex justify-center items-center">
            <h2 className="text-[14px] text-black">$200.00</h2>
          </div>
        </div>
      </div>

      <div className="border-gray-300 border my-4"></div>

      {/* Benefits Table */}
      <div>
        <h2></h2>
        {Benifts?.map((render) => (
          <div className="flex flex-col" key={render?.id}>
            <div className="grid grid-cols-[46.5%_15%_15%_15%_15%] items-center">
              <h2 className="text-[13px] font-[400]">{render?.text}</h2>

              <h2 className="text-[14px] text-amber-600">{render?.bg_box1}</h2>
              <h2 className="text-[14px] text-gray-400">{render?.bg_box2}</h2>
              <h2 className="text-[14px] text-amber-400">{render?.bg_box3}</h2>
              <h2 className="text-[14px] text-black">{render?.bg_box4}</h2>
            </div>

            <div className="border-gray-300 border my-3"></div>
          </div>
        ))}
      </div>
      {/* Point System Section */}
      <div className="mt-4">
        <h2 className="text-[18px] font-bold mb-4">Point System</h2>

        {/* Point Earning */}
        <div className="mb-4">
          <h3 className="text-[16px] font-semibold">Point Earning</h3>
          <p className="text-[14px] text-gray-700 mt-1">
            Earn 1 (Point) in every 10$ spent at online & in-store of ZANDO
            Group.
          </p>
        </div>

        {/* Point Redemption */}
        <div className="mb-2">
          <h3 className="text-[16px] font-semibold">
            Point Redemption: What’s New!
          </h3>

          <ul className="text-[14px] text-gray-700 list-disc ml-5 mt-1">
            <li>
              1 (Point) = 0.15$ cash voucher which you can redeem online and
              in-store of ZANDO Group.
            </li>
            <li>Eligible with Sale and Non-Sale items.</li>
            <li>Can apply with your membership discount.</li>
          </ul>
        </div>

        {/* Point Expiration */}
        <div className="mb-2">
          <h3 className="text-[16px] font-semibold">Point Expiration</h3>
          <p className="text-[14px] text-gray-700 mt-1">
            Point will be expired when your profile isn't active (No Purchase)
            for one year.
          </p>
        </div>

        {/* Terms & Conditions */}
        <div className="mb-2">
          <h3 className="text-[16px] font-semibold">Terms & Conditions</h3>

          <ul className="text-[14px] text-gray-700 list-disc ml-5 mt-1">
            <li>Online and offline may have different benefits or policies.</li>
            <li>Points cannot be exchanged for cash.</li>
            <li>Any purchase using points cannot be applied for refunds.</li>
            <li>The points do not apply to or accumulate on delivery fees.</li>
            <li>Remark: TEN11 reserves the right to update terms anytime.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Membership_Benifts;
