import React, { useEffect, useState } from "react";
import Logo_shop from "../assets/Banner/LogoShop.png";
import cart_bag from "../assets/Banner/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { men, women } from "../Data/link";
import { useDataContext } from "../Context";
import ShowLogin from "./ShowLogin";
import ShowProfile from "./ShowProfile";
function Large() {
  const [hoverMenu, setHoverMenu] = useState(null); // "men" | "women" | null
  const navigator = useNavigate();
  const {
    userAccount,
    currentAccount,
    setShowCart,
    setBgCart,
    setShowLogin,
    setShowRegister,
    setBgLoginRegister,
    setBgCarts,
    showLogins,
    setShowLogins,
    handleLogout,
    handleSubmit,
    valueSearch,
    setValueSearch,
  } = useDataContext();
  const [currentCounter, setCurrentCounter] = useState(0);
  useEffect(() => {
    const userIndex = userAccount?.find(
      (check) => check.id === currentAccount.id
    );
    const storeBag = userIndex?.storeBags || [];
    let newCounter = 0;
    storeBag.forEach((add) => {
      newCounter += add?.counter;
    });
    setCurrentCounter(newCounter);
  }, [userAccount, currentAccount]);
  function handleSearch(e) {
    handleSubmit(e);
    navigator("/search");
  }
  return (
    <React.Fragment>
      <header className="hidden md:flex flex-col fixed top-0 left-0 z-50 w-screen bg-white px-6 py-1 shadow">
        {/* Top bar */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i
              className="fa-solid fa-user text-2xl text-gray-500 cursor-pointer"
              onClick={() => setShowLogins(!showLogins)}
            ></i>
            <div className="border bg-black w-[1px] h-6"></div>
            <div>
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  className="outline-0"
                  type="text"
                  value={valueSearch}
                  onChange={(e) => setValueSearch(e.target.value)}
                  placeholder="What's your..."
                />
                <button type="submit" className="cursor-pointer text-gray-300">
                  Search
                </button>
              </form>
              <div className="border-b"></div>
            </div>
          </div>

          <Link to={"/"} className="cursor-pointer -ml-22">
            <img
              className="w-[10rem] h-[2.5rem]"
              src={Logo_shop}
              alt="Logo Shop"
            />
          </Link>

          <div className="flex items-center">
            <Link
              to={"wishlist"}
              className="cursor-pointer flex items-center gap-2"
            >
              <h2 className="text-[15px]">Wishlist</h2>
              <i className="fa-regular fa-heart text-xl"></i>
            </Link>
            <div className="border bg-black w-[1px] h-6 mx-2"></div>
            <div
              onClick={() => {
                setShowCart(true);
                setBgCart(true);
                setBgCarts(true);
              }}
              className="cursor-pointer flex items-center gap-2"
            >
              <img src={cart_bag} alt="StoreBags" className="w-[20px] h-5" />
              <h2 className="text-[15px]">Cart ( {currentCounter} )</h2>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="border-b border-gray-300 my-2"></div>
        <div className="flex justify-center items-center gap-8 relative">
          <Link
            to={"/"}
            className="text-[15px] font-medium"
            onMouseLeave={() => setHoverMenu(null)}
          >
            Home
          </Link>

          {/* Men */}
          <div
            className="flex items-center gap-1 cursor-pointer relative"
            onMouseEnter={() => setHoverMenu("men")}
          >
            <h2
              className={`text-[15px] font-medium transition ${
                hoverMenu === "men" ? "text-black " : ""
              }`}
            >
              Men
            </h2>
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </div>

          {/* Women */}
          <div
            className="flex items-center gap-1 cursor-pointer relative"
            onMouseEnter={() => setHoverMenu("women")}
          >
            <h2
              className={`text-[15px] font-medium transition ${
                hoverMenu === "women" ? "text-black " : ""
              }`}
            >
              Women
            </h2>
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </div>

          <Link
            className="text-[15px] font-medium"
            onMouseLeave={() => setHoverMenu(null)}
            to={"accessories"}
          >
            Accessories
          </Link>
          <Link
            className="text-[15px] font-medium"
            onMouseLeave={() => setHoverMenu(null)}
            to={"features"}
          >
            Features
          </Link>
          <Link
            className="text-[15px] font-medium"
            onMouseLeave={() => setHoverMenu(null)}
            to={"docs"}
          >
            Documentations
          </Link>
        </div>
      </header>

      {/* Dropdown full width */}
      {(hoverMenu === "men" || hoverMenu === "women") && (
        <div
          className="fixed top-[5.2rem] left-0 w-full h-auto bg-black bg-opacity-30 py-6 px-10 text-white z-90 
           overflow-y-auto max-h-[70vh] transition-all duration-500 ease-in-out"
          onMouseLeave={() => setHoverMenu(null)}
        >
          <div className="max-w-6xl mx-auto">
            {hoverMenu === "men" && (
              <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-2">
                {men.map((render) => {
                  return (
                    <div className="flex flex-col gap-1" key={render?.id}>
                      <h2 className="text-white text-2xl font-semibold">
                        {render.text_link}
                      </h2>
                      {render?.nav.map((render, index) => (
                        <Link
                          key={index}
                          to={render?.path}
                          onClick={() => setHoverMenu(null)}
                        >
                          {render?.text_nav}
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}
            {hoverMenu === "women" && (
              <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-2">
                {women.map((render) => {
                  return (
                    <div className="flex flex-col gap-1" key={render?.id}>
                      <h2 className="text-white text-2xl font-semibold">
                        {render.text_link}
                      </h2>
                      {render?.nav.map((render, index) => (
                        <Link
                          to={render?.path}
                          key={index}
                          onClick={() => setHoverMenu(null)}
                        >
                          {render?.text_nav}
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {!currentAccount?.id || currentAccount?.id === 0 ? (
        <div
          className={[
            "transition-all duration-500 ease-in-out transform",
            "fixed right-3 w-[90%] max-w-[25rem]",
            "top-[3.5rem] md:top-[5.8rem] md:left-5", // Keep fixed always!
            "origin-top-right md:origin-top-left",
            "bg-[#1a1a1aee] backdrop-blur-md rounded-lg shadow-xl",

            showLogins
              ? "scale-100 opacity-100 translate-x-0 translate-y-0 z-50"
              : "scale-0 opacity-0 translate-x-20 -translate-y-20 z-0",

            showLogins
              ? "md:scale-100 md:opacity-100 md:translate-x-0 md:translate-y-0"
              : "md:scale-0 md:opacity-0 md:-translate-x-20 md:-translate-y-40",
          ].join(" ")}
        >
          <ShowLogin
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}
            setBgLoginRegister={setBgLoginRegister}
            setShowLogins={setShowLogins}
          />
        </div>
      ) : (
        <div
          className={`
    fixed top-15 right-3 w-[90%] max-w-[25rem] flex flex-col gap-3 
    overflow-y-auto max-h-[85vh] container-scroll
    bg-[#1a1a1aee] backdrop-blur-md shadow-xl
    transition-all duration-500 ease-in-out transform origin-top-right
    ${
      showLogins
        ? "scale-100 opacity-100 translate-x-0 translate-y-0 z-50"
        : "scale-0 opacity-0 translate-x-20 -translate-y-20 z-0"
    }
    md:top-[5.8rem] md:left-5 md:right-auto md:origin-top-left
    md:${
      showLogins
        ? "scale-100 opacity-100 translate-x-0 translate-y-0 z-50"
        : "scale-0 opacity-0 -translate-x-20 -translate-y-40 z-0"
    }
  `}
          onMouseLeave={() => setShowLogins(!showLogins)}
        >
          <ShowProfile currentAccount={currentAccount} handleLogout={handleLogout} />
        </div>
      )}
      {hoverMenu === "men" || hoverMenu === "women" ? (
        <div className="bg-black fixed inset-0 z-40 opacity-30"></div>
      ) : null}
    </React.Fragment>
  );
}

export default Large;
