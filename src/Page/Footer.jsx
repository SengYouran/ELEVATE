import React from "react";
import Logo from "../assets/Banner/LogoShop2.png";
import { Link, useNavigate } from "react-router-dom";
import KHQR from "../assets/Banner/We-accept-payments.png";
import playStore from "../assets/logo/app_android.png";
import appStore from "../assets/logo/app_ios.png";
import { useDataContext } from "../Context";

function Footer() {
  const navigator = useNavigate();
  const { setPolicy, handleLogout } = useDataContext();
  return (
    <React.Fragment>
      <div className="bg-gray-900 py-4 px-4 sm:px-34 mt-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-2xl text-white">
            Have questions? Get in touch with ELEVATE
          </h2>
          <h2
            onClick={() => {
              handleLogout();
              navigator("/");
            }}
            className="cursor-pointer text-white text-sm border border-gray-400 py-2 px-4 rounded-4xl hover:bg-amber-50 hover:text-black"
          >
            Logout
          </h2>
        </div>
        <div className="border border-gray-500 my-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          <div className="flex flex-col gap-4">
            <div>
              <img className="w-50 h-10" src={Logo} alt="Logo website" />
            </div>
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <span className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110">
                <img className="w-30 " src={appStore} alt="Logo App Store" />
              </span>
              <span className="cursor-pointer tansition-all duration-500 ease-in-out hover:scale-110">
                <img className="w-30 " src={playStore} alt="Logo Play Store" />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[17px] text-white ">Customer Services</h2>
            <div className="border border-white w-15"></div>
            <Link
              to={"faqguides"}
              className="text-[13px] text-gray-100 cursor-pointer"
            >
              Online exchange policy
            </Link>
            <p
              className="text-[13px] text-gray-100 cursor-pointer"
              onClick={() => setPolicy(true)}
            >
              Privacy Policy
            </p>
            <Link
              to={"faqguides"}
              className="text-[13px] text-gray-100 cursor-pointer"
            >
              FAQs & Guides
            </Link>
            <Link to={"/"} className="text-[13px] text-gray-100 cursor-pointer">
              Home
            </Link>
            <Link
              to={"/about-us"}
              className="text-[13px] text-gray-100 cursor-pointer"
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] text-white ">FOLLOW @elevate</h2>
            <div className="border border-white w-15"></div>
            <div className="flex flex-col gap-2">
              <a
                href="https://web.facebook.com/phka.official/?_rdc=1&_rdr#"
                className="flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-brands fa-facebook text-xl text-white"></i>
                <h2 className="text-white text-[14px]">Facebook</h2>
              </a>
              <a
                href="https://www.tiktok.com/@phka.official"
                className="flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-brands fa-tiktok text-xl text-white"></i>
                <h2 className="text-white text-[14px]">Tik Tok</h2>
              </a>
              <a
                href="https://www.instagram.com/phka.official/"
                className="flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-brands fa-instagram text-xl text-white"></i>
                <h2 className="text-white text-[14px]">Instagram</h2>
              </a>
              <a
                href="https://t.me/phkaofficial"
                className="flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-brands fa-telegram text-xl text-white"></i>
                <h2 className="text-white text-[14px]">Telegram</h2>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[17px] text-white ">WE ACCEPT</h2>
            <div className="border border-white w-15"></div>
            <div className="flex flex-col gap-2">
              <img className="w-60" src={KHQR} alt="Logo KHQR" />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center bg-white mb-8">Powered By TEN11 © 2025</h2>
    </React.Fragment>
  );
}

export default Footer;
