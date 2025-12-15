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
import ToTop from "../Page/ToTop";
import Snow from "../Items/Snow";
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

      {/* Login Overlay */}
      {showLogin && (
        <div
          className="bg-black fixed inset-0 z-60 opacity-30"
          onClick={() => setShowLogin(false)}
        />
      )}

      {/* Cart Overlay */}
      {bgCarts && (
        <div
          className="bg-black fixed inset-0 z-80 opacity-30 transition duration-500"
          onClick={() => {
            setGoToBag(false);
            setBgCarts(false);
            setShowCart(false);
          }}
        />
      )}

      {/* Modals */}
      <BothForm />
      <Cart />
      <PrivacyPolicy />
      <ToTop />

      {/* Search Overlay */}
      <Search />
      {/**Session */}
      <Snow />
      {/* Main Content */}
      <main className="mt-5 md:mt-20">
        <Outlet />
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default Rootlayout;
