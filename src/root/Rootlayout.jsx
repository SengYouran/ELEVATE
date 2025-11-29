import React from "react";
import Large from "../header/Large";
import Small from "../header/Small";
import { Outlet } from "react-router-dom";
import Search from "../Page/Search";
import Footer from "../Page/Footer";
import Scroll from "../Scroll";
import { useDataContext } from "../Context";
import BothForm from "../FormLogin/BothForm";
import Cart from "../Items/Cart";
import PrivacyPolicy from "../AboutCompany/PrivacyPolicy";
function Rootlayout() {
  const {
    showLogin,
    setShowLogin,
    bgCarts,
    setBgCarts,
    setShowCart,
    gotoBag,
    setGoToBag,
  } = useDataContext();
  return (
    <React.Fragment>
      <Scroll />
      <header>
        <Large />
        <Small />
      </header>
      <div
        className={`bg-gray-200 fixed inset-0 z-60 opacity-70 ${
          showLogin ? "block" : "hidden"
        }`}
        onClick={() => setShowLogin(false)}
      />
      <div
        className={`bg-black fixed inset-0 transition-all ease-in-out ${
          bgCarts
            ? "z-80 opacity-30 duration-500"
            : "-z-80 opacity-0 duration-0"
        }`}
        onClick={() => {
          setGoToBag(false);
          setBgCarts(false);
          setShowCart(false);
        }}
      ></div>
      <BothForm />
      <Search />
      <Cart />
      <PrivacyPolicy />
      <main className="mt-5 md:mt-20">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Rootlayout;
