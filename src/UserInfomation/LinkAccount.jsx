import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDataContext } from "../Context";

const linkAccount = [
  { id: 1, link: "Profile", path: "editprofile" },
  { id: 6, link: "Membership & benefits", path: "membership" },

  { id: 7, link: "Address Book", path: "addressbook" },
];
const my_shop = [
  { id: 2, link: "Orders & Return", path: "orders" },
  { id: 3, link: "Points", path: "points" },
  { id: 4, link: "Wishlist", path: "wishlist" },
  { id: 5, link: "Gift Card", path: "giftcard" },
];
const setting = [{ id: 8, link: "Change Password", path: "password" }];
function LinkAccount({ setShowHidden }) {
  const location = useLocation(); // ✅ បង្កើត location object

  const navigate = useNavigate();
  useEffect(() => {
    const locationPath = linkAccount.find(({ path }) =>
      location.pathname.includes(path)
    );
    if (locationPath) {
      setActiveLinkAcc(locationPath.id);
    }
  }, [location.pathname]); // ✅ ដាក់តែ pathname ជា dependency
  const { setDetail, setPolicy, faqguides, setFaqGuides,activeLinkAcc, setActiveLinkAcc } = useDataContext();
  function handlelink(path) {
    navigate(path);
  }
  return (
    <div className={`mt-2 flex flex-col gap-4`}>
      <ul className="flex flex-col gap-2">
        {linkAccount.map((render) => (
          <li
            key={render.id}
            className={`flex justify-between items-center group cursor-pointer transition ml-2 ${
              activeLinkAcc === render?.id
                ? "font-medium bg-gray-100 pl-1 py-1"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => {
              setDetail(false);
              setFaqGuides(false);
              setActiveLinkAcc(render?.id);
              handlelink(render?.path);
              setShowHidden(false);
            }}
          >
            <Link>{render?.link}</Link>
            <i
              className="fa-solid fa-angle-right text-xs transform transition-all duration-500 ease-in-out group-hover:-rotate-180
              transform-origin-center mr-1"
            ></i>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-2">
        <h2 className="text-[16px] font-bold mt-2">My Shop</h2>
        {my_shop.map((render) => (
          <li
            key={render.id}
            className={`flex justify-between items-center group cursor-pointer transition ml-2 ${
              activeLinkAcc === render?.id
                ? "font-medium bg-gray-100 pl-1 py-1"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => {
              setDetail(false);
              setFaqGuides(false);
              setActiveLinkAcc(render?.id);
              handlelink(render?.path);
              setShowHidden(false);
            }}
          >
            <Link>{render?.link}</Link>
            <i
              className="fa-solid fa-angle-right text-xs transform transition-all duration-500 ease-in-out group-hover:-rotate-180
              transform-origin-center mr-1"
            ></i>
          </li>
        ))}
      </ul>

      {/**Setting */}
      <ul className="flex flex-col gap-2">
        <h2 className="text-[16px] font-bold mt-2">Settings</h2>
        {setting.map((render) => (
          <li
            key={render.id}
            className={`flex justify-between items-center group cursor-pointer transition ml-2 ${
              activeLinkAcc === render?.id
                ? "font-medium bg-gray-100 pl-1 py-1"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => {
              setDetail(false);
              setFaqGuides(false);
              setActiveLinkAcc(render?.id);
              handlelink(render?.path);
              setShowHidden(false);
            }}
          >
            <Link>{render?.link}</Link>
            <i
              className="fa-solid fa-angle-right text-xs transform transition-all duration-500 ease-in-out group-hover:-rotate-180
              transform-origin-center mr-1"
            ></i>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-[16px] font-bold">Support</h2>
        <span
          className="flex justify-between items-center group cursor-pointer ml-2"
          onClick={() => {
            setFaqGuides(false);
            setActiveLinkAcc(null);
            setPolicy(true);
          }}
        >
          <h2 className="cursor-pointer text-gray-600 hover:text-black">
            Privacy Policy
          </h2>
          <i
            className="fa-solid fa-angle-right text-xs transform transition-all duration-500 ease-in-out group-hover:-rotate-180
              transform-origin-center mr-1"
          ></i>
        </span>
        <li
          className={`flex justify-between items-center group cursor-pointer transition ml-2 ${
            faqguides
              ? "font-medium bg-gray-100 pl-1 py-1"
              : "text-gray-600 hover:text-black"
          }`}
          onClick={() => {
            setFaqGuides(true);
            setActiveLinkAcc(null);
            setShowHidden(false);
          }}
        >
          <Link to={"faqguides"}>FAQs & Guides</Link>
          <i
            className="fa-solid fa-angle-right text-xs transform transition-all duration-500 ease-in-out group-hover:-rotate-180
              transform-origin-center mr-1"
          ></i>
        </li>
      </div>
    </div>
  );
}

export default LinkAccount;
