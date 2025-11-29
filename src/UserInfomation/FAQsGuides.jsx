import React, { useState } from "react";
import { useDataContext } from "../Context";

function FAQsGuides() {
  const { showHidden, policy, setPolicy } = useDataContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [isOpenPay, setIsOpenPay] = useState(false);
  const [isOpenDelivery, setIsOpenDelivery] = useState(false);
  const [isOpenExchange, setIsOpenExchange] = useState(false);
  const [isOpenRefund, setIsOpenRefund] = useState(false);
  const [isOpenPurchase, setIsOpenPurchase] = useState(false);
  const [isOpenContactUs, setIsOpenContactUs] = useState(false);
  const [isOpenSizing_Fit, setIsOpenSizing_Fit] = useState(false);

  return (
    <div className={`min-h-[70vh] ${showHidden ? "hidden md:block" : "block"}`}>
      <h2 className="text-[18px] font-bold">FAQs & Guides</h2>
      <div className="flex flex-col gap-2 px-4 mt-4">
        {/**General Info */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h2 className="text-[16px] font-bold">General Info</h2>
              <i
                className={`fa-solid ${
                  isOpen ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>

            <div
              className={`flex flex-col gap-1 overflow-hidden transition-[max-height] duration-900 ease-in-out ${
                isOpen ? "max-h-[500px]" : " max-h-[0]"
              }`}
            >
              <h2 className="text-[14px] font-bold mt-2">
                When are new items available?
              </h2>
              <p className="text-[14px] font-[400]">
                New arrival items in every Mon-Saturday, be sure to check
                regularly.
                <p className="text-[14px] font-bold">
                  How do I get a discount?
                </p>
              </p>
              <p className="text-[14px]">
                If you are an existing member of TEN11, ELEVATE, ZENDO, 361
                Degree, ROUTINE and GATONI , you are free to register online to
                get the discount rate the same as offline stores just make sure
                to register the same telephone number.
              </p>
              <p className="text-[14px] font-bold">
                What brand do we sell online?
              </p>
              <h2 className="text-[14px]">
                We are selling products from TEN11
              </h2>
              <p className="text-[14px]">
                Some items you may find here but not at offline store
              </p>
            </div>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        {/*Payment Methods*/}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenPay(!isOpenPay)}
            >
              <h2 className="text-[16px] font-bold">Payment Methods</h2>
              <i
                className={`fa-solid ${
                  isOpenPay ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`flex flex-col gap-1 mt-2 overflow-hidden transition-[max-height] duration-900 ease-in-out ${
              isOpenPay ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[14px] font-bold">How do I pay?</h2>
            <p className="text-[14px] mt-1">
              We provide multiple payment options
            </p>
            <ul className=" list-decimal pl-4 text-sm">
              <li>Credit / Debit Card (Visa and Master Card)</li>
              <li>ABA Payway, Acleda Payway, Chipmong Bank Payway, .....</li>
              <li>Bank Transfer (TT)</li>
              <li>COD (Cash on Delivery)</li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>
        {/*Delivery*/}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenDelivery(!isOpenDelivery)}
            >
              <h2 className="text-[16px] font-bold">Delivery</h2>
              <i
                className={`fa-solid ${
                  isOpenDelivery ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>

          <div
            className={`flex flex-col gap-1 overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenDelivery ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[14px] font-bold mt-2">
              What is the delivery option?
            </h2>
            <ul className="list-decimal pl-4 text-sm ml-2">
              <li>In Phnom Penh, we provide home delivery</li>
              <li>
                To provinces, you can pick up your order at the courier office.
              </li>
            </ul>
            <h2 className="text-[14px] font-bold">
              How long does it take to receive my order?
            </h2>
            <ul className=" list-decimal pl-4 text-sm ml-2">
              <li>For Phnom Penh, We will deliver within 48 hours.</li>
              <li>For Provinces, We will deliver within 72 hours.</li>
              <p>
                Please note that during peak seasonal sales our deliveries may
                be delayed. Should this be the case our team will contact you
                with further info.
              </p>
            </ul>
            <h2 className="text-[14px] font-bold">
              How much will shipping cost?
            </h2>
            <ul className="list-decimal pl-4 text-sm ml-2">
              <li>
                <span className="text-[14px] font-bold text-red-500">
                  $1.25
                </span>{" "}
                delivery to 25 provinces and cities
              </li>
            </ul>
            <h2 className="text-[14px] font-bold">
              What shipping companies do we use?
            </h2>
            <ul className="list-decimal pl-4 text-sm ml-2">
              <li>
                In Phnom Penh city, for short distance in the city center we use
                our own delivery man that is fast and convenient.
              </li>
              <li>
                To province, we cooperate with Virak Buntham and J&T. We also
                can deliver your order by another courier up on your request.
              </li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>
        {/**Exchange & Return */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenExchange(!isOpenExchange)}
            >
              <h2 className="text-[16px] font-bold">Exchange & Returns</h2>
              <i
                className={`fa-solid ${
                  isOpenExchange ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`flex flex-col gap-1 overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenExchange ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[14px] font-bold mt-2">
              What is the delivery option?
            </h2>
            <ul className="text-sm list-decimal pl-4 ml-2">
              <li>
                <span className="text-[14px] font-bold">
                  You aren't in Phnom Penh:
                </span>{" "}
                You aren't in Phnom Penh: contact our customer service then
                choose a shipping courier near you. Please note that you will
                responsible for the shipping fee both way.
              </li>
              <li>
                <span className="text-[15px] font-bold">
                  You are Phnom Penh:
                </span>
                <ul className="text-sm list-decimal pl-4 mt-1">
                  <li>Go to ELEVATE Platform then "My Orders"</li>
                  <li>Choose the order you want to exchange</li>
                  <li>Choose items you want to exchange</li>
                  <li>
                    Once finished add new item to your shopping cart and then
                    checkout.
                  </li>
                  <p>
                    <span className="text-[14px] font-bold">Remark:</span> you
                    can find your returned items in the shopping cart. Driver
                    will deliver new item to you and collect returned item back.
                  </p>
                </ul>
              </li>
            </ul>
            <h2 className="text-[14px] font-bold mt-2">
              If my order eligible to be exchanged?
            </h2>
            <ul className="text-sm list-decimal pl-4 ml-2">
              <li>Eligible to exchange in 14 days after purchase date</li>
              <li>
                Item must be in their original condition, unworn, unaltered, and
                unwashed with all tags attached.
              </li>
              <li>
                For hygienic purposes, the following products are
                non-returnable: swimwear, lingerie, sock, towel, glove, blanket,
                mattress, earrings and other accessories
              </li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>
        {/**Order Status */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenOrder(!isOpenOrder)}
            >
              <h2 className="text-[16px] font-bold">Order Status</h2>
              <i
                className={`fa-solid ${
                  isOpenOrder ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
            <div
              className={`flex flex-col gap-1 overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
                isOpenOrder ? "max-h-[500px]" : " max-h-[0]"
              }`}
            >
              <h2 className="text-[14px] font-bold mt-2">
                How do I check my order status?
              </h2>

              <ul className="list-decimal pl-4 space-y-2 text-sm ml-2">
                <li>
                  You can track your order in TEN11 App to see whether your
                  order has been confirmed, packed, delivered, or rejected.
                </li>
              </ul>
              <h2 className="text-[14px] font-bold">Please note</h2>
              <p className="text-[14px] ">
                for now we don't provide detailed delivery status as our
                shipping courier doesn't provide this service yet. If your order
                takes longer than usual(3 days) please contact our customer
                service for support.
              </p>
            </div>
          </div>
          <div className="border border-gray-200"></div>
        </div>
        {/**Refund */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenRefund(!isOpenRefund)}
            >
              <h2 className="text-[16px] font-bold">Refund</h2>
              <i
                className={`fa-solid ${
                  isOpenRefund ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`flex flex-col gap-1 overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenRefund ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[14px] font-bold mt-2">
              What are the refund options?
            </h2>
            <ul className="text-sm list-decimal pl-4 ml-2">
              <li>
                <span className="text-[14px] font-bold">
                  You aren't in Phnom Penh:
                </span>{" "}
                Contact our customer service then choose a shipping courier near
                you.
              </li>
              <li>
                <span className="text-[14px] font-bold">
                  You are Phnom Penh:
                </span>
                <ul className="text-sm list-decimal pl-4 ml-1">
                  <li>Go to PICH PISEY Platform then "My Orders"</li>
                  <li>Choose the order you want to refund</li>
                  <li>Choose items</li>
                  <li>Choose a refund method (Credit Card or Bank Transfer)</li>
                  <li>Book refund</li>
                </ul>
              </li>
              <li>
                Our team will review your returned items and process the refund.
              </li>
            </ul>
            <h2 className="text-[14px] font-bold">
              How long will refund take?
            </h2>
            <p className="text-[14px]">
              After we receive returned items, It may take 2 weeks to process
              the refund.
            </p>
            <h2 className="text-[14px] font-bold">
              How do I check my return status?
            </h2>
            <p className="text-[14px]">
              You may check return status in "My Returns"
            </p>
            <h2 className="text-[14px] font-bold">
              If my order eligible to be refunded?
            </h2>
            <ul className="text-sm list-decimal pl-4 ml-2">
              <li>Eligible to return in 14 days after purchase date</li>
              <li>Returns must be in their original condition, Not used</li>
              <li>
                For hygienic purposes, the following products are
                non-returnable: swimwear, lingerie, sock, towel, glove, blanket,
                mattress, earrings and other accessories
              </li>
              <li className="text-red-500 text-[14px]">
                Items purchased on SALE cannot be refunded and are only eligible
                for exchange.
              </li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>
        {/**Purchase */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenPurchase(!isOpenPurchase)}
            >
              <h2 className="text-[16px] font-bold">Purchase</h2>
              <i
                className={`fa-solid ${
                  isOpenPurchase ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`flex flex-col gap-1 overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenPurchase ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[14px] font-bold mt-2">
              Where can I make an order?
            </h2>
            <ul className="text-sm list-decimal pl-4 ml-2">
              <li>
                Order from our website:{" "}
                <a
                  className="text-red-600 underline"
                  href="https://phka-plush.vercel.app/"
                >
                  "WWW.ELEVATE.COM"
                </a>
              </li>
              <li>Order from TEN11 APP</li>
              <li>
                Order from telegram channel{" "}
                <a
                  href="https://t.me/zandoonline"
                  className="text-red-600 underline"
                >
                  "https://t.me/zandoonline"
                </a>
              </li>
              <li>
                From Facebook page{" "}
                <a
                  href="https://web.facebook.com/ten11kh/?_rdc=1&_rdr#"
                  className="text-red-600 underline"
                >
                  TEN11 CAMBODIA
                </a>
              </li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>
        {/**Sizing & Fit */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenSizing_Fit(!isOpenSizing_Fit)}
            >
              <h2 className="text-[16px] font-bold">Sizing & Fit</h2>
              <i
                className={`fa-solid ${
                  isOpenSizing_Fit ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`flex flex-col gap-1 overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenSizing_Fit ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[14px] font-bold mt-2">
              How do to choose the correct size for me?
            </h2>
            <ul className="text-sm list-decimal pl-4 ml-2">
              <li>
                Model measurement and size are available for each product, you
                can compare model size with yours.
              </li>
              <li>
                Size guide is available with each product, to begin go to size
                guide section and then input your height and weight to see size
                suggestions for you.
              </li>
            </ul>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpenContactUs(!isOpenContactUs)}
            >
              <h2 className="text-[16px] font-bold">Contact Us</h2>
              <i
                className={`fa-solid ${
                  isOpenContactUs ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div
            className={`flex flex-col gap-1 overflow-hidden transition-[max-height]  duration-900 ease-in-out ${
              isOpenContactUs ? "max-h-[500px]" : " max-h-[0]"
            }`}
          >
            <h2 className="text-[14px] mt-2">
              Live Chat:{" "}
              <a
                href="https://web.facebook.com/ten11kh/?_rdc=1&_rdr#"
                className="text-[#1877F2] text-[14px] underline"
              >
                Facebook
              </a>
              ,{" "}
              <a
                href="https://www.tiktok.com/@ten11_official?lang=km-KH"
                className="text-[14px] underline"
              >
                Tik Tok
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/ten11kh"
                className="text-[#E1306C] text-[14px] underline"
              >
                Instagram
              </a>{" "}
              or <a href="https://phka-plush.vercel.app/">Our Website</a>
            </h2>
            <h2 className="text-[14px]">
              Email:{" "}
              <a className="text-[14px] underline"> support@elevate.com</a>
            </h2>
            <h2 className="text-[16px]">
              Phone:
              <ul className="text-sm list-disc pl-4 ml-2">
                <li>085 330 330</li>
              </ul>
            </h2>
            <h2 className="text-[14px]">
              Telegram:{" "}
              <a
                href="https://t.me/phkaofficial"
                className="text-[14px] underline"
              >
                https://t.me/zandoonline
              </a>
            </h2>
            <h2 className="text-[15px] mt-2">Monday - Sunday, 9AM - 21:30PM</h2>
          </div>
          <div className="border border-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setPolicy(!policy)}
            >
              <h2 className="text-[16px] font-bold">Privacy Policy</h2>
              <i
                className={`fa-solid ${
                  policy ? "fa-minus" : "fa-plus"
                } transition-all duration-300 text-sm`}
              ></i>
            </div>
          </div>
          <div className="border border-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export default FAQsGuides;
