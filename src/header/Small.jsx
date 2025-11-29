import React, { useState } from "react";
import Logo_shop from "../assets/Banner/LogoShop.png";
import cart_bag from "../assets/Banner/shopping bag.png";
import { men, women } from "../Data/link";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context";
function Small() {
  const [showItem, setShowItem] = useState(null);
  const [gender, setGender] = useState("men");
  const [showbars, setShowBars] = useState(false);
  const { setSearch, showLogins, setShowLogins, setBgCart,setBgCarts,setShowCart } = useDataContext();
  return (
    <React.Fragment>
      <header className="bg-white px-6 py-2 w-screen fixed z-80 top-0 left-0 flex md:hidden justify-between items-center">
        <Link className="flex items-center gap-3">
          <i
            className="fa-solid fa-bars text-2xl cursor-pointer"
            onClick={() => setShowBars(true)}
          ></i>
          <img className="w-25" src={Logo_shop} alt="Logo Shop" />
        </Link>
        <div className="flex items-center gap-2">
          <i
            className="fa-solid fa-magnifying-glass text-2xl"
            onClick={() => setSearch(true)}
          ></i>
          <div className="border border-black w-[1.5px] h-[1.5rem]"></div>
          <Link to={"wishlist"}>
            <i className="fa-regular fa-heart text-2xl"></i>
          </Link>
          <div className="border border-black  w-[1.5px] h-[1.5rem]"></div>
          <span
            className="cursor-pointer relative"
            onClick={() => {
              setShowCart(true);
              setBgCart(true);
              setBgCarts(true);
            }}
          >
            <img src={cart_bag} alt="StoreBags" className="w-[30px] h-6" />
            <h2 className="text-[17px] text-red-600 font-bold absolute top-[2px] left-2.5">
              0
            </h2>
          </span>
          <div className="border border-black w-[1.5px] h-[1.5rem]"></div>
          <i
            className="fa-solid fa-user text-2xl cursor-pointer"
            onClick={() => setShowLogins(!showLogins)}
          ></i>
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 md:hidden bg-white h-full transition-all duration-500 ease-in-out ${
          showbars ? "z-80 w-[20rem] opacity-100" : "w-[10rem] opacity-0 -z-10"
        }`}
      >
        <div className="flex justify-around items-center gap-2 mx-4 my-2">
          <h2
            className={`text-xl font-medium text-center w-full ${
              gender === "women" ? "bg-gray-50 p-2" : ""
            }`}
            onClick={() => {
              setGender("women");
              setShowItem(null);
            }}
          >
            Women
          </h2>
          <h2
            className={`text-xl font-medium text-center w-full ${
              gender === "men" ? "bg-gray-200 p-2" : ""
            }`}
            onClick={() => {
              setGender("men");
              setShowItem(null);
            }}
          >
            Men
          </h2>
        </div>
        <div className="border"></div>
        <div className="overflow-y-scroll max-h-[90vh] ml-4 my-4">
          <div className={`${gender === "women" ? "block" : "hidden"}`}>
            {women.map((render) => {
              return (
                <div className="flex flex-col gap-1" key={render?.id}>
                  <h2
                    className="text-red-500 text-4xl font-semibold cursor-pointer my-2"
                    onClick={() => setShowItem(render?.id)}
                  >
                    {render?.text_link}
                  </h2>
                  <div
                    className={`flex flex-col gap-2 overflow-hidden transition-[max-height] duration-500 ease-in-out
                  ${showItem === render?.id ? "max-h-[500px]" : "max-h-0"}`}
                  >
                    {render?.nav.map((render, index) => (
                      <Link
                        className="text-xl ml-2"
                        to={render?.path}
                        key={index}
                        onClick={() => setShowBars(false)}
                      >
                        {render?.text_nav}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`${gender === "men" ? "block" : "hidden"}`}>
            {men.map((render) => {
              return (
                <div className="flex flex-col gap-1" key={render?.id}>
                  <h2
                    className="text-red-500 text-4xl font-semibold cursor-pointer my-2"
                    onClick={() => setShowItem(render?.id)}
                  >
                    {render?.text_link}
                  </h2>
                  <div
                    className={`flex flex-col gap-2 overflow-hidden transition-[max-height] duration-500 ease-in-out
                  ${showItem === render?.id ? "max-h-[500px]" : "max-h-0"}`}
                  >
                    {render?.nav.map((render, index) => (
                      <Link
                        className="text-xl ml-2"
                        to={render?.path}
                        key={index}
                        onClick={() => setShowBars(false)}
                      >
                        {render?.text_nav}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`bg-black md:hidden opacity-30 fixed inset-0 ${
          showbars ? "block z-70" : "hidden -z-70"
        }`}
        onClick={() => setShowBars(false)}
      ></div>
    </React.Fragment>
  );
}

export default Small;
